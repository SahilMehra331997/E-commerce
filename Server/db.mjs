import { connect, mongoose } from 'mongoose';

export async function connectToDatabase() {
    try {
        await connect('mongodb://localhost:27017/admin', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err.message);
        process.exit(1);
    }
}

export { mongoose };