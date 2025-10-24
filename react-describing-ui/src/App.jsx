
import './App.css'

let counter = 0;

function Counter() {
  counter += 1; // ❌ impure! don’t mutate global data
  return <h1>Counter: {counter}</h1>;
}

export default function App() {
  return (
    <>
      <Counter />
      <Counter />
      <Counter />
    </>
  );
}
