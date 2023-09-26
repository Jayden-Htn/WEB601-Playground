import './App.css';

const mountain_peaks = [
  {name: "Kilimanjaro", height: 5895},
  {name: "Everest", height: 8848},
  {name: "Mount Fuji", height: 3776}
];

// create a component to render a list of items
// renderItem is a function that takes an item and returns a React element
// renderEmpty is what will be rendered if the data prop is null
function List({data, renderItem, renderEmpty}) {
  // if data is null, render renderEmpty
  return !data.length ? renderEmpty : (<ul>{data.map((item) => (<li key={item.name}>{renderItem(item)}</li>))}</ul>);
};

function App() {
  return (
    <List 
      data={mountain_peaks} 
      renderEmpty={<p>This list is empty</p>}
      renderItem={(item) => (<><b>{item.name}</b> - {item.height}m</>)}
    />
  );
}

export default App;
