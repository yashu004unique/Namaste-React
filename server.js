const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());

// Hardcoded restaurant data with accordion-style menus
const dataList = [
  {
    card: {
      id: "1006135",
      name: "Millet Express",
      cloudinaryImageId:
        "FOOD_CATALOG/IMAGES/CMS/2024/3/5/b9e3f92d-a22a-4e5d-8c4b-5d7555fb80d8_1e322b26-602c-4a21-aa39-e20980eb6529_compressed",
      locality: "Vuda Layout",
      areaName: "N A D",
      cuisines: ["Healthy Food", "South Indian"],
      avgRating: 4.3,
      promoted: true,
      categories: [
        {
          name: "Recommended",
          items: [
            {
              name: "Veg Millet Biryani",
              price: 180,
              img: "https://via.placeholder.com/100?text=Veg+Millet+Biryani",
              description:
                "A wholesome biryani made with nutrient-rich millets.",
            },
            {
              name: "Ragi Dosa",
              price: 90,
              img: "https://via.placeholder.com/100?text=Ragi+Dosa",
              description:
                "Crispy dosa prepared with ragi flour, healthy and tasty.",
            },
          ],
        },
        {
          name: "Main Course",
          items: [
            {
              name: "Millet Upma",
              price: 120,
              img: "https://via.placeholder.com/100?text=Millet+Upma",
              description: "Light and fluffy upma made with millets.",
            },
            {
              name: "Curd Rice",
              price: 100,
              img: "https://via.placeholder.com/100?text=Curd+Rice",
              description:
                "Refreshing rice dish mixed with curd and tempered spices.",
            },
          ],
        },
        {
          name: "Starters",
          items: [
            {
              name: "Lemon Rice",
              price: 110,
              img: "https://via.placeholder.com/100?text=Lemon+Rice",
              description:
                "Tangy rice flavored with lemon juice and curry leaves.",
            },
            {
              name: "Tomato Soup",
              price: 80,
              img: "https://via.placeholder.com/100?text=Tomato+Soup",
              description: "Warm and comforting soup made from fresh tomatoes.",
            },
          ],
        },
        {
          name: "Beverages",
          items: [
            {
              name: "Masala Chai",
              price: 40,
              img: "https://via.placeholder.com/100?text=Masala+Chai",
              description:
                "Spiced Indian tea brewed with milk and aromatic spices.",
            },
            {
              name: "Buttermilk",
              price: 30,
              img: "https://via.placeholder.com/100?text=Buttermilk",
              description: "Cool and refreshing drink made from churned curd.",
            },
          ],
        },
      ],
    },
  },
  {
    card: {
      id: "66443",
      name: "Eaters Stop",
      cloudinaryImageId:
        "FOOD_CATALOG/IMAGES/CMS/2024/7/10/ea0b91b8-6550-4569-b232-c6a6e9c85236_542a7736-3410-424f-8b0b-58a935629428.png",
      locality: "Nad Road",
      areaName: "Kakani Nagar",
      cuisines: ["Biryani", "Chinese", "South Indian", "Tandoor", "Lebanese"],
      avgRating: 3.5,
      promoted: false,
      categories: [
        {
          name: "Recommended",
          items: [
            {
              name: "Chicken Biryani",
              price: 220,
              img: "https://via.placeholder.com/100?text=Chicken+Biryani",
              description: "Fragrant rice cooked with chicken and spices.",
            },
            {
              name: "Paneer Butter Masala",
              price: 180,
              img: "https://via.placeholder.com/100?text=Paneer+Butter+Masala",
              description: "Rich curry made with paneer and butter.",
            },
          ],
        },
        {
          name: "Main Course",
          items: [
            {
              name: "Veg Fried Rice",
              price: 150,
              img: "https://via.placeholder.com/100?text=Veg+Fried+Rice",
              description: "Stir-fried rice with vegetables.",
            },
            {
              name: "Chicken Manchurian",
              price: 200,
              img: "https://via.placeholder.com/100?text=Chicken+Manchurian",
              description: "Spicy Indo-Chinese chicken dish.",
            },
          ],
        },
        {
          name: "Starters",
          items: [
            {
              name: "Tandoori Roti",
              price: 25,
              img: "https://via.placeholder.com/100?text=Tandoori+Roti",
              description: "Traditional Indian flatbread cooked in tandoor.",
            },
            {
              name: "Shawarma Roll",
              price: 120,
              img: "https://via.placeholder.com/100?text=Shawarma+Roll",
              description: "Lebanese-style chicken wrap.",
            },
          ],
        },
        {
          name: "Specials",
          items: [
            {
              name: "Falafel Plate",
              price: 160,
              img: "https://via.placeholder.com/100?text=Falafel+Plate",
              description: "Middle Eastern chickpea fritters.",
            },
            {
              name: "Cold Coffee",
              price: 90,
              img: "https://via.placeholder.com/100?text=Cold+Coffee",
              description: "Chilled coffee with milk and ice.",
            },
          ],
        },
      ],
    },
  },
  {
    card: {
      id: "1022643",
      name: "Big Bowl",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/8/092a28c4-a492-4699-8442-3da34c8ea8e2_1022643.jpg",
      locality: "Chitralaya Road",
      areaName: "Jagdamba",
      cuisines: ["Chinese", "Tibetan", "Desserts"],
      avgRating: 4.1,
      promoted: false,
      categories: [
        {
          name: "Recommended",
          items: [
            {
              name: "Veg Hakka Noodles",
              price: 140,
              img: "https://via.placeholder.com/100?text=Veg+Hakka+Noodles",
              description: "Stir-fried noodles with vegetables.",
            },
            {
              name: "Chicken Momos",
              price: 120,
              img: "https://via.placeholder.com/100?text=Chicken+Momos",
              description: "Steamed dumplings filled with chicken.",
            },
          ],
        },
        {
          name: "Starters",
          items: [
            {
              name: "Paneer Chilli",
              price: 160,
              img: "https://via.placeholder.com/100?text=Paneer+Chilli",
              description: "Paneer cubes tossed in spicy sauce.",
            },
            {
              name: "Sweet Corn Soup",
              price: 90,
              img: "https://via.placeholder.com/100?text=Sweet+Corn+Soup",
              description: "Warm soup made with sweet corn.",
            },
          ],
        },
        {
          name: "Snacks",
          items: [
            {
              name: "Spring Rolls",
              price: 100,
              img: "https://via.placeholder.com/100?text=Spring+Rolls",
              description: "Crispy rolls stuffed with veggies.",
            },
            {
              name: "Chocolate Brownie",
              price: 80,
              img: "https://via.placeholder.com/100?text=Chocolate+Brownie",
              description: "Rich chocolate dessert.",
            },
          ],
        },
        {
          name: "Desserts",
          items: [
            {
              name: "Ice Cream Sundae",
              price: 120,
              img: "https://via.placeholder.com/100?text=Ice+Cream+Sundae",
              description: "Ice cream topped with syrup and nuts.",
            },
            {
              name: "Veg Fried Rice",
              price: 130,
              img: "https://via.placeholder.com/100?text=Veg+Fried+Rice",
              description: "Classic fried rice with vegetables.",
            },
          ],
        },
      ],
    },
  },
  {
    card: {
      id: "589828",
      name: "Paradise Biryani",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/21/c761073b-02c4-44f8-aae6-c62703ec0607_589828.jpg",
      locality: "Butchirajpalem Village",
      areaName: "Nad Junction",
      cuisines: ["Biryani", "Kebabs", "North Indian", "Hyderabadi"],
      avgRating: 3.8,
      promoted: true,
      categories: [
        {
          name: "Recommended",
          items: [
            {
              name: "Hyderabadi Chicken Biryani",
              price: 250,
              img: "https://via.placeholder.com/100?text=Hyderabadi+Chicken+Biryani",
              description: "Authentic Hyderabadi biryani with aromatic spices.",
            },
            {
              name: "Mutton Biryani",
              price: 320,
              img: "https://via.placeholder.com/100?text=Mutton+Biryani",
              description: "Slow-cooked mutton layered with fragrant rice.",
            },
          ],
        },
        {
          name: "Starters",
          items: [
            {
              name: "Chicken 65",
              price: 200,
              img: "https://via.placeholder.com/100?text=Chicken+65",
              description: "Spicy deep-fried chicken starter.",
            },
            {
              name: "Paneer Tikka",
              price: 220,
              img: "https://via.placeholder.com/100?text=Paneer+Tikka",
              description: "Grilled paneer cubes marinated in spices.",
            },
          ],
        },
        {
          name: "Main Course",
          items: [
            {
              name: "Veg Biryani",
              price: 180,
              img: "https://via.placeholder.com/100?text=Veg+Biryani",
              description: "Fragrant rice cooked with vegetables.",
            },
            {
              name: "Butter Naan",
              price: 40,
              img: "https://via.placeholder.com/100?text=Butter+Naan",
              description: "Soft Indian bread brushed with butter.",
            },
          ],
        },
        {
          name: "Desserts",
          items: [
            {
              name: "Masala Papad",
              price: 60,
              img: "https://via.placeholder.com/100?text=Masala+Papad",
              description: "Crispy papad topped with onions and spices.",
            },
            {
              name: "Gulab Jamun",
              price: 70,
              img: "https://via.placeholder.com/100?text=Gulab+Jamun",
              description: "Sweet dumplings soaked in sugar syrup.",
            },
          ],
        },
      ],
    },
  },
  {
    card: {
      id: "67848",
      name: "Satyam Restaurant",
      cloudinaryImageId: "73e07d77b8d136c2f129988c1058808f",
      locality: "Dwarka Nagar",
      areaName: "Dwaraka Nagar",
      cuisines: ["Biryani", "Chinese", "Tandoor", "Beverages"],
      avgRating: 4.4,
      promoted: true,
      categories: [
        {
          name: "Recommended",
          items: [
            {
              name: "Veg Biryani",
              price: 170,
              img: "https://via.placeholder.com/100?text=Veg+Biryani",
              description: "Delicious biryani cooked with fresh vegetables.",
            },
            {
              name: "Chicken Tikka",
              price: 240,
              img: "https://via.placeholder.com/100?text=Chicken+Tikka",
              description: "Juicy chicken pieces grilled in tandoor.",
            },
          ],
        },
        {
          name: "Main Course",
          items: [
            {
              name: "Paneer Butter Masala",
              price: 190,
              img: "https://via.placeholder.com/100?text=Paneer+Butter+Masala",
              description: "Paneer cubes in creamy tomato gravy.",
            },
            {
              name: "Veg Manchurian",
              price: 160,
              img: "https://via.placeholder.com/100?text=Veg+Manchurian",
              description: "Crispy vegetable balls in spicy sauce.",
            },
          ],
        },
        {
          name: "Breads",
          items: [
            {
              name: "Tandoori Roti",
              price: 30,
              img: "https://via.placeholder.com/100?text=Tandoori+Roti",
              description: "Traditional Indian flatbread.",
            },
            {
              name: "Garlic Naan",
              price: 50,
              img: "https://via.placeholder.com/100?text=Garlic+Naan",
              description: "Soft naan flavored with garlic.",
            },
          ],
        },
        {
          name: "Desserts & Beverages",
          items: [
            {
              name: "Lassi",
              price: 80,
              img: "https://via.placeholder.com/100?text=Lassi",
              description: "Refreshing yogurt-based drink.",
            },
            {
              name: "Fruit Salad",
              price: 100,
              img: "https://via.placeholder.com/100?text=Fruit+Salad",
              description: "Mix of seasonal fruits.",
            },
          ],
        },
      ],
    },
  },
  {
    card: {
      id: "1031195",
      name: "Rowdy Reddy Biryani",
      cloudinaryImageId:
        "FOOD_CATALOG/IMAGES/CMS/2025/5/15/34d295b8-bbdb-45a7-b7ea-dba990814f18_e391c8f9-e7c2-4337-9aa9-d27f3b9bf934.jpeg",
      locality: "Laxmi Nagar",
      areaName: "Simhachalam",
      cuisines: ["Biryani", "Mughlai", "Lucknowi", "Desserts", "Beverages"],
      avgRating: 3.7,
      promoted: false,
      categories: [
        {
          name: "Recommended",
          items: [
            {
              name: "Special Chicken Biryani",
              price: 260,
              img: "https://via.placeholder.com/100?text=Special+Chicken+Biryani",
              description: "Signature chicken biryani with rich flavors.",
            },
            {
              name: "Mutton Korma",
              price: 300,
              img: "https://via.placeholder.com/100?text=Mutton+Korma",
              description: "Slow-cooked mutton curry with spices.",
            },
          ],
        },
        {
          name: "Main Course",
          items: [
            {
              name: "Lucknowi Biryani",
              price: 280,
              img: "https://via.placeholder.com/100?text=Lucknowi+Biryani",
              description: "Fragrant Awadhi-style biryani.",
            },
            {
              name: "Paneer Tikka Masala",
              price: 200,
              img: "https://via.placeholder.com/100?text=Paneer+Tikka+Masala",
              description: "Paneer cooked in spicy tomato gravy.",
            },
          ],
        },
        {
          name: "Starters",
          items: [
            {
              name: "Chicken Seekh Kebab",
              price: 220,
              img: "https://via.placeholder.com/100?text=Chicken+Seekh+Kebab",
              description: "Minced chicken skewers grilled to perfection.",
            },
            {
              name: "Butter Naan",
              price: 40,
              img: "https://via.placeholder.com/100?text=Butter+Naan",
              description: "Soft naan brushed with butter.",
            },
          ],
        },
        {
          name: "Desserts & Beverages",
          items: [
            {
              name: "Rasgulla",
              price: 70,
              img: "https://via.placeholder.com/100?text=Rasgulla",
              description: "Soft spongy balls soaked in syrup.",
            },
            {
              name: "Soft Drinks",
              price: 50,
              img: "https://via.placeholder.com/100?text=Soft+Drinks",
              description: "Refreshing carbonated beverages.",
            },
          ],
        },
      ],
    },
  },
  {
    card: {
      id: "237338",
      name: "Behrouz Biryani",
      cloudinaryImageId: "1a8dfa8b2a73ddf7c6193465ab24c898",
      locality: "Laxmi Nagar",
      areaName: "Simhachalam",
      cuisines: [
        "Biryani",
        "Kebabs",
        "Mughlai",
        "Hyderabadi",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.2,
      promoted: true,
      categories: [
        {
          name: "Recommended",
          items: [
            {
              name: "Royal Chicken Biryani",
              price: 280,
              img: "https://via.placeholder.com/100?text=Royal+Chicken+Biryani",
              description:
                "Signature Behrouz biryani with aromatic spices and tender chicken.",
            },
            {
              name: "Mutton Rogan Josh",
              price: 350,
              img: "https://via.placeholder.com/100?text=Mutton+Rogan+Josh",
              description:
                "Rich Kashmiri-style mutton curry slow cooked with spices.",
            },
          ],
        },
        {
          name: "Main Course",
          items: [
            {
              name: "Paneer Lababdar",
              price: 220,
              img: "https://via.placeholder.com/100?text=Paneer+Lababdar",
              description: "Paneer cubes in a creamy tomato and cashew gravy.",
            },
            {
              name: "Veg Pulao",
              price: 160,
              img: "https://via.placeholder.com/100?text=Veg+Pulao",
              description: "Fragrant rice cooked with mixed vegetables.",
            },
          ],
        },
        {
          name: "Starters",
          items: [
            {
              name: "Chicken Malai Kebab",
              price: 240,
              img: "https://via.placeholder.com/100?text=Chicken+Malai+Kebab",
              description:
                "Juicy chicken skewers marinated in cream and spices.",
            },
            {
              name: "Butter Naan",
              price: 40,
              img: "https://via.placeholder.com/100?text=Butter+Naan",
              description: "Soft naan brushed with butter.",
            },
          ],
        },
        {
          name: "Desserts & Beverages",
          items: [
            {
              name: "Phirni",
              price: 90,
              img: "https://via.placeholder.com/100?text=Phirni",
              description: "Creamy rice pudding flavored with cardamom.",
            },
            {
              name: "Masala Chaas",
              price: 50,
              img: "https://via.placeholder.com/100?text=Masala+Chaas",
              description: "Spiced buttermilk drink, refreshing and light.",
            },
          ],
        },
      ],
    },
  },
];

// Root route
app.get("/", (req, res) => {
  res.send("Restaurant backend is running! Try /restaurants or /menu/:id");
});

// Endpoint for restaurant cards
app.get("/restaurants", (req, res) => {
  res.json(
    dataList.map((r) => ({
      id: r.card.id,
      name: r.card.name,
      cuisines: r.card.cuisines,
      avgRating: r.card.avgRating,
      cloudinaryImageId: r.card.cloudinaryImageId,
      locality: r.card.locality,
      areaName: r.card.areaName,
      promoted: r.card.promoted,
    })),
  );
});

// Endpoint for menu by restaurant ID
app.get("/menu/:id", (req, res) => {
  const { id } = req.params;
  const restaurant = dataList.find((r) => r.card.id === id);

  if (!restaurant) {
    return res.status(404).json({ error: "Restaurant not found" });
  }

  res.json({
    restaurant: restaurant.card.name,
    categories: restaurant.card.categories,
  });
});

// Serve React build
app.use(express.static(path.join(__dirname, "dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

// Dynamic port for Render
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
