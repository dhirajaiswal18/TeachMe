const mongoose = require("mongoose");
const Category = require("./models/Category.js"); // Update the path accordingly

const createCategoryDocument = async () => {
  try {
    // Connect to the MongoDB database
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to the database.");

    // Create a new category document
    const newCategory = await Category.create({
      name: "Python",
      description: "This category includes courses related to Python programming.",
      courses: [], // Add course IDs if available
    });

    console.log("New category created:", newCategory);
  } catch (error) {
    console.error("Error creating the category document:", error);
  } finally {
    // Close the database connection
    mongoose.connection.close();
  }
};

createCategoryDocument();
