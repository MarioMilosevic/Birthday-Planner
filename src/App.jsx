import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
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
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <h1>Loading...</h1>;

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
