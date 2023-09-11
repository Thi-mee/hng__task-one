const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api", (req, res) => {
  const { slack_name, track } = req.query;
  

  // Validate slack_name and track if needed
  if (!slack_name || !track) {
    return res.status(400).json({
      error: "slack_name and track are required query parameters",
    });
  }

  // Get the current day of the week
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDay = daysOfWeek[new Date().getUTCDay()];

  // Get the current UTC time
  const now = new Date();
  const currentUTCTime = now.toISOString().replace(/\.\d{3}Z$/, "Z");

  // Construct the JSON response
  const jsonResponse = {
    slack_name,
    current_day: currentDay,
    utc_time: currentUTCTime,
    track: track,
    github_file_url: "https://github.com/thi-mee/hng__task-one/blob/main/index.js",
    github_repo_url: "https://github.com/thi-mee/hng__task-one",
    status_code: 200,
  };

  // Send the JSON response
  res.json(jsonResponse);
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
