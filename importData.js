<<<<<<< HEAD
import { createClient } from '@sanity/client';
require('dotenv').config();


const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);

    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${imageUrl}`);
    }

    const buffer = await response.arrayBuffer();
    const bufferImage = Buffer.from(buffer);

    const asset = await client.assets.upload('image', bufferImage, {
      filename: imageUrl.split('/').pop(),
    });

    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error('Failed to upload image:', imageUrl, error);
    return null;
  }
}

async function uploadProduct(product) {
  try {
    const imageId = await uploadImageToSanity(product.imageUrl);

    if (imageId) {
      const document = {
        _type: 'products',
        name: product.name,
        description: product.description,
        price: product.price,
        image: {
          _type: 'image',
          asset: {
            _ref: imageId,
          },
        },
        category: product.category,
        discountPercent: product.discountPercent,
        isNew: product.isNew,
        colors: product.colors,
        sizes: product.sizes
      };

      const createdProduct = await client.create(document);
      console.log(`Product ${product.name} uploaded successfully:`, createdProduct);
    } else {
      console.log(`Product ${product.name} skipped due to image upload failure.`);
    }
  } catch (error) {
    console.error('Error uploading product:', error);
  }
}

async function importProducts() {
  try {
    const response = await fetch('https://template1-neon-nu.vercel.app/api/products');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const products = await response.json();

    for (const product of products) {
      await uploadProduct(product);
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

importProducts();
=======
import { createClient } from "@sanity/client";
import fetch from "node-fetch";

// Sanity Client
const client = createClient({
 projectId: "nufncm7t", // Replace with your actual project ID
 dataset: "production", // Default dataset
 useCdn: false,
 apiVersion: "2025-01-10", //replace with your
 token: "skVrMOAlQkhOCMKWEYcSCC0cG9b58fNVjzVFEzuLaKj1MLIaXxFOzRYKDCXiv9PYrzvS9U055q911jAZIjxLs64Hp50MRHRNjQBzIRWlvifNRnprpVGiDdsuJQZFXWX11EezZw69qJ3yBZgeFGQG69fHjECWcpeBpbBAFOLcQLYI4sUjhb3P", //replace with your
});

// Function to upload image to Sanity
async function uploadImageToSanity(imageUrl) {
 try {
 // Fetch image from the URL
 const imageResponse = await fetch(imageUrl);
 if (!imageResponse.ok) {
 throw new Error(`Failed to fetch image: ${imageUrl}`);
 }
 const imageBuffer = await imageResponse.buffer();

 // Upload image to Sanity
 const imageAsset = await client.assets.upload("image", imageBuffer, {
 filename: `product-image-${Date.now()}.jpg`, // Fixed template string syntax
 });

 return imageAsset._id; // Return image asset reference
 } catch (error) {
 console.error("Error uploading image:", error);
 return null; // Return null if image upload fails
 }
}

// Function to import data
const importData = async () => {
 try {
 const apiFetch = await fetch("https://fakestoreapi.com/products");
 if (!apiFetch.ok) {
 throw new Error("Failed to fetch products from API.");
 }
 const products = await apiFetch.json();

 for (const product of products) {
 // Upload the image and get the asset reference
 const imageRef = await uploadImageToSanity(product.image);

 if (imageRef) {
 const document = {
 _id: `product-${product.id}`, // Unique _id generated from product id
 _type: "product",
 title: product.title, // Title field mapped
 price: product.price,
 description: product.description,
 category: product.category,
 image: {
 _type: "image",
 asset: {
 _ref: imageRef, // Image asset reference from Sanity
 _type: "reference",
 },
 },
 rating: {
 rate: product.rating.rate,
 count: product.rating.count,
 },
 };

 // Log each product being processed
 console.log(`Processing product: ${product.title}`);

 // Create or replace document in Sanity
 await client.createOrReplace(document);
 console.log(`Product "${product.title}" successfully imported.`);
 } else {
 console.error(`Failed to upload image for product: ${product.title}`);
 }
 }

 console.log("All products successfully imported!");
 } catch (error) {
 console.error("Error importing data:", error);
 }
};

// Call the data import function
importData();
>>>>>>> 80db49b (done)
