import Header from "./header/Header";
import AppRoute from "./routes/AppRoute";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter as Router } from "react-router-dom";
import InfoBag from "./infoBag/InfoBag";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <AppRoute />
        <InfoBag />
      </Router>
    </>
  );
}

export default App;
