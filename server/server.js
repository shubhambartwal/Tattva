const express = require("express");
const cloudinary = require("cloudinary").v2;
const app = express();
const cors = require("cors"); 
const PORT = process.env.PORT || 5004;
app.use(cors());
require('dotenv').config(); // Add this line at the very top

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Endpoint to fetch images from Cloudinary and group them by folder
app.get("/api/get-cloudinary-images", async (req, res) => {
  try {
    let allResources = [];
    let nextCursor = null;

    do {
      const result = await cloudinary.api.resources({
        type: "upload",
        max_results: 100,
        next_cursor: nextCursor,
      });

      allResources = [...allResources, ...result.resources];
      nextCursor = result.next_cursor;
    } while (nextCursor);

    // Group resources by folder
    const folders = {};

    allResources.forEach((resource) => {
      const folderName = resource.public_id.split("/")[0];
      if (!folders[folderName]) {
        folders[folderName] = [];
      }
      folders[folderName].push(resource);
    });

    res.json(folders);  // Send the grouped folders as JSON response
  } catch (error) {
    console.error("Error fetching Cloudinary images:", error);
    res.status(500).json({ error: "Failed to fetch images from Cloudinary" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
