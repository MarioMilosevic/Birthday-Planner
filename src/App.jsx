import "./App.css";
import { useState } from "react";

function App() {
  const [tours, setTours] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://course-api.com/react-tours-project"
      );
      if (!response.ok) {
        throw new Error("Network reponse was not ok");
      }
      const data = await response.json();
      console.log(data);
      setTours(data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  fetchData();

  return (
    <>
      {tours.map((tour) => (
        <div key={tour.id}>
          <img src={tour.image} alt="" />
          <h2>{tour.name}</h2>
          <p>{tour.info}</p>
          <p>{tour.price}</p>
        </div>
      ))}
    </>
  );
}

export default App;
