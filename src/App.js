import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import MoreAboutSection from "./components/MoreAboutSection/MoreAboutSection";
import ReviewSection from "./components/ReviewSection/ReviewSection";
import ServiceSection from "./components/ServiceSection/ServiceSection";

function App() {
  return (
    <div className="App">
      <Home />
      <ServiceSection />
      <ReviewSection />
      <MoreAboutSection />
      <Footer />
    </div>
  );
}

export default App;
