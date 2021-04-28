var express = require("express");
var app = express();

const TikTokScraper = require('tiktok-scraper');

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

app.get("/", (req, res, next) => {
  res.json("go away");
});

app.get("/tiktok", (req, res, next) => {
  // User feed by username
  (async () => {
    try {
      const user = await TikTokScraper.getUserProfileInfo('steveplusplus');
      console.log(user);
      res.json(user.stats);
    } catch (error) {
      console.log(error);
      res.json({});
    }
  })();
});
