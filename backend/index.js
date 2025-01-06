import express from "express";

const app = express();

// Hardcoded data for 20 "block data" objects
const allData = [
  { id: 1, title: "Block 1", description: "Description of Block 1" },
  { id: 2, title: "Block 2", description: "Description of Block 2" },
  { id: 3, title: "Block 3", description: "Description of Block 3" },
  { id: 4, title: "Block 4", description: "Description of Block 4" },
  { id: 5, title: "Block 5", description: "Description of Block 5" },
  { id: 6, title: "Block 6", description: "Description of Block 6" },
  { id: 7, title: "Block 7", description: "Description of Block 7" },
  { id: 8, title: "Block 8", description: "Description of Block 8" },
  { id: 9, title: "Block 9", description: "Description of Block 9" },
  { id: 10, title: "Block 10", description: "Description of Block 10" },
  { id: 11, title: "Block 11", description: "Description of Block 11" },
  { id: 12, title: "Block 12", description: "Description of Block 12" },
  { id: 13, title: "Block 13", description: "Description of Block 13" },
  { id: 14, title: "Block 14", description: "Description of Block 14" },
  { id: 15, title: "Block 15", description: "Description of Block 15" },
  { id: 16, title: "Block 16", description: "Description of Block 16" },
  { id: 17, title: "Block 17", description: "Description of Block 17" },
  { id: 18, title: "Block 18", description: "Description of Block 18" },
  { id: 19, title: "Block 19", description: "Description of Block 19" },
  { id: 20, title: "Block 20", description: "Description of Block 20" }
];

// Server listening on port 3000
app.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});

// Default route
app.get("/", (req, res) => {
  res.send("backend running");
});

// New route to serve all the block data
app.get("/all-data", (req, res) => {
  res.json(allData);
});
