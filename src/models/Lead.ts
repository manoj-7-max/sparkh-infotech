import mongoose from 'mongoose';

const LeadSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Please provide an email'],
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please fill a valid email address',
        ],
    },
    phone: {
        type: String,
        required: [true, 'Please provide a phone number'],
    },
    service: {
        type: String,
        required: [true, 'Please select a service'],
    },
    message: {
        type: String,
        maxlength: [500, 'Message cannot be more than 500 characters'],
    },
    status: {
        type: String,
        enum: ['New', 'Contacted', 'Closed', 'Spam'],
        default: 'New',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.models.Lead || mongoose.model('Lead', LeadSchema);
