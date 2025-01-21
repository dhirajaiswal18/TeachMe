const cloudinary = require("cloudinary").v2; //! Cloudinary is being required
const { CloudinaryStorage } = require("multer-storage-cloudinary");

// Cloudinary Configuration
cloudinary.config({
   cloud_name: process.env.FOLDER_NAME,
   api_key: process.env.API_KEY,
   api_secret: process.env.API_SECRET,
});

// Cloudinary Storage Configuration
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "TeachMe_DEV",
        allowedFormats: ["png", "jpg", "jpeg"],
    },
});

// Cloudinary Connection Function
const cloudinaryConnect = () => {
    try {
        cloudinary.config({
            cloud_name: process.env.CLOUD_NAME,
            api_key: process.env.CLOUD_API_KEY,
            api_secret: process.env.CLOUD_API_SECRET,
        });
        console.log("Cloudinary connected!");
    } catch (error) {
        console.error("Error connecting to Cloudinary:", error);
    }
};

// Export cloudinary, storage, and cloudinaryConnect
module.exports = {
    cloudinary,
    storage,
    cloudinaryConnect,
};


// const cloudinary = require("cloudinary").v2; //! Cloudinary is being required

// exports.cloudinaryConnect = () => {
// 	try {
// 		cloudinary.config({
// 			//!    ########   Configuring the Cloudinary to Upload MEDIA ########
// 			cloud_name: process.env.CLOUD_NAME,
// 			api_key: process.env.API_KEY,
// 			api_secret: process.env.API_SECRET,
// 		});
// 	} catch (error) {
// 		console.log(error);
// 	}
// };