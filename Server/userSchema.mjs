import { Schema } from 'mongoose';

const userSchema = new Schema({
   username:String,
   password:String,
});

export default userSchema;