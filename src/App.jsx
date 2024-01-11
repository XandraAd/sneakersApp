import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Men from "./pages/Men";
import Women from "./pages/Women";
import ProductPage from "./pages/ProductPage";
import Navigation from "./components/Navigation";
import Footer from "./components/footer/Footer";
import Collections from "./pages/Collections";
import Contact from "./pages/Contact";
import About from "./pages/About"
function App() {
  return (
    <>
      <ChakraProvider>
        <header>
          <Navigation />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/product-page" element={<ProductPage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/men" element={<Men />}/>
            <Route path="/women" element={<Women />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/about" element={<About />}/>
          </Routes>
        </main>
          <footer>
            <Footer/>
          </footer>
        
      </ChakraProvider>
    </>
  );
}

export default App;