import { useState, useEffect } from "react";

import styles from "./styles.module.css";

import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

export default function Carousel() {
  const [count, setCount] = useState(0);
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((response) => {
        const { data } = response;
        setMemes(data.memes);
      });
  }, []);

  return (
    <div className={styles.container}>
      {memes.length ? (
        <div className={styles.carouselWrapper}>
          <img src={memes[count].url} alt="meme" />
        </div>
      ) : null}
      <div className={styles.buttonWrapper}>
        <FiChevronLeft
          onClick={() => (count !== 0 ? setCount(count - 1) : null)}
        />
        <FiChevronRight
          onClick={() =>
            count !== memes.length && memes.length ? setCount(count + 1) : null
          }
        />
      </div>
    </div>
  );
}
