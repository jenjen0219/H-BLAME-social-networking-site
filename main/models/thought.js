const { Schema, model } = require('mongoose');
//in order to align with the correct continuity of the code, the reactionSchema needs to be defined before the thoughtSchema
const reactionSchema = require('./reaction');

function dateFormat(date) {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
}


const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            //now we add in the length parameters of 1-280 characters   
            minlength: 1,
            maxlength: 280
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            //using a getter method to format the timestamp on query
            // get: (createdAtVal) => dateFormat(createdAtVal),
            get: timestamp => dateFormat(timestamp),

        },
        //array of nested documents created with subdocument reactionSchema
        reactions: [reactionSchema],
    },
    {
        //we need to include virtual properties when converting data to JSON 
        toJSON: {
            virtuals: true,
            //the purpose of getters is to format the timestamp on query
            getters: true,
        },
    }
);

//so this is also considered a subdocument because it is nested within the thoughtSchema and it is also a virtual property because it is not stored in the database
//defining a virtual property of the thought schema to calculate the amount of reactions a thought has
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

//this is where we create a new mongoose model using the userSchema
const Thought = model('Thought', thoughtSchema);

//now we export the User model so that we can use it in other files
module.exports = Thought;
