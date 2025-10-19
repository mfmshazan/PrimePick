import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProductStore } from "../store/product";
import { FiPackage, FiDollarSign, FiImage, FiPlusCircle, FiTag } from "react-icons/fi";

const CATEGORIES = [
  'Shoes',
  'Watches',
  'Electronics',
  'Clothing',
  'Accessories',
  'Sports',
  'Books',
  'Home & Kitchen',
  'Beauty',
  'Other'
];

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
    category: "",
  });
  const navigate = useNavigate();
  const { createProduct } = useProductStore();

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    if (success) {
      alert(message);
      setNewProduct({ name: "", price: "", image: "", category: "" });
      navigate("/");
    } else {
      alert(message);
    }
  };

  return (
    <div className="create-page">
      <div className="create-container">
        <div className="create-header">
          <h1 className="create-title">
            <FiPlusCircle className="title-icon" />
            Add New Product
          </h1>
          <p className="create-subtitle">
            Fill in the details below to add a new product to your store
          </p>
        </div>

        <div className="form-card">
          <div className="form-group">
            <label className="form-label">
              <FiPackage className="label-icon" />
              Product Name
            </label>
            <input
              type="text"
              className="form-input"
              placeholder="Enter product name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              <FiTag className="label-icon" />
              Category
            </label>
            <select
              className="form-input"
              value={newProduct.category}
              onChange={(e) =>
                setNewProduct({ ...newProduct, category: e.target.value })
              }
            >
              <option value="">Select a category</option>
              {CATEGORIES.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">
              <FiDollarSign className="label-icon" />
              Price
            </label>
            <input
              type="number"
              className="form-input"
              placeholder="Enter price"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              <FiImage className="label-icon" />
              Image URL
            </label>
            <input
              type="text"
              className="form-input"
              placeholder="Enter image URL"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
            />
          </div>

          {newProduct.image && (
            <div className="image-preview">
              <p className="preview-label">Image Preview:</p>
              <img
                src={newProduct.image}
                alt="Preview"
                className="preview-image"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>
          )}

          <button onClick={handleAddProduct} className="btn-submit">
            <FiPlusCircle />
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;