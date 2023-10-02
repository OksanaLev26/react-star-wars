import { useEffect, useState } from "react";
import { StarshipCard } from "./components/StarshipCard";
import "./app.css";

function App() {
  const [starships, setStarships] = useState(null);

  const buttonClassName = useEffect(() => {
    const getStarships = async () => {
      const res = await fetch("https://swapi.dev/api/starships");
      const data = await res.json();
      setStarships(data);
    };
    getStarships();
  }, []);

  const handleNextClick = () => {
    const getStarships = async () => {
      const res = await fetch(starships.next);
      const data = await res.json();
      setStarships(data);
    };

    getStarships();
  };

  const handlePrevClick = () => {
    const getStarships = async () => {
      const res = await fetch(starships.previous);
      const data = await res.json();
      setStarships(data);
    };

    getStarships();
  };

  return (
    <>
      {starships ? (
        <div className="app">
          <header className="app-header">STAR WARS STARSHIPS</header>
          <div className="starships">
            {starships ? (
              <>
                {starships.results.map((starship) => (
                  <StarshipCard key={starship.name} starship={starship} />
                ))}
              </>
            ) : (
              <div>Loading...</div>
            )}
          </div>
          <div className="footer">
            <button
              disabled={starships.previous === null}
              className={
                starships.previous === null
                  ? "footerButton disabled"
                  : "footerButton"
              }
              onClick={handlePrevClick}
            >
              Previous
            </button>
            <button
              disabled={starships.next === null}
              className={
                starships.next === null
                  ? "footerButton disabled"
                  : "footerButton"
              }
              onClick={handleNextClick}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default App;
