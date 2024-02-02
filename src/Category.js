function Category() {
    return (
      <div className="category">
        <div class="title1">Breakfast</div>
        <div class="title2">Burgers</div>
        <div class="title3">Chicken & Platters</div>
        <div class="title4">Drinks & Desserts</div>
        <div class="title5">McCafé</div>
        <div class="title6">Fries</div>
  
        <div className="category-images" align="center">
          <img src="./pictures/Breakfast.jpeg" alt="breakfast" />
          <img src="./pictures/Burgers.jpeg" alt="burgers" />
          <img src="./pictures/ChickenPlatters.jpeg" alt="chickenplatters" />
        </div>
  
        <div className="category-imagess" align="center">
          <img
            className="category-cat"
            src="./pictures/Dessert-and-Drinks.jpeg"
            alt="dessertanddrinks"
          />
  
          <img src="./pictures/McCafe.jpeg" alt="mccafe" />
          <img src="./pictures/Fries.jpeg" alt="fries" />
        </div>
      </div>
    );
  }

  export default Category;