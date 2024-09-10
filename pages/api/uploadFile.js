import PinataSDK from '@pinata/sdk';
import formidable from 'formidable';
import fs from 'fs';
require("dotenv").config();

// Initialize Pinata with your API credentials
const pinata = new PinataSDK(process.env.PINATA_API_KEY, process.env.PINATA_API_SECRET);

export const config = {
  api: {
    bodyParser: false, // Disable Next.js's body parser to handle file uploads manually
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const form = formidable({ multiples: false });

    // Parse the uploaded file
    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error("Error parsing file upload:", err);
        return res.status(500).json({ error: 'Error parsing file upload' });
      }

      console.log("Files:", files);   // Debugging to check the uploaded files

      const file = files.file && files.file[0]; // Access the first file from the array safely

      if (!file || !file.filepath) {
        console.error("File is missing or filepath is undefined");
        return res.status(400).json({ error: 'File is missing or invalid' });
      }

      const readableStream = fs.createReadStream(file.filepath); // Use the file path to create a readable stream

      try {
        // Upload file to Pinata with metadata
        const result = await pinata.pinFileToIPFS(readableStream, {
          pinataMetadata: {
            name: file.originalFilename, // Set the original filename as the Pinata metadata name
          },
          pinataOptions: {
            cidVersion: 0,
          },
        });
        const pinataUrl = `https://gateway.pinata.cloud/ipfs/${result.IpfsHash}`;

        console.log("url: ", pinataUrl);

        // Return the IPFS URL
        return res.status(200).json({ url: pinataUrl });
      } catch (error) {
        console.error('Error uploading to Pinata:', error);
        return res.status(500).json({ error: 'Failed to upload to Pinata' });
      }
    });
  } else {
    res.status(405).json({ message: 'Only POST requests are allowed' });
  }
}
