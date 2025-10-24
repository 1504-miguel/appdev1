
import './App.css'

function Header() {
  return <header><h1>Website Header</h1></header>;
}

function Main() {
  return (
    <main>
      <section><h2>About</h2></section>
      <section><h2>Projects</h2></section>
    </main>
  );
}

function Footer() {
  return <footer><p>© 2025 My Website</p></footer>;
}

export default function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}