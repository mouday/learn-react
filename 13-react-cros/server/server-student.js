const express = require("express");

const app = express();

// 中间件
app.use((request, response, next) => {
  console.log(request.get("Host"));
  console.log(request.url);
  next();
});

app.get("/students", (request, response) => {
  const data = [
    { id: "001", name: "Tom", age: 18 },
    { id: "002", name: "Jerry", age: 20 },
    { id: "003", name: "Jack", age: 22 },
  ];
  response.json(data);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server runing on http://127.0.0.1:${port}`);
});
