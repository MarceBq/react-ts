import { useState } from "react";
import CharacterCounter from "./CharacterCounter";

export default function TextInputTracker() {
  const [text, setText] = useState("");

  function onHandleChange(e: React.ChangeEvent<HTMLInputElement>): string {
    return e.target.value;
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Hola me llamo..."
        onChange={(e) => setText(onHandleChange(e))}
      />
      <h1>You are tiping: {text}</h1>

      <CharacterCounter text={text} />
    </div>
  );
}
