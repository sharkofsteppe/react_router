import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { ProductList} from "./components/ProductList";
import { ProductDetail } from "./components/ProductDetail";
import { Contact } from "./components/Contact";
import {} from "./components/Header";
import {} from "./components/Footer";


import './App.css';
import { Header } from "tar";

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="products" element={<ProductList />}></Route>
          <Route path="/products/1001" element={<ProductDetail />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
