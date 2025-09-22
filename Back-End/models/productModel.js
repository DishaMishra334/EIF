// backend/models/productModel.js
import mongoose from 'mongoose';


const variantSchema = new mongoose.Schema({
    size: {
        type: String,
        required: true,
    },
    new_price: {
        type: Number,
        required: true,
    },
    old_price: {
        type: Number,
        default: 0,
    },
});


const productSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    
    image: {
        type: Array,
        required: true, 
    },
    
    variants: {
        type: [variantSchema],
        required: true,
    },
    bestseller: {
        type: Boolean,
        default: false,
    },
    date: {
        type: Date,
        default: Date.now,
    }
});


const productModel = mongoose.model('product', productSchema);

export default productModel;

