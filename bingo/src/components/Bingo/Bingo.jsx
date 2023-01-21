import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { getCards } from "../../cards";

export default function Bingo() {
  const [selected, setSelected] = useState(null);
  const [cards, setCards] = useState({});
  const [bingo, setBingo] = useState(cards);

  useEffect(() => {
    setCards(
      getCards(Object.keys(cards).length ? cards : {}, parseInt(selected))
    );
    const filtered = Object.keys(cards).filter(
      (item) => getCards(cards)[item] !== true
    );
    setBingo(filtered);
  }, [selected]);

  const handleClick = () => {
    let random =
      bingo[Math.floor(Math.random() * bingo.length)] ||
      Math.floor(Math.random() * 25) + 1;
    setSelected(random);
  };

  const bingoCards = Object.keys(cards);
  bingoCards.splice(12, 1, "Free");

  return (
    <>
      <div>Card {selected}</div>
      <div className={styles.buttonWrapper}>
        <button onClick={handleClick}>Click Me</button>
      </div>
      <div className={styles.container}>
        <div className={styles.grid}>
          {bingoCards.map((item, idx) => (
            <>
              {item !== "null" && (
                <div
                  className={`${styles.card} ${
                    cards[parseInt(item)] || item === "Free"
                      ? styles.active
                      : null
                  }`}
                  key={idx}
                >
                  {item}
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </>
  );
}
