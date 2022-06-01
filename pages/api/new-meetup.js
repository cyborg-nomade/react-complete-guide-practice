import { MongoClient } from "mongodb";

// /api/new-meetup

// POST /api/new-meetup

const handler = async (req, res) => {
  if (req.method === "POST") {
    console.log("hi");
    const data = req.body;
    console.log(data);

    try {
      const client = await MongoClient.connect(
        "mongodb://localhost:27017/meetups"
      );

      const db = client.db();

      const meetupsCollections = db.collection("meetups");

      const result = await meetupsCollections.insertOne({ data });

      console.log(result);

      client.close();

      res.status(201).json({ message: "Meetup inserted!" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "FUUUU!" });
    }
  }
};

export default handler;
