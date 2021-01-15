const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/reisimilarProducts', {useNewUrlParser: true, useUnifiedTopology: true});
const database = mongoose.connection;
database.on('error', console.error.bind(console, 'connection error:'));
database.once('open', function() {
  console.log('connected to database');
});

const productSchema =  new mongoose.Schema({
  name: String,
  imageUrl: String
});
const Product = mongoose.model('Product', productSchema);

var createProduct = function(name, imageUrl) {
  var product = new Product({
    name: name,
    imageUrl: imageUrl
  });
  product.save((err, product) => {
    if (err) {
      return console.error(err);
    }
  });
}

var drop = function(callback) {
  return database.dropDatabase(callback);
}

module.exports = {
  createProduct,
  drop
}