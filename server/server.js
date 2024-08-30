import path from 'path';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import { fileURLToPath } from 'url';

// Manually create __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, './.env') });

const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // Allow requests from the Vite server
}));
app.use(express.json());

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, '../dist')));

// MongoDB Connection
async function main() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected successfully");
    } catch (err) {
        console.error("Error connecting to MongoDB", err);
        process.exit(1);
    }
}

main();

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html')); // Ensure path is correct
});

// Start the server
const PORT = process.env.PORT || 2000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
