import "./App.css";
import Loading from "./components/Loading";
import Tour from "./components/Tour";
import Heading from "./components/Heading";
import ClearButton from "./components/ClearButton";
import { useEffect, useState } from "react";

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(false);

  const clearButtonHandler = () => {
    setTours([]);
  };

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
        setTours(data);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <Loading />;

  return (
    <>
      <Heading />
      <div className="tour-container flex flex-col ">
        {tours.map((tour) => {
          return <Tour {...tour} key={tour.id} />;
        })}
      </div>
      <ClearButton handleClear={clearButtonHandler} />
    </>
  );
}

export default App;
