import { Schema } from 'mongoose';

const productSchema = new Schema({
    title: String,
    price: Number,
    color: String,
    categories: String,
    desc: String,
    image: String,
    size: String,
    quantity: Number,
    productId: String
});

export default productSchema;
