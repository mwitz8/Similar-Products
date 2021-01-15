const faker = require('faker');
const database = require('./index');

var seed = function(num) {
  database.drop(() => {
    for (let i = 0; i < num; i++) {
      let name = faker.commerce.productName();
      let imageUrl = faker.image.nature();
      database.createProduct(name, imageUrl);
    }
  })
}

module.exports = {
  seed
}