import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

// 🔥 BGG Hot Boardgames Proxy
app.get("/hot", async (req, res) => {
  try {
    const url = "https://boardgamegeek.com/xmlapi2/hot?type=boardgame";

    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0"
      }
    });

    const xml = await response.text();
    res.send(xml);

  } catch (error) {
    console.error(error);
    res.status(500).send("Proxy error");
  }
});

app.listen(PORT, () => console.log(`Proxy server running on port ${PORT}`));
