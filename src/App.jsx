import './App.css';

function App() {
    const products = [
        {
            id: 1,
            name: 'The Classic Blazer',
            price: '$120',
            category: 'Clothing',
            image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600'
        },
        {
            id: 2,
            name: 'Elegant Evening Dress',
            price: '$180',
            category: 'Dresses',
            image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600'
        },
        {
            id: 3,
            name: 'The Luxury Collection',
            price: '$150',
            category: 'Fashion',
            image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600'
        },

        {
            id: 4,
            name: 'The Everyday Joggers',
            category: 'Joggers',
            price: '$45',
            image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=600',
            colors: ['Black', 'Grey', 'Cream', 'Brown', 'Navy']
        },

        {
            id: 5,
            name: 'The Rhinestone Crop',
            category: 'Stone Collection',
            price: '$35',
            image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600',
            colors: ['Black', 'White', 'Pink', 'Silver']
        },

      {
  id: 6,
  name: "The Rhinestone Trousers",
  category: "Stone Collection",
  price: "$65",
  image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600",
  colors: ["Black", "Blue", "Grey"]
},
{
  id: 7,
  name: "The Classic Pants",
  category: "Everyday Trousers",
  price: "$50",
  image: "https://images.unsplash.com/photo-17700557478789-5e3fdb3e29ff?auto=format&fit=crop&fm=jpg&q=80&w=600",
  colors: ["Black", "Brown", "Cream", "Grey"]
},
{
  id: 8,
  name: "The Essential Top",
  category: "Basic Tops",
  price: "$25",
  image: "https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=600",
  colors: ["White", "Black", "Brown", "Grey"]
},
{
  id: 9,
  name: "The Everyday Top",
  category: "Casual Tops",
  price: "$30",
  image: "https://images.unsplash.com/photo-1564257577-6a9b5f8e5c1d?w=600",
  colors: ["White", "Black", "Pink", "Blue"]
},
    ];

    return (
        <div className="app">

            <nav className="navbar">
                <h2>MADISON ÉLARÉ</h2>

                <div className="nav-links">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#products">Collections</a>
                    <a href="#contact">Contact</a>
                </div>
            </nav>

            <section className="hero" id="home">
                <div className="hero-content">
                    <p>THE ART OF TIMELESS FASHION</p>

                    <h1>Elegance is an attitude.</h1>

                    <p>
                        Discover timeless pieces designed
                        for the modern woman.
                    </p>

                    <a href="#products" className="shop-button">
                        EXPLORE COLLECTION
                    </a>
                </div>
            </section>

            <section className="about" id="about">
                <h2>Welcome to Madison Élaré</h2>

                <p>
                    We believe fashion is more than clothing.
                    It is an expression of confidence,
                    individuality and timeless elegance.
                </p>
            </section>

            <section className="products" id="products">
                <h2>Our Collections</h2>

                <div className="product-container">

                    {products.map((product) => (
                        <div className="product-card" key={product.id}>

                            <img src={product.image} alt={product.name} />

                            <h3>{product.name}</h3>

                            <p>{product.category}</p>

                            <h4>{product.price}</h4>

                            <button>View Collection</button>

                        </div>
                    ))}

                </div>
            </section>

            <section className="contact" id="contact">
                <h2>Get in Touch</h2>

                <p>We would love to hear from you.</p>

                <p>Email: hello@madisonelare.com</p>

            </section>

            <footer>
                <p>© 2026 MADISON ÉLARÉ. ALL RIGHTS RESERVED.</p>
            </footer>

        </div>
    );
}

export default App;


