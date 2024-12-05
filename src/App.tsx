import "./styling/styles.css";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  return (
    <Wrapper>
      <Header />
      <Title />
      <Navbar />
      <Content />
      <ScrollToTopButton />
      <Footer />
    </Wrapper>
  );
}

export default App;
