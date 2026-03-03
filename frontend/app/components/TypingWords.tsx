"use client";

import { useEffect, useState } from "react";

const words = [
  "software engineer",
  "penetration tester",
  "security engineer",
  "father",
  "husband",
  "maker",
  "gamer",
];

const colors = [
  "text-green-300",
  "text-red-300",
  "text-blue-300",
  "text-orange-300",
  "text-pink-300",
];

export default function TypingWords() {
  const [index, setIndex] = useState(0); // which word
  const [subIndex, setSubIndex] = useState(0); // how many chars shown
  const [deleting, setDeleting] = useState(false); // typing or deleting
  const [blink, setBlink] = useState(true); // cursor blink

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const fullWord = words[index];

        if (!deleting) {
          // typing forward
          if (subIndex < fullWord.length) {
            setSubIndex(subIndex + 1);
          } else {
            // pause before deleting
            setTimeout(() => setDeleting(true), 1000);
          }
        } else {
          // deleting backward
          if (subIndex > 0) {
            setSubIndex(subIndex - 1);
          } else {
            // move to next word
            setDeleting(false);
            setIndex((index + 1) % words.length);
          }
        }
      },
      deleting ? 20 : 70,
    ); // speed: faster delete, slower type

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 250);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <span className={colors[index % colors.length]}>
      {words[index].substring(0, subIndex)}
      <span className={blink ? "opacity-100" : "opacity-0"}>|</span>
    </span>
  );
}
