import debug from "debug";

const log = debug("holidays:client:App");
const SERVER = import.meta.env.VITE_SERVER;

localStorage.debug = "holidays:*";

fetch(SERVER)
  .then((response) => response.json())
  .then((data) => log(data));

function App() {
  return (
    <div>
      <h1>Holidays</h1>
    </div>
  );
}

export default App;
