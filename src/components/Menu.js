import './Menu.css'

const Menu = () =>{
    return (
        <div className="menu-container">
            <div className="title-container">
                <h1 className="menu-title">Little Lemon Restaurant Menu</h1>
            </div>
            <div className="menu-items">
                <div className="menu-category">
                    <h2>Appetizers</h2>
                    <ul>
                        <li>Garlic Bread - $5.00</li>
                        <li>Stuffed Mushrooms - $7.50</li>
                        <li>Bruschetta - $6.00</li>
                    </ul>
                </div>
                <div className="menu-category">
                    <h2>Main Courses</h2>
                    <ul>
                        <li>Spaghetti Carbonara - $12.00</li>
                        <li>Grilled Chicken Breast - $15.00</li>
                        <li>Vegetable Stir-fry - $10.00</li>
                    </ul>
                </div>
                <div className="menu-category">
                    <h2>Desserts</h2>
                    <ul>
                        <li>Cheesecake - $6.50</li>
                        <li>Tiramisu - $7.00</li>
                        <li>Chocolate Mousse - $5.50</li>
                    </ul>
                </div>
                <div className="menu-category">
                    <h2>Beverages</h2>
                    <ul>
                        <li>Lemonade - $3.00</li>
                        <li>Fresh Mint Tea - $2.50</li>
                        <li>Espresso - $2.00</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Menu;