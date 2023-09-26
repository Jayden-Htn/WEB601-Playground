import './App.css';
import { useState, useEffect } from 'react';

// get data from an api
function GitHubUser({name, location, avatar}) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{location}</p>
      <img src={avatar} height={150} alt={name} />
    </div>
  );
}

function App() {
  // create a state variable to hold the data
  const [data, setData] = useState(null); // initial value is null since we don't have any data yet
  // use useSate to track the state of the data (loading, error, success)
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // STEP 1: fetch the data
  // STEP 2: pass the data to the component
  useEffect(() => {
    setLoading(true); // set loading to true
    fetch("https://api.github.com/users/Jayden-Htn")
      .then(response => response.json())
      .then(setData) // set the data to the response
      .then(() => setLoading(false)) // set loading to false
      .catch(setError); // set the error to the response
  }, []); // empty array means run once on render
  // STEP 3: get the data points required
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>;
  }
  if (!data) {
    return null;
  }
  return (
    <GitHubUser 
      name={data.name} 
      location={data.location}
      avatar={data.avatar_url}
      /> 
  );
}

export default App;
