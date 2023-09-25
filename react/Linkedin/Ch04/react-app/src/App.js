import './App.css';
import { useState, useEffect, useReducer } from 'react';
// useState is a hook that lets you add React state to function components
// useEffect is a hook that lets you use side effects in function components like console messages, animations, loading data

// props methods

/*
-- pass whole object
function App(props) {
      <h1>Using the {props.library}</h1>
}

-- destructure the object
-- specify just the props you need
-- destructuring the object and pulling out the library property
 
function App({ library }) {
      <h1>Using the {library}</h1>
}
*/

// array destructuring example
const [firstCity, secondCity] = [
  "New York", "London", "Paris"
];
console.log(firstCity); // New York
console.log(secondCity); // London

// use state
function App() {
  const [emotion, setEmotion] = useState("happy"); 
  // set initial value, update function
  // e.g. 1, 'happy', true, {name: 'John'}
  const [secondary, setSecondary] = useState("tired");
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useReducer(checked2 => !checked2, false); 
  // useReducer is an alternative to useState
  // 2 arguments: reducer function, initial state

  // run side effect
  useEffect(() => {
    console.log(`Emotion is: ${emotion}`); 
  }, [emotion]); // only run when emotion changes, listens for changes
  // called the dependancy array
  // empty array means run once on render
  // can pass multiple values in the array, triggers if any of them change

  useEffect(() => {
    console.log(`Secondary emotion is: ${secondary}`);
  }, [secondary]); // only run when secondary changes, listens for changes

  useEffect(() => {
    console.log(`Checked state is: ${checked}`);
  }, [checked]); // only run when tertiary changes, listens for changes

  useEffect(() => {
    console.log(`Checked2 state is: ${checked2}`);
  }, [checked2]); // only run when tertiary changes, listens for changes

  return (
    <div className="App">
      // change state on button click
      <h1>Current emotion: {emotion}</h1>
      <button onClick={() => setEmotion("sad")}>Sad</button>
      // change state on button click
      <h1>Secondary emotion: {secondary}</h1>
      <button onClick={() => setSecondary("excited")}>Excited</button>
      // change state on checkbox toggle
      <h1> {checked ? "checked" : "not checked"}</h1>
      <input type="checkbox" value={checked}  onChange={() => setChecked((checked) => !checked)} />
      // userReducer example
      // same result as above but moves the logic to the reducer function, generally better
      <h1> {checked2 ? "checked" : "not checked"}</h1>
      <input type="checkbox" value={checked2}  onChange={setChecked2} />
    </div>
  );
}

export default App;
