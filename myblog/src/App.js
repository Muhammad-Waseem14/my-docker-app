import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://localhost:9000/");
      const data = await res.json();
      setMessage(data?.message);
      console.log(data);
    };

    getData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>all blogs</h1>
        <p>{`Message from node app: ${message}`}</p>
      </header>
    </div>
  );
}

export default App;
