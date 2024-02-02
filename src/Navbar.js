function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <div className="down">
          <img src="./pictures/down.png" alt="down" />
        </div>
        <div>
          <img src="./pictures/mcdo-logo.png" alt="logo" className="logo" />
        </div>
        <ul>
          <li>
            <a href="#" class="current">
              Home
            </a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Family Activities</a>
          </li>
          <li>
            <a href="#">McDelivery</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Opportunities</a>
          </li>
        </ul>
        <div>
          <img src="./pictures/more-nav.png" alt="logo" className="more" />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
