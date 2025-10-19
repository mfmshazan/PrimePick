import { useState } from "react";
import { FiEdit2, FiTrash2, FiX, FiCheck, FiTag } from "react-icons/fi";
import { useProductStore } from "../store/product";

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

const ProductCard = ({ product }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const { deleteProduct, updateProduct } = useProductStore();

  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    if (success) {
      alert(message);
    }
  };

  const handleUpdateProduct = async (pid, updatedProduct) => {
    const { success, message } = await updateProduct(pid, updatedProduct);
    if (success) {
      alert(message);
      setIsEditing(false);
    }
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="category-badge">{product.category}</div>
        <div className="product-overlay">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="icon-btn edit-btn"
            title="Edit"
          >
            <FiEdit2 />
          </button>
          <button
            onClick={() => handleDeleteProduct(product._id)}
            className="icon-btn delete-btn"
            title="Delete"
          >
            <FiTrash2 />
          </button>
        </div>
      </div>

      {isEditing ? (
        <div className="product-edit-form">
          <input
            type="text"
            className="edit-input"
            value={updatedProduct.name}
            onChange={(e) =>
              setUpdatedProduct({ ...updatedProduct, name: e.target.value })
            }
            placeholder="Product Name"
          />
          <select
            className="edit-input"
            value={updatedProduct.category}
            onChange={(e) =>
              setUpdatedProduct({ ...updatedProduct, category: e.target.value })
            }
          >
            <option value="">Select category</option>
            {CATEGORIES.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <input
            type="number"
            className="edit-input"
            value={updatedProduct.price}
            onChange={(e) =>
              setUpdatedProduct({ ...updatedProduct, price: e.target.value })
            }
            placeholder="Price"
          />
          <input
            type="text"
            className="edit-input"
            value={updatedProduct.image}
            onChange={(e) =>
              setUpdatedProduct({ ...updatedProduct, image: e.target.value })
            }
            placeholder="Image URL"
          />
          <div className="edit-actions">
            <button
              onClick={() => handleUpdateProduct(product._id, updatedProduct)}
              className="save-btn"
            >
              <FiCheck /> Save
            </button>
            <button onClick={() => setIsEditing(false)} className="cancel-btn">
              <FiX /> Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="product-info">
          <div className="product-category-tag">
            <FiTag /> {product.category}
          </div>
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">${product.price}</p>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
