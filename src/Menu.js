import Foods from "./Foods.js";

const foodsdata = [
  {
    name: "CHICKEN",
    photoName: "./pictures/Chicken.jpeg",
    alt: "chicken",
    description:
      "McDonald’s Chicken McNuggets and Chicken Patties (used for McChicken Sandwich) are made from boneless breast and thigh meat, coated in a tempura batter coating. Chicken McNuggets are shaped to ensure its consistency in weight and coated in a specially seasoned breading. The fried chicken is made from bone-in chicken sourced from reputable suppliers.",
  },

  {
    name: "FRIES",
    photoName: "./pictures/Fries2.jpeg",
    alt: "fries",
    description:
      "McDonald’s world-famous French Fries are produced from only the best, high-quality potatoes of the Russet Burbank, Russet Rangers and Shepody variety. These potatoes are specially blanched and processed to retain its maximum nutrients, then cooked with fat-free Palm Olein Oil. That explains the fluffy inside, crispy outside freshness of McDonald’s fries.",
  },

  {
    name: "EGGS",
    photoName: "./pictures/Eggs.jpeg",
    alt: "Eggs",
    description:
      "All our eggs have thick whites and round, well-centered, protruded yolks. That is because McDonald’s uses farm-fresh, low-cholesterol, grade-A eggs, each going through the rigorous candling process. These eggs are washed and sanitized to remove dirt, then re-coated with mineral oil to ensure they are clean. These are chilled and are only cracked before cooking to retain its quality and taste.      ",
  },

  {
    name: "COFFEE",
    photoName: "./pictures/Coffee.jpeg",
    alt: "coffee",
    description:
      "McDonald’s Premium Roast Coffee is made of 100% pure Arabica coffee beans that are world-famous for its unmistakable quality and produces only the perfect combination of flavor and aroma.      ",
  },

  {
    name: "MILK",
    photoName: "./pictures/Milk.jpeg",
    alt: "milk",
    description:
      "McDonald’s Sundaes are made from milk, sugar, palm oil and stabilizer – a necessary ingredient to give the smooth creamy taste. ",
  },

  {
    name: "CHEESE",
    photoName: "./pictures/Cheese.jpeg",
    alt: "cheese",
    description:
      "McDonald’s uses pasteurized process American cheese slices, perfectly complementing the flavor of pure beef.      ",
  },

  {
    name: "VEGETABLES",
    photoName: "./pictures/Vegetables.jpeg",
    alt: "vegetables",
    description:
      "We use freshly shredded lettuce in our burgers. Our lettuce heads contain no additives or preservatives, sourced from the cold mountains of Bukidnon and Baguio, shredded in McDonald’s approved facility.",
  },
  {
    name: "BUNS",
    photoName: "./pictures/Buns.jpeg",
    alt: "buns",
    description:
      "McDonald’s buns are baked locally and delivered fresh regularly to guarantee maximum taste and freshness.",
  },

  {
    name: "BEEF",
    photoName: "./pictures/Beef.jpeg",
    alt: "beef",
    description:
      "McDonald’s only uses 100% pure beef for its Hamburger, Cheeseburger, Big Mac, Quarter Pounder with cheese and Big N' Tasty with no additives, preservatives or flavor enhancers. Everyday, burger patties are prepared and packaged at McDonald’s approved meat plant. Even before the beef blocks arrive at the plant, McDonald’s supplier conducts several quality checks on every batch. These beef patties are grilled without using fats and oils, seasoned only with salt and pepper for flavoring. ",
  },
];

