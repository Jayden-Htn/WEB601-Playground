import "./App.css";
import { Link, Outlet } from "react-router-dom";
// can use link to navigate between pages
// outlet displays the nested routes

// create a component for each page
function Home() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>My Website</h1>
    </div>
  );
}

export function About() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>About Us</h1>
      <Outlet />
    </div>
  );
}

// create component to be used in About with nested routes
export function History() {
  return (
    <div>
      <h2>Our History</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatum, quibusdam, quia, quae voluptate voluptas dolorum
        consequuntur voluptatibus quod quos natus. Quisquam, quibusdam,
        quia, quae voluptate voluptas dolorum consequuntur voluptatibus
        quod quos natus.
      </p>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>Contact Us</h1>
    </div>
  );
}

export function App() {
  return <Home />;
}
