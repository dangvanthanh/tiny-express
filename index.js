const express = require("./src/Express");
const app = express();

app.get("/", (req, res) => {
  res.writeHead(200);
  res.write("Hello World!");
  res.end();
});

app.listen(3000, () => {
  console.log(`Example app listen on port 3000`);
});
