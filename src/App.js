import "./App.css";
import Home from "./components/Home/Home";
import ReviewSection from "./components/ReviewSection/ReviewSection";
import ServiceSection from "./components/ServiceSection/ServiceSection";

function App() {
  return (
    <div className="App">
      <Home />
      <ServiceSection />
      <ReviewSection />
    </div>
  );
}

export default App;
