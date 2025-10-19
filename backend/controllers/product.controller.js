import mongoose from "mongoose"
import Product from "../models/product.js";

export const getProduct =  async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json({ success: true, data: products });
    }
    catch(error){
        console.log("Error in fetching");
        res.status(404).json({success:false, message:"There is no item"})
    }
};

export const createProduct =  async (req, res) => {
    const product = req.body; //

    if (!product.name || !product.price || !product.image || !product.category) {
        return res.status(400).json({ success: false, message: "Please fill all fields" })
    }

    const newProduct = new Product(product);
    try {
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        console.log("Error in creating product", error.message);
        return res.status(501).json({ success: false, message: "Server Error" });
    }
};

export const updateProduct = async (req,res) => {
    const {id} = req.params;

    const product = req.body;

    if(!mongoose.Types.ObjectId.isValid(id))
        return res.status(500).json({success:false, message:"Invalid product ID"})
    
    try{
        const updatedProduct = await Product.findByIdAndUpdate(id,product, {new:true})
        res.status(201).json({success:true, data:updatedProduct});    
    }
    catch(error){
        console.log("Failed to upload");
        res.status(500).json({success:false, message:"Server Error"})
    }
};

export const deleteProduct =  async (req, res) => {
    const { id } = req.params;
    
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Product deleted" });
    }
    catch (error) {
        res.status(404).json({ success: false, message: "Product not found" });
    }
};