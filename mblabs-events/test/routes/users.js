const User = app.models.index.User;

describe("User", () => {
  it("Create user", done => {
    request.post("/register")
      .send({
        firstName: "MBLabs",
        lastName: "Sistemas",
        email: "mblabs@teste.com.br",
        password: "123456"
      })
      .expect(200)
      .end((err, res) => {
        expect(res.body).to.have.property('id')
        done(err);
      });
  });
});
