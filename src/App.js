// dependencies
import { BrowserRouter, Route, Routes } from "react-router-dom";

// components
import Home from './Components/Home.js';
import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";
import Forms from "./Components/Forms.js";

function App() {
  return (
    <BrowserRouter>
      <main className='App'>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/login' element={<Forms />} />
          <Route path='/cadastro' element={<Forms />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
