import express from 'express';
import { mongoose } from 'mongoose';
import cors from 'cors';
import { connectToDatabase } from './db.mjs';
import adminSchema from './adminSchema.mjs';
import productSchema from'./productSchema.mjs';
import userSchema from './userSchema.mjs'

const app = express();
await connectToDatabase();
app.use(express.json());
app.use(cors());

// Function to create routes for fetching data
function createFetchRoute(model, routePath) {
    app.get(routePath, async (req, res) => {
        try {
            const details = await model.find();
            res.json(details);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });
    app.post(routePath, async (req, res) => {
        try {
            const newData = new model(req.body);
            await newData.save();
            res.status(201).json(newData);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }); 
}


// Model definitions
const Admin = mongoose.model('admins', adminSchema);
const Product = mongoose.model('products', productSchema);
const User = mongoose.model('users', userSchema);

// Create routes
createFetchRoute(Admin, '/api/admins');
createFetchRoute(Product, '/api/products');
createFetchRoute(User, '/api/users');


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
