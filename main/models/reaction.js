const {Schema, Types} = require('mongoose');

const reactionSchema = new Schema(
    {
        //the reason why we need a reactionId here is because we need to be able to reference the reactionId in the thought model since it is not automatically created by mongoose like the thoughtId is considering that it is a subdocument
        reactionId: {
            type: mongoose.Schema.Types.ObjectId,
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
            get: (timeOfCreation) => dateFormat(timeOfCreation),
        },
    },
    {
        toJSON: {
            getters: true,
        },
    });

    module.exports = reactionSchema;