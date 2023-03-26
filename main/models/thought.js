const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            //now we add in the length parameters of 1-280 characters   
            length: [1, 280],
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            //using a getter method to format the timestamp on query
            get: (timeOfCreation) => dateFormat(timeOfCreation),
        },
        //array of nested documents created with subdocument reactionSchema
        reaction: [reactionSchema],
    },
    {
        //we need to include virtual properties when converting data to JSON 
        toJSON: {
            virtuals: true,
        },
    }
);

//defining a virtual property of the thought schema to calculate the amount of reactions a thought has
userSchema.virtual('reactionCount').get(function () {
    return this.reaction.length;
});

//this is where we create a new mongoose model using the userSchema
const Thought = model('Thought', thoughtSchema);

//now we export the User model so that we can use it in other files
module.exports = Thought    ;
