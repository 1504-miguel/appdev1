
import './App.css'

import Avatar from "./Avatar";

export default function App() {
  return (
    <div>
      <h1>Props Example</h1>
      <Avatar
        name="Hedy Lamarr"
        imageUrl="https://i.imgur.com/yXOvdOSs.jpg"
      />
    </div>
  );
}
