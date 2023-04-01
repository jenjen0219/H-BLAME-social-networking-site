const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    // _id 
    //not mentioned in the parameters given in the homework but isn't is insinuated that an ObjectId is required for the user?
    //oh okay so mongoose actually has a built in method for creating an ObjectId so we don't need to include a userId property
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match:  [/.+@.+\..+/, 'Please enter a valid e-mail address'],
    },
    //this will be an array of the friends that the user has
    friends: [
      {
        //
        type: Schema.Types.ObjectId,
        //here we are referncing the already created user model that will contain the various ids of the friends that this user has 
        ref: 'User'
      }
    ],
    //this will give us an array of all the thoughts the user has made
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }
    ]
  },
  {
    //we need to include virtual properties when converting data to JSON 
    toJSON: {
      virtuals: true,
    },
    id: false
  }
);


//defining a virtual property of the user schema to calculate the amount of friends a user has
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

//this is where we create a new mongoose model using the userSchema
const User = model('User', userSchema);

//now we export the User model so that we can use it in other files
module.exports = User;

