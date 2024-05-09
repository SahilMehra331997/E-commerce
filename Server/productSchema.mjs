import { Schema } from 'mongoose';

const productSchema = new Schema({
    title: String,
    price: Number,
    colors: String,
    category: String,
    desc: String,
    image: String,
    size: String,
    quantity: Number,
});

export default productSchema;
