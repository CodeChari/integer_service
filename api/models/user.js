const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: {type: String, 
    required : true, 
     unique: true, 
     match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/},
  password: {type: String, required : true},
  integer: {type: Number, min: [0, 'Please be positive'], required : true,  default: 0,
},
});

module.exports = mongoose.model('User', userSchema);
