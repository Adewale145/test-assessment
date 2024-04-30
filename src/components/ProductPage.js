import { useState } from "react"
import { useDispatch } from "react-redux"
import { addProduct } from "../store/actions/productActions" 

const ProductPage = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [discription, setDiscription] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!title || !price || !discription || !category){
        alert('Please fill in all fields');
        return;
    }
    // Dispatch addProduct action with form data
    dispatch(addProduct({ title, discription,category, price: parseFloat(price) }));
    // Reset form fields
    setTitle('');
    setDiscription('');
    setCategory('');
    setPrice('');
  };

  return (
    <div>
        <form className="product-form" onSubmit={handleSubmit}>
            <label className="product-label">
                Product Title:
                <input
                className="product-input"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                />
            </label>
            <label className="product-label">
                Product Discription:
                <input
                className="product-input"
                type="text"
                value={discription}
                onChange={(e) => setDiscription(e.target.value)}
                required
                />
            </label>
            <label className="product-label">
                Product Category:
                <input
                className="product-input"
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
                />
            </label>
      <label className="product-label">
        Price:
        <input
          className="product-input"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </label>
      <button className="product-btn" type="submit">Add Product</button>
    </form>
    </div>
  )
}

export default ProductPage 