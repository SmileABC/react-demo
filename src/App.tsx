import Routes from "@routes";
import { BrowserRouter } from "react-router-dom";
import "@style/index.less";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
