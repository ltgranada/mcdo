import "./App.css";
import Navbar from "./Navbar.js";
import Header from "./Header.js";
import Category from "./Category.js";
import Quality from "./Quality.js";
import Menu from "./Menu.js";
import Menu2 from "./Menu2.js";
import Footer from "./Footer.js";

function App() {
  const isMenu = true;
  if (isMenu) {
    return (
      <div className="container">
        <Navbar />
        <Header />
        <Category />
        <Quality />
        <Menu2 />
        <Footer />
      </div>
    );
  } else {
    return (
      <div className="container">
        <Navbar />
        <Header />
        <Category />
        <Quality />
        <Menu />
        <Footer />
      </div>
    );
  }
}

export default App;
