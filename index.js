const express = require("express");
const app = express();
const port = process.env.PORT || 8080; // Elastic Beanstalk uses 8080 by default

app.get("/", (req, res) => {
  res.send(`
    <html>
      <body style="font-family: Arial; text-align: center; padding-top: 50px;">
        <h1>🚀 Backend API Deployed via CI/CD!</h1>
        <p>This is a static home page served by Express.js on AWS Elastic Beanstalk.</p>
        <a href="/api/status">Check API Status</a>
      </body>
    </html>
  `);
});

app.get("/api/status", (req, res) => {
  res.json({ status: "success", message: "API is running smoothly" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
