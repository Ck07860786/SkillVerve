import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    availability: {
        type: [Date],
        required: true,
    },
    image: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    instructor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category', 
        required: true,
    },
    slug:{
        type:String,
        lowercase:true,

    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
});

export default mongoose.model('Skill', skillSchema);



