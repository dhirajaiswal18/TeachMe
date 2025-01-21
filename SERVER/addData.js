const mongoose = require("mongoose");
const Category = require("./models/Category.js"); // Adjust the path to your Category model

// MongoDB connection URL

async function addCategory() {
  try {
    console.log(process.env.MONGO_URL)
    // Connect to the database
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB");

    // Create a new category document
   
  } catch (error) {
    console.error("Error adding category:", error);
  } finally {
    // Close the database connection
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
}

// Call the function to add the category
addCategory();