function Menu() {
  return (
    <div className="menu">
      <div className="foods">
        {foodsdata.map((foods) => (
          <Foods Foods={foods} key={foods.name} />
        ))}
        ;
        {/* <div className="article">
          <div class="centered">CHICKEN</div>
          <img src="./pictures/Chicken.jpeg" alt="chicken" />
          <section className="description">
            <p>
              McDonald’s Chicken McNuggets and Chicken Patties (used for
              McChicken Sandwich) are made from boneless breast and thigh meat,
              coated in a tempura batter coating. Chicken McNuggets are shaped
              to ensure its consistency in weight and coated in a specially
              seasoned breading. The fried chicken is made from bone-in chicken
              sourced from reputable suppliers.
            </p>
          </section>
        </div>

        <div className="article">
          <div class="centered">FRIES</div>
          <img src="./pictures/Fries2.jpeg" alt="fries" />
          <div className="description">
            <p>
              McDonald’s world-famous French Fries are produced from only the
              best, high-quality potatoes of the Russet Burbank, Russet Rangers
              and Shepody variety. These potatoes are specially blanched and
              processed to retain its maximum nutrients, then cooked with
              fat-free Palm Olein Oil. That explains the fluffy inside, crispy
              outside freshness of McDonald’s fries.
            </p>
          </div>
        </div>

        <div className="article">
          <div class="centered">EGGS</div>
          <img src="./pictures/Eggs.jpeg" alt="eggs" />
          <section className="description">
            <p>
              All our eggs have thick whites and round, well-centered, protruded
              yolks. That is because McDonald’s uses farm-fresh,
              low-cholesterol, grade-A eggs, each going through the rigorous
              candling process. These eggs are washed and sanitized to remove
              dirt, then re-coated with mineral oil to ensure they are clean.
              These are chilled and are only cracked before cooking to retain
              its quality and taste.
            </p>
          </section>
        </div>

        <div className="article">
          <div class="centered">COFFEE</div>
          <img src="./pictures/Coffee.jpeg" alt="mccafe" />
          <section className="description">
            <p>
              McDonald’s Premium Roast Coffee is made of 100% pure Arabica
              coffee beans that are world-famous for its unmistakable quality
              and produces only the perfect combination of flavor and aroma.
            </p>
          </section>
        </div>

        <div className="article">
          <div class="centered">MILK</div>
          <img src="./pictures/Milk.jpeg" alt="milk" />
          <section className="description">
            <p>
              McDonald’s Sundaes are made from milk, sugar, palm oil and
              stabilizer – a necessary ingredient to give the smooth creamy
              taste.
            </p>
          </section>
        </div>

        <div className="article">
          <div class="centered">CHEESE</div>
          <img src="./pictures/Cheese.jpeg" alt="cheese" />
          <section className="description">
            <p>
              McDonald’s uses pasteurized process American cheese slices,
              perfectly complementing the flavor of pure beef.
            </p>
          </section>
        </div>

        <div className="article">
          <div class="centered">VEGETABLES</div>
          <img src="./pictures/Vegetables.jpeg" alt="vegetables" />
          <section className="description">
            <p>
              We use freshly shredded lettuce in our burgers. Our lettuce heads
              contain no additives or preservatives, sourced from the cold
              mountains of Bukidnon and Baguio, shredded in McDonald’s approved
              facility.
            </p>
          </section>
        </div>

        <div className="article">
          <div class="centered">BUNS</div>
          <img src="./pictures/Buns.jpeg" alt="buns" />
          <section className="description">
            <p>
              McDonald’s buns are baked locally and delivered fresh regularly to
              guarantee maximum taste and freshness.
            </p>
          </section>
        </div>

        <div className="article">
          <div class="centered">BEEF</div>
          <img src="./pictures/Beef.jpeg" alt="beef" />
          <section className="description">
            <p>
              McDonald’s only uses 100% pure beef for its Hamburger,
              Cheeseburger, Big Mac, Quarter Pounder with cheese and Big N'
              Tasty with no additives, preservatives or flavor enhancers.
              Everyday, burger patties are prepared and packaged at McDonald’s
              approved meat plant. Even before the beef blocks arrive at the
              plant, McDonald’s supplier conducts several quality checks on
              every batch. These beef patties are grilled without using fats and
              oils, seasoned only with salt and pepper for flavoring.
            </p>
          </section>
        </div> */}
      </div>
    </div>
  );
}

export default Menu;
