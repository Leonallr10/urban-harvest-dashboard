import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setSearchQuery,
  setFilterStatus,
  addProduct,
  selectFilteredProducts,
} from "../../store/slices/productsSlice";
import { Search, Plus, X } from "lucide-react";
import "./Products.css";

function Products() {
  const dispatch = useDispatch();
  const { searchQuery, filterStatus } = useSelector((state) => state.products);
  const filteredProducts = useSelector(selectFilteredProducts);
  const [showModal, setShowModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
  });

  const handleAddProduct = (e) => {
    e.preventDefault();
    const product = {
      id: Date.now(),
      ...newProduct,
      price: parseFloat(newProduct.price),
      status: "Available",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200",
    };
    dispatch(addProduct(product));
    setNewProduct({ name: "", category: "", price: "", description: "" });
    setShowModal(false);
  };

  return (
    <div className="products-page">
      <div className="products-page__header">
        <div>
          <h1>Products</h1>
          <p>Manage your food items and menu</p>
        </div>
        <button className="add-product-btn" onClick={() => setShowModal(true)}>
          <Plus size={18} />
          Add Product
        </button>
      </div>

      <div className="products-page__filters">
        <div className="search-box">
          <Search size={18} />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => dispatch(setSearchQuery(e.target.value))}
          />
        </div>
        <div className="filter-tabs">
          {["All", "Available", "Out of Stock"].map((status) => (
            <button
              key={status}
              className={`filter-tab ${filterStatus === status ? "active" : ""}`}
              onClick={() => dispatch(setFilterStatus(status))}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-card__image">
              <img src={product.image} alt={product.name} />
              <span
                className={`product-status ${
                  product.status === "Available"
                    ? "product-status--available"
                    : "product-status--out"
                }`}
              >
                {product.status}
              </span>
            </div>
            <div className="product-card__body">
              <span className="product-category">{product.category}</span>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-desc">{product.description}</p>
              <div className="product-card__footer">
                <span className="product-price">
                  ${product.price.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="products-empty">
          <p>No products found matching your criteria.</p>
        </div>
      )}

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Add New Product</h2>
              <button
                className="modal-close"
                onClick={() => setShowModal(false)}
              >
                <X size={20} />
              </button>
            </div>
            <form className="modal-form" onSubmit={handleAddProduct}>
              <div className="modal-field">
                <label>Product Name</label>
                <input
                  type="text"
                  required
                  value={newProduct.name}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, name: e.target.value })
                  }
                  placeholder="Enter product name"
                />
              </div>
              <div className="modal-field">
                <label>Category</label>
                <input
                  type="text"
                  required
                  value={newProduct.category}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, category: e.target.value })
                  }
                  placeholder="e.g., Bowls, Salads, Beverages"
                />
              </div>
              <div className="modal-field">
                <label>Price ($)</label>
                <input
                  type="number"
                  step="0.01"
                  required
                  value={newProduct.price}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, price: e.target.value })
                  }
                  placeholder="0.00"
                />
              </div>
              <div className="modal-field">
                <label>Description</label>
                <textarea
                  value={newProduct.description}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, description: e.target.value })
                  }
                  placeholder="Brief product description"
                  rows={3}
                />
              </div>
              <button type="submit" className="modal-submit">
                Add Product
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
