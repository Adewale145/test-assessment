import React, { useState, useEffect } from 'react'

const Dashboard = () => {
    const [recentProducts, setRecentProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [recentOrders, setRecentOrders] = useState([]);

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        try{
            const productsResponse = await fetch('https://fakestoreapi.com/products');
            const productsData = await productsResponse
            .then(res => res.json())
            .then(json => console.log(json))
            setRecentProducts(productsData.slice(0, 5));
            
            const categoriesResponse = await fetch('https://fakestoreapi.com/categories');
            const categoriesData = await categoriesResponse
            .then(res => res.json())
            .then(json => console.log(json))
            const categoriesWithCounts = categoriesData.map(category => ({
                name: category,
                productCount: productsData.filter(product => product.category === category.length)
            }));
            setCategories(categoriesWithCounts);

            const ordersResponse = await fetch('https://fakestoreapi.com/orders');
            const ordersData = await ordersResponse
            .then(res => res.json())
            .then(json => console.log(json))
            setRecentOrders(ordersData.slice(0, 5));
        } catch (error) {
            console.error("Data fetching error:", error);
        }
    };

    const renderTable = (data, columns) => (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        {columns.map((column, index) => (
                            <th key={index}>{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            {columns.map((column, index) => (
                                <td key={index}>{item[column.toLowerCase()]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

  return (
    <div className="dash-container">
        <div className="section">
            <h2 className="category-title">Recent Products</h2>
            {renderTable(recentProducts, ['Title', 'Price', 'Description', 'Category'])}
        </div>

        <div className="section">
            <h2 className="category-title">Categories</h2>
            {renderTable(categories, ['Title', 'Price', 'Category', 'Description'])}
        </div>

        <div className="section">
            <h2 className="category-title">Recent Orders</h2>
            {renderTable(recentOrders, ['title', 'Orders', 'Total', 'Status'])}
        </div>
    </div>
  )
}

export default Dashboard;