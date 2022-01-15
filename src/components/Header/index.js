// Write your JS code here

import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <img
        className="website-logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
      />
      <ul className="button-container">
        <li className="links">Home</li>
        <li className="links">Products</li>
        <li className="links">Cart</li>
        <button type="button" className="logout-desktop-btn">
          Logout
        </button>
      </ul>
    </div>
  </nav>
)
export default Header
