import "./App.css";
import Loading from "./components/Loading";
import Tour from "./components/Tour";
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
        <h1 className="text-5xl py-4">React Tours</h1>
      <div className="tour-container flex ">
        {tours.map((tour) => {
          const { id, image, info, name, price } = tour;
          return (
            <Tour
              key={id}
              image={image}
              info={info}
              name={name}
              price={price}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
