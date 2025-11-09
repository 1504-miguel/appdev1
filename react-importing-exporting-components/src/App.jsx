import './App.css'
import Gallery from './Gallery';
import { Profile, Bio, Avatar } from './Profile';

function App() {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <Gallery />
      <Profile />
      <Bio />
      <Avatar />
    </div>
  );
}

export default App
