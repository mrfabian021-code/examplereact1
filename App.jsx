
import "./index.css";

export default function App() {
  return (
    <div className="page">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo"><b>Justine Coffee Shop</b></h1>
        <ul className="nav-links">
          <li>Home</li>
          <li>Menu</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Hero */}
      <header className="hero">
        <h2>Fresh Coffee. Cozy Vibes.</h2>
        <p>Your daily cup of happiness, brewed with love.</p>
        <button className="primary-btn">View Menu</button>
      </header>

      {/* Menu Section */}
      <section className="section">
        <h3 className="section-title">Our Favorites</h3>
        <div className="menu">
          <div className="card">
            <h4><b>Espreso</b></h4>
            <p>Rich and bold single shot</p>
          </div>
          <div className="card">
            <h4><b>Cappuccino</b></h4>
            <p>Perfect balance of coffee & foam</p>
          </div>
          <div className="card">
            <h4><b>Latte</b></h4>
            <p>Smooth, creamy, and comforting</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about">
        <h1><b>About Justine</b></h1>
        <p>
          We are a neighborhood coffee shop focused on quality beans, friendly
          faces, and a warm place to relax or work.
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
        © 2026 JUstine Coffee Shop
      </footer>
    </div>
  );
}