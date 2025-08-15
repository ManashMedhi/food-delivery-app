const resListMenu = [
  {
    id: "101",
    name: "Spicy Biryani House",
    cuisines: ["Biryani", "North Indian"],
    costForTwoMessage: "₹400 for two",
    avgRatingString: "4.3",
    totalRatingsString: "5K+ ratings",
    menu: ["Chicken Biryani", "Veg Biryani", "Paneer Butter Masala"],
    imageId: "biryani-img-101",
    accordionMenu: [
      {
        category: "Recommended",
        items: [
          { id: "101-R1", name: "Chicken Biryani", price: 250, description: "Aromatic basmati rice with chicken and spices.", image: "https://img-c.udemycdn.com/course/480x270/5150772_c613.jpg" },
          { id: "101-R2", name: "Veg Biryani", price: 200, description: "Biryani with fresh vegetables and mild spices.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfpgiNk3d2hru8vdI9HR0PQ9Ju72CNeA82PA&s" },
          { id: "101-R3", name: "Paneer Butter Masala", price: 180, description: "Paneer in a creamy tomato-based gravy.", image: "https://www.cookwithmanali.com/wp-content/uploads/2019/05/Paneer-Butter-Masala-500x500.jpg" },
          { id: "101-R4", name: "Roti", price: 30, description: "Soft Indian bread, freshly made.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW0CIFOdY0EZpLmfFhkNcJB_kD-_exwNFWKQ&s" }
        ]
      },
      {
        category: "Starters",
        subCategories: [
          {
            name: "Tandoori Starters",
            items: [
              { id: "101-S1", name: "Tandoori Chicken", price: 300, description: "Charcoal-grilled chicken with spices." , image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc8_Asd6kT1tZ7eXJdtbQKMv_-m1UA0PyB-g&s"},
              { id: "101-S2", name: "Paneer Tikka", price: 220, description: "Grilled paneer with tangy marinade." , image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKVKmPoE-9mFFNxeb_Zs6iqTW_yPszhoa9Mw&s" }
            ]
          },
          {
            name: "Chinese Starters",
            items: [
              { id: "101-S3", name: "Spring Rolls", price: 150, description: "Crispy rolls with vegetable filling.", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw3MiaXg5b8AYnVRLqypTHiTVpUwEYCNmZfQ&s" },
              { id: "101-S4", name: "Chilli Chicken", price: 200, description: "Spicy and tangy chicken starter." , image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRHRstoCJ-ds0xUOtJs7dUFwvKWFII2-HlaQ&s"}
            ]
          }
        ]
      }
    ]
  },
  {
    id: "102",
    name: "Burger Queen",
    cuisines: ["Burgers", "Fast Food"],
    costForTwoMessage: "₹250 for two",
    avgRatingString: "4.1",
    totalRatingsString: "2K+ ratings",
    menu: ["Cheese Burger", "Double Patty Burger", "Fries"],
    imageId: "burger-img-102",
    accordionMenu: [
      {
        category: "Recommended",
        items: [
          { id: "102-R1", name: "Cheese Burger", price: 120, description: "Soft bun with cheese and juicy patty." },
          { id: "102-R2", name: "Fries", price: 80, description: "Golden crispy potato fries." },
          { id: "102-R3", name: "Double Patty Burger", price: 150, description: "Two patties for extra flavor." }
        ]
      },
      {
        category: "Combos",
        subCategories: [
          {
            name: "Burger Combos",
            items: [
              { id: "102-S1", name: "Cheese Burger + Fries", price: 180, description: "Burger with crispy fries." },
              { id: "102-S2", name: "Double Patty + Coke", price: 200, description: "Double burger with chilled Coke." }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "103",
    name: "Pizza King",
    cuisines: ["Pizza", "Italian"],
    costForTwoMessage: "₹500 for two",
    avgRatingString: "4.5",
    totalRatingsString: "8K+ ratings",
    menu: ["Margherita", "Farmhouse", "Peppy Paneer"],
    imageId: "pizza-img-103",
    accordionMenu: [
      {
        category: "Recommended",
        items: [
          { id: "103-R1", name: "Margherita", price: 300, description: "Classic cheese and tomato pizza." },
          { id: "103-R2", name: "Farmhouse", price: 350, description: "Loaded with veggies and mozzarella." },
          { id: "103-R3", name: "Peppy Paneer", price: 320, description: "Paneer with spicy seasoning." }
        ]
      },
      {
        category: "Starters",
        subCategories: [
          {
            name: "Garlic Bread",
            items: [
              { id: "103-S1", name: "Garlic Breadsticks", price: 120, description: "Freshly baked with garlic butter." },
              { id: "103-S2", name: "Cheesy Garlic Bread", price: 150, description: "Garlic bread topped with mozzarella." }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "104",
    name: "Chinese Wok",
    cuisines: ["Chinese", "Asian"],
    costForTwoMessage: "₹300 for two",
    avgRatingString: "4.0",
    totalRatingsString: "3K+ ratings",
    menu: ["Hakka Noodles", "Spring Rolls", "Manchurian"],
    imageId: "chinese-img-104",
    accordionMenu: [
      {
        category: "Recommended",
        items: [
          { id: "104-R1", name: "Hakka Noodles", price: 180, description: "Stir-fried noodles with vegetables." },
          { id: "104-R2", name: "Spring Rolls", price: 150, description: "Crispy rolls with vegetable filling." },
          { id: "104-R3", name: "Veg Manchurian", price: 200, description: "Spicy and tangy Manchurian balls." }
        ]
      },
      {
        category: "Starters",
        subCategories: [
          {
            name: "Soups",
            items: [
              { id: "104-S1", name: "Sweet Corn Soup", price: 120, description: "Mild sweet corn soup." },
              { id: "104-S2", name: "Hot and Sour Soup", price: 130, description: "Spicy and tangy soup." }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "105",
    name: "Tandoori Flames",
    cuisines: ["Tandoori", "Mughlai"],
    costForTwoMessage: "₹450 for two",
    avgRatingString: "4.2",
    totalRatingsString: "6K+ ratings",
    menu: ["Tandoori Chicken", "Kebab Platter", "Butter Chicken"],
    imageId: "tandoori-img-105",
    accordionMenu: [
      {
        category: "Recommended",
        items: [
          { id: "105-R1", name: "Tandoori Chicken", price: 300, description: "Charcoal-grilled chicken with spices." },
          { id: "105-R2", name: "Butter Chicken", price: 280, description: "Creamy tomato-based chicken curry." },
          { id: "105-R3", name: "Kebab Platter", price: 350, description: "Assorted kebabs with chutney." }
        ]
      },
      {
        category: "Starters",
        subCategories: [
          {
            name: "Grilled Starters",
            items: [
              { id: "105-S1", name: "Seekh Kebab", price: 250, description: "Minced meat skewers grilled to perfection." },
              { id: "105-S2", name: "Paneer Tikka", price: 220, description: "Cottage cheese cubes grilled with spices." }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "106",
    name: "South Spice",
    cuisines: ["South Indian"],
    costForTwoMessage: "₹200 for two",
    avgRatingString: "4.4",
    totalRatingsString: "7K+ ratings",
    menu: ["Dosa", "Idli", "Vada", "Upma"],
    imageId: "south-img-106",
    accordionMenu: [
      {
        category: "Recommended",
        items: [
          { id: "106-R1", name: "Masala Dosa", price: 80, description: "Crispy dosa with spicy potato filling." },
          { id: "106-R2", name: "Idli", price: 50, description: "Soft steamed rice cakes." },
          { id: "106-R3", name: "Vada", price: 60, description: "Crispy lentil fritters." }
        ]
      },
      {
        category: "Breakfast Combos",
        subCategories: [
          {
            name: "South Indian Combo",
            items: [
              { id: "106-S1", name: "Dosa + Vada + Coffee", price: 120, description: "Perfect breakfast combo." },
              { id: "106-S2", name: "Idli + Vada + Sambar", price: 110, description: "Classic breakfast platter." }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "107",
    name: "Sweet Corner",
    cuisines: ["Desserts", "Bakery"],
    costForTwoMessage: "₹300 for two",
    avgRatingString: "4.6",
    totalRatingsString: "9K+ ratings",
    menu: ["Gulab Jamun", "Cake", "Brownies"],
    imageId: "sweet-img-107",
    accordionMenu: [
      {
        category: "Recommended",
        items: [
          { id: "107-R1", name: "Gulab Jamun", price: 50, description: "Soft milk-based sweet balls in syrup." },
          { id: "107-R2", name: "Chocolate Cake", price: 120, description: "Rich and moist chocolate cake." },
          { id: "107-R3", name: "Brownies", price: 100, description: "Fudgy chocolate brownies." }
        ]
      },
      {
        category: "Bakery Items",
        subCategories: [
          {
            name: "Pastries",
            items: [
              { id: "107-S1", name: "Black Forest Pastry", price: 80, description: "Chocolate and cherry pastry." },
              { id: "107-S2", name: "Vanilla Pastry", price: 70, description: "Light vanilla sponge with cream." }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "108",
    name: "Green Bowl",
    cuisines: ["Healthy", "Salads"],
    costForTwoMessage: "₹350 for two",
    avgRatingString: "4.3",
    totalRatingsString: "1K+ ratings",
    menu: ["Quinoa Bowl", "Greek Salad", "Fruit Mix"],
    imageId: "healthy-img-108",
    accordionMenu: [
      {
        category: "Recommended",
        items: [
          { id: "108-R1", name: "Quinoa Bowl", price: 200, description: "Healthy quinoa with veggies." },
          { id: "108-R2", name: "Greek Salad", price: 180, description: "Fresh veggies, feta, and olives." },
          { id: "108-R3", name: "Fruit Mix", price: 150, description: "Assorted seasonal fruits." }
        ]
      },
      {
        category: "Detox Bowls",
        subCategories: [
          {
            name: "Low Calorie Options",
            items: [
              { id: "108-S1", name: "Sprout Salad", price: 140, description: "Protein-rich sprout salad." },
              { id: "108-S2", name: "Kale Smoothie", price: 160, description: "Green smoothie with kale and spinach." }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "109",
    name: "Chai & Co.",
    cuisines: ["Tea", "Snacks"],
    costForTwoMessage: "₹150 for two",
    avgRatingString: "4.0",
    totalRatingsString: "3K+ ratings",
    menu: ["Masala Chai", "Samosa", "Bread Pakora"],
    imageId: "chai-img-109",
    accordionMenu: [
      {
        category: "Recommended",
        items: [
          { id: "109-R1", name: "Masala Chai", price: 30, description: "Spiced Indian tea." },
          { id: "109-R2", name: "Samosa", price: 25, description: "Crispy pastry with potato filling." },
          { id: "109-R3", name: "Bread Pakora", price: 30, description: "Bread fritters with spicy filling." }
        ]
      },
      {
        category: "Snacks",
        subCategories: [
          {
            name: "Fried Snacks",
            items: [
              { id: "109-S1", name: "Pakora", price: 20, description: "Crispy gram flour fritters." },
              { id: "109-S2", name: "Vada Pav", price: 25, description: "Indian burger with potato patty." }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "110",
    name: "Roll It Up",
    cuisines: ["Kathi Rolls", "Street Food"],
    costForTwoMessage: "₹220 for two",
    avgRatingString: "4.1",
    totalRatingsString: "2.5K+ ratings",
    menu: ["Chicken Roll", "Paneer Roll", "Egg Roll"],
    imageId: "roll-img-110",
    accordionMenu: [
      {
        category: "Recommended",
        items: [
          { id: "110-R1", name: "Chicken Roll", price: 120, description: "Paratha roll with spiced chicken filling." },
          { id: "110-R2", name: "Paneer Roll", price: 100, description: "Paratha roll with cottage cheese filling." },
          { id: "110-R3", name: "Egg Roll", price: 90, description: "Paratha roll with egg filling." }
        ]
      },
      {
        category: "Special Rolls",
        subCategories: [
          {
            name: "Fusion Rolls",
            items: [
              { id: "110-S1", name: "Cheese Chicken Roll", price: 140, description: "Chicken roll with melted cheese." },
              { id: "110-S2", name: "Paneer Tikka Roll", price: 130, description: "Paneer tikka wrapped in paratha." }
            ]
          }
        ]
      }
    ]
  }
];
export default resListMenu;
