import "./App.css";
import {
  Backers,
  Community,
  Hero,
  NavBar,
  RegisterationBanner,
  Services,
} from "./components";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Backers />
      <Services />
      <Community />
      <RegisterationBanner />
    </>
  );
}

export default App;
