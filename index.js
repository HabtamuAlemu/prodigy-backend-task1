// index.js

// Importing modules
import express from 'express';
import mongoose from 'mongoose';
import productRoute from './routes/product.route.js';

// Create app
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/products', productRoute);

// Root route
app.get('/', (req, res) => {
    res.send('Hello, this is from the Node API server!');
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/productsDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB!');
    app.listen(3000, () => {
        console.log('Server is running at http://localhost:3000');
    });
}).catch((error) => {
    console.error('Database connection failed:', error);
});
