import { ThemeProvider } from "./context/ThemeContext";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Companies from "./sections/Companies";
import Discover from "./sections/Discover";
import Powerful from "./sections/Powerful";
import Customers from "./sections/Customers";
import Speed from "./sections/Speed";
import Testimonials from "./sections/Testimonials";
import Events from "./sections/Events";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      <ThemeProvider>
        <Header />
        <main>
          <Hero />
          <Companies />
          <Discover />
          <Powerful />
          <Customers />
          <Speed />
          <Testimonials />
          <Events />
        </main>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
