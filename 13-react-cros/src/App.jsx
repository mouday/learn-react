import axios from "axios";

function App() {
  axios.get("/api-student/students").then((res) => {
    console.log(res.data);
  });

  axios.get("/api-car/cars").then((res) => {
    console.log(res.data);
  });

  return <div className="App">app</div>;
}

export default App;
