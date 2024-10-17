import Form from "./components/Form";
import TextInputTracker from "./components/TextInputTracker";
import TodoApp from "./components/TodoApp";

function App() {
  return (
    <>
      <h2>Use State</h2>
      <Form />

      <h2>Use State + Use Effect + UseRef</h2>
      <TextInputTracker />

      <h3>Use Reducer</h3>
      <TodoApp />

      <h4>Use Reducer + Custom Hooks</h4>
    </>
  );
}

export default App;
