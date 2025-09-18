import './App.css'

function MyButton() {
  function handleClick() {
    alert('Good Day Traveler!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}


export default MyButton
