import "./styling/styles.css";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import NameTag from "./components/NameTag";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Footer from "./components/Footer";

function App() {
  return (
    <Wrapper>
      <Header />
      <Title />
      <Navbar />
      <Content />
      <ScrollToTopButton />
      <Footer />
      <NameTag/>
    </Wrapper>
  );
}

export default App;
