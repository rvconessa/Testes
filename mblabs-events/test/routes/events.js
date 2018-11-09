import jwt from "jwt-simple";
import "@babel/polyfill";

const Event = app.models.index.Event;
const User = app.models.index.User;
const jwtSecret = app.config.config.jwtSecret;
let token;
let fakeEvent;

  before(async () => {
    await User.sync();
    await Event.sync();
  });
  //Cria um usuario e um evento para realizar os teste
  beforeEach(done => {
    User
      .destroy({where: {}})
      .then(() => User.create({
        firstName: "MBLabs",
        lastName: "Sistemas",
        email: "mblabs@teste.com.br",
        password: "123456"
      }))
    .then(user => {
      Event
        .destroy({where: {}})
        .then(() => Event.create({
          name: 'Intercon',
          description: 'O Intercon é um evento brasileiro sobre criatividade, tecnologia, inovação e desenvolvimento web de alto nível.',
          place: 'A definir',
          city: 'São Paulo',
          eventStart: new Date('2018-10-08'),
          eventEnd: new Date('2018-10-10'),
          createdAt: new Date('2018-10-10'),
          updatedAt: new Date('2018-10-10')
        }))
        .then(event => {
          fakeEvent = event;
          token = jwt.encode({id: user.id}, jwtSecret);
          done();
        });
    });
});

describe("GET /events status 200", () => {
  it("Check return events", done => {
    request.get("/events")
      .expect(200)
      .end((err, res) => {
        expect(res.body).to.be.an('array');
        done(err);
      });
  });
});

describe("Check return event by ID", () => {
  it("get event by id 1", done => {
    request.get(`/events/${fakeEvent.id}`)
      .expect(200)
      .end((err, res) => {
        expect(res.body).to.have.property('name')
        done(err);
      });
  });
});

describe("Subscrible event", () => {
  it("Subscrible event", done => {
    request.get(`/events/${fakeEvent.id}/subscrible`)
      .set("Authorization", `bearer ${token}`)
      .expect(200)
      .end((err, res) => {
        expect(res.body).to.be.an('array')
        done(err);
      });
  });
});

describe("Unsubscrible event", () => {
  it("Unsubscrible event", done => {
    request.delete(`/events/${fakeEvent.id}/unsubscrible`)
      .set("Authorization", `bearer ${token}`)
      .expect(204)
      .end((err, res) => done(err));
  });
});
