import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ['Shoes', 'Watches', 'Electronics', 'Clothing', 'Accessories', 'Sports', 'Books', 'Home & Kitchen', 'Beauty', 'Other'],
        default: 'Other'
    }
},{
    timestamps:true //createdAt updatedAt
});

const Product = mongoose.model("Product", productSchema);   

export default Product;