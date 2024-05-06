import { Schema } from 'mongoose';

const adminSchema = new Schema({
    email: String,
    password: String
});

export default adminSchema;