
import './App.css'

let counter = 0;

function Counter({ number }) {
  return <h1>Counter: {number}</h1>;
}

export default function App() {
  return (
    <>
      <Counter number={1} />
      <Counter number={2} />
      <Counter number={3} />
    </>
  );
}

