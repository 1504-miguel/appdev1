import './App.css'

function Profile() {
  return <img src="https://i.imgur.com/MK3eW3Am.jpg" alt="Profile" />;
}

export default function App() {
  return (
    <div>
      <h1>My First Component</h1>
      <Profile />
      <Profile />
      <Profile />
    </div>
  );
}


