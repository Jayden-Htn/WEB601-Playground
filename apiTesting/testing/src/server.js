const app = require('./app');

const port = process.env.PORT || 8080; // gets the port from the environment variable, or defaults to 8080

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});