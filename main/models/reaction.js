const { Schema, Types } = require('mongoose');

function dateFormat(date) {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
}

const reactionSchema = new Schema(
    {
        //the reason why we need a reactionId here is because we need to be able to reference the reactionId in the thought model since it is not automatically created by mongoose like the thoughtId is considering that it is a subdocument
        reactionId: {
            type: Schema.Types.ObjectId,
            default: new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280,
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

        }
    },
    {
        toJSON: {
            getters: true,
        },
    });


module.exports = reactionSchema;