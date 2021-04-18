var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var productSchema = new Schema({

  question: { type: String, Required:  ' cannot be left blank.' },
  
  option1: { type: String ,    Required:  ' cannot be left blank.'},
  
  option2:    { type: String,     Required:  'cannot be left blank.'},

  option3: { type: String,  Required:  'cannot be left blank.'},

  option4: { type: String,  Required:  'cannot be left blank.'}
});

module.exports = mongoose.model('Products', productSchema);