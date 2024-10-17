import { useState } from "react";

interface userData {
  name: string;
  password: string;
}

export default function Form() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function onHandleValue(e: React.ChangeEvent<HTMLInputElement>): string {
    return e.target.value;
  }

  function onSubmitBtn(): void {
    if (!name || !password) return;

    const user: userData = { name, password };

    localStorage.setItem("user", JSON.stringify(user));
  }

  return (
    <form onSubmit={onSubmitBtn}>
      <label htmlFor="name">Username</label>
      <input
        type="text"
        name="name"
        placeholder="Marcelo Barrientos"
        onChange={(e) => setName(onHandleValue(e))}
        required
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        placeholder="*********"
        onChange={(e) => setPassword(onHandleValue(e))}
        required
      />

      <button type="submit">Register</button>
    </form>
  );
}
