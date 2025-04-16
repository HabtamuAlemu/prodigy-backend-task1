const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(  // Changed 'schema' to 'Schema' and added 'new'
    {
        name: {
            type: String,
            required: [true, "Please enter product name"],
            trim: true  // Added to remove whitespace
        },
        quantity: {
            type: Number,
            required: true,
            default: 0,
            min: [0, "Quantity cannot be negative"]  // Added validation
        },
        price: {
            type: Number,
            required: true,
            default: 0,  // Fixed typo 'defualt' to 'default'
            min: [0, "Price cannot be negative"]  // Added validation
        },
        image: {  // Changed 'Image' to lowercase for consistency
            type: String,
            required: false
        }
    },
    {
        timestamps: true,
        versionKey: false  // Disables the __v field
    }
);

// Added pre-save hook for additional validation/processing
ProductSchema.pre('save', function(next) {
    // You could add price rounding here for example:
    // this.price = Math.round(this.price * 100) / 100;
    next();
});

// Static methods
ProductSchema.statics.findByName = async function(name) {
    return await this.find({ name: new RegExp(name, 'i') });
};

// Instance methods
ProductSchema.methods.logInfo = function() {
    console.log(`Product ${this.name} has ${this.quantity} units at $${this.price} each`);
};

const Product = mongoose.model("Product", ProductSchema);  // Capitalized 'product' to 'Product'

module.exports = Product;  // Added export