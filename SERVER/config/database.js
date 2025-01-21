const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables

exports.connect = () => {
    // Ensure MONGO_URL is defined
    const mongoUrl = process.env.MONGO_URL;
    if (!mongoUrl) {
        console.error("Error: MONGO_URL is not defined in the environment variables.");
        process.exit(1); // Exit the process if MONGO_URL is missing
    }

    // Connect to the MongoDB database
    mongoose
        .connect(mongoUrl, {
            useNewUrlParser: true, // Fix casing of `useNewUrlParser`
            useUnifiedTopology: true,
        })
        .then(() => console.log("DB Connected Successfully"))
        .catch((error) => {
            console.error("DB connection failed:", error.message); // More specific error message
            process.exit(1); // Exit the process on connection failure
        });
};
