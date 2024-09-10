import PinataSDK from '@pinata/sdk';
require("dotenv").config();

// Initialize Pinata with your API credentials
const pinata = new PinataSDK(process.env.PINATA_API_KEY, process.env.PINATA_API_SECRET);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const metadata = req.body;

    if (!metadata.name || !metadata.description || !metadata.image) {
      return res.status(400).json({ error: 'Missing metadata fields' });
    }

    try {
      // Upload metadata to Pinata
      const result = await pinata.pinJSONToIPFS(metadata, {
        pinataMetadata: {
          name: metadata.name, // Name for the metadata file
        },
        pinataOptions: {
          cidVersion: 0,
        },
      });

      const metadataUrl = `https://gateway.pinata.cloud/ipfs/${result.IpfsHash}`;

      console.log("Metadata URL: ", metadataUrl);

      // Return the metadata IPFS URL
      return res.status(200).json({ url: metadataUrl });
    } catch (error) {
      console.error('Error uploading metadata to Pinata:', error);
      return res.status(500).json({ error: 'Failed to upload metadata to Pinata' });
    }
  } else {
    res.status(405).json({ message: 'Only POST requests are allowed' });
  }
}
