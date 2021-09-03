import { useState } from "react";
import Routes from "@routes/index";
import { BrowserRouter } from "react-router-dom";

function App(): JSX.Element {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
