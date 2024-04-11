const express = require('express');
const app = express();

// Set up your routes, middleware, and other configurations here

const port = process.env.PORT || 3001; // Set the port with environment variable or default to 3001

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
