'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Events', [{
      name: 'Intercon',
      description: 'O Intercon é um evento brasileiro sobre criatividade, tecnologia, inovação e desenvolvimento web de alto nível.',
      place: 'A definir',
      city: 'São Paulo',
      eventStart: new Date('2018-10-08'),
      eventEnd: new Date('2018-10-10'),
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    }, {
      name: 'PHP Conference',
      description: 'A conferência reúne as principais empresas e profissionais do mercado de PHP.',
      place: 'A definir',
      city: 'Osasco – SP',
      eventStart: new Date('2018-10-10'),
      eventEnd: new Date('2018-10-11'),
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    }, {
      name: 'Python Brasil',
      description: 'A PythonBrasil é o maior evento sobre linguagem de programação Python do Brasil.',
      place: 'A definir',
      city: 'Natal – RN',
      eventStart: new Date('2018-11-17'),
      eventEnd: new Date('2018-11-22'),
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    }, {
      name: 'QCon SP',
      description: 'É uma conferência internacional de desenvolvimento de software que tem como propósito disseminar o conhecimento e inovação para as comunidades de desenvolvedores.',
      place: 'A definir',
      city: 'Natal – RN',
      eventStart: new Date('2018-05-09'),
      eventEnd: new Date('2018-05-10'),
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    }, {
      name: 'REACT CONF BRASIL',
      description: 'Neste ano, queremos continuar fazendo história e realizar a segunda edição da React Conf Brasil, mantendo nosso propósito e aumentando o número de desenvolvedores participantes.      ',
      place: 'Teatro Brigadeiro',
      city: 'São Paulo - SP',
      eventStart: new Date('2018-10-20'),
      eventEnd: new Date('2018-10-20'),
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Events', null, {})
  },


};
