import { useEffect, useRef } from "react";

interface Props {
  text: string;
}

type FrequentCharInfo = {
  char: string;
  count: number;
};

export default function CharacterCounter({ text }: Props) {
  const mostFrequentCharRef = useRef<FrequentCharInfo>({ char: "", count: 0 });

  useEffect(() => {
    const frequency: Record<string, number> = {};

    for (const char of text) {
      if (char !== " ") {
        frequency[char] = (frequency[char] || 0) + 1;
      }
    }

    let maxCount = 0;
    let charWithMaxCount = "";

    for (const char in frequency) {
      if (frequency[char] > maxCount) {
        maxCount = frequency[char];
        charWithMaxCount = char;
      }
    }

    mostFrequentCharRef.current = { char: charWithMaxCount, count: maxCount };
  }, [text]);

  return (
    <div>
      <h4>
        Caracter más frecuente: {mostFrequentCharRef.current.char} y se repite:
        {mostFrequentCharRef.current.count}
      </h4>
    </div>
  );
}
