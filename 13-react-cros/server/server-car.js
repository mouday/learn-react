const express = require("express");

const app = express();

app.get("/cars", (request, response) => {
  const data = [
    { id: "001", name: "大众", price: 20 },
    { id: "002", name: "奥迪", age: 40 },
    { id: "003", name: "奔驰", age: 80 },
  ];
  response.json(data);
});

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`Server runing on http://127.0.0.1:${port}`);
});
