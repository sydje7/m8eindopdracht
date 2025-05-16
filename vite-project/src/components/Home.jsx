import "../index.css";
import { useState, useEffect } from "react";

export default function Home() {
  const [randomImage, setRandomImage] = useState("");

  useEffect(() => {
    const url = `https://picsum.photos/300/200?random=${Math.random()}`;
    setRandomImage(url);
  }, []); // lege dependency array betekent: dit gebeurt 1x bij mount

  const stadions = [
    { name: "Santiago Bernabéu", club: "Real Madrid (Spanje)" },
    { name: "Camp Nou", club: "FC Barcelona (Spanje)" },
    { name: "Wembley Stadium", club: "Engeland" },
    { name: "San Siro", club: "AC Milan & Inter Milan (Italië)" },
    { name: "Allianz Arena", club: "Bayern München (Duitsland)" },
    { name: "Signal Iduna Park", club: "Borussia Dortmund (Duitsland)" },
    { name: "Maracanã", club: "Brazilië" },
    { name: "Old Trafford", club: "Manchester United (Engeland)" },
    { name: "Estadio Azteca", club: "Mexico" },
    { name: "Johan Cruijff ArenA", club: "Ajax (Nederland)" },
  ];

  return (
    <div className="main-wrapper">
      <section className="profile-card">
        <img
          src={randomImage}
          alt="Willekeurige afbeelding"
          className="profile-img"
        />
        <div className="profile-text">
          <h2>My name is John Doe</h2>
          <p>
            I am a web developer. I love to code and learn new things. I am a
            very passionate person and I love to help others. I am a very hard
            working person and I am always looking for new challenges.
          </p>
        </div>
      </section>

      <section className="top10-card">
        <h2>Top 10 Mooiste Voetbalstadions</h2>
        <ol className="book-list">
          {stadions.map((stadion, index) => (
            <li key={index} className="book-item">
              <div className="book-rank">{index + 1}</div>
              <div className="book-details">
                <strong>{stadion.name}</strong>
                <small>{stadion.club}</small>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
