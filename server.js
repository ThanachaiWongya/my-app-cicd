const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Bangkok-centered bounding box for demo point generation
const BOUNDS = { minLat: 13.5, maxLat: 13.95, minLng: 100.3, maxLng: 100.75 };
const POINT_COUNT = 100;

function generatePoints(count) {
  const points = new Array(count);
  for (let i = 0; i < count; i++) {
    points[i] = {
      id: i,
      lat: BOUNDS.minLat + Math.random() * (BOUNDS.maxLat - BOUNDS.minLat),
      lng: BOUNDS.minLng + Math.random() * (BOUNDS.maxLng - BOUNDS.minLng),
    };
  }
  return points;
}

const POINTS = generatePoints(POINT_COUNT);

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/points", (req, res) => {
  res.json(POINTS);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

module.exports = app;
