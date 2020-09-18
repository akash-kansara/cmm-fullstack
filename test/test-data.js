const faker = require('faker');

let user1 = {
  firstname: faker.name.firstName(),
  lastname: faker.name.lastName(),
  avatar: faker.image.avatar()
}

let user2 = {
  firstname: faker.name.firstName(),
  lastname: faker.name.lastName(),
  avatar: faker.image.avatar()
}

module.exports = {
  user1, user2
}