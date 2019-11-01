const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var moment = require('moment');

// Define collection and schema for Post
let Post = new Schema({
  content: {
    type: String
  },
  name: {
    type: String
  },
  timestamp: {
    type: String
    // default: () => moment().format('lll')
  }
},{
    collection: 'messages'
});

module.exports = mongoose.model('Post', Post);
