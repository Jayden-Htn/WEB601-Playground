import './App.css';
import { useRef, useState } from 'react';
// useRef checks the value of an individual element

// custom hook
function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  return [
    // return an array containing the value and the onChange function
    { 
      value, 
      onChange: e => setValue(e.target.value) 
    },
    // return a function to reset the value
    () => setValue(initialValue) // reset function
  ];
};

function App() {
  // useRef example 1
  const txtTitle = useRef();
  // useRef is a hook that lets you access the DOM node of an element
  // based on the ref attribute and name of the element
  // useRef is an uncontrolled component (not controlled by React)
  const hexColor = useRef();
  console.log(txtTitle);

  // useRef example 2 (with useState)
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#000000");
  // useState is used for controlled components (controlled by React)

  // useRef example 3 (with custom hook)
  const [titleProps, resertTitle] = useInput("");
  const [colProps, resetCol] = useInput("#000000");
  
  const submit = e => {
    e.preventDefault();
    const title = txtTitle.current.value;
    const color = hexColor.current.value;
    alert(`${txtTitle}, ${hexColor}`); // alert will open a popup
    txtTitle.current.value = "";
    hexColor.current.value = "#000000";
  };

  const submit2 = (e) => {
    e.preventDefault();
    alert(`${title}, ${color}`); // alert will open a popup
    setTitle("");
    setColor("#000000");    
  };

  const submit3 = (e) => {
    e.preventDefault();
    alert(`${titleProps.value}, ${colProps.value}`); // alert will open a popup
    // can use the reset functions to reset the values
    resertTitle();
    resetCol();
  };

  // build a form
  // use spread operator for props
  return (
    <div>
      <h1>UseRefs Example 1</h1>
      <form onSubmit={submit}>
        <input ref={txtTitle} type="text" placeholder="color title" />
        <input ref={hexColor} type="color" />
        <button>Submit</button>
      </form>
      <h1>UseRefs With UseState</h1>
      <form onSubmit={submit2}>
        <input value={title} type="text" placeholder="color title" onChange={(event) => setTitle(event.target.value)} />
        <input value={color} type="color" onChange={event => setColor(event.target.value)} />
        <button>Submit</button>
      </form>
      <h1>UseRefs With Custom Hook</h1>
      <form onSubmit={submit3}>
        <input {...titleProps} type="text" placeholder="color title" />
        <input {...colProps} type="color" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
