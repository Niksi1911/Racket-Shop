import { Routes, Route } from "react-router";
import HomePage from "./Components/HomePage";

import DetailsPage from "./Components/DetailsPage";
import NavBar from "./NavBar";
import CartProvider from "./Components/CartProvider";

function App() {


  return (
    <>
      <CartProvider>

        <NavBar></NavBar>
        <Routes>
          <Route index element={<HomePage />}></Route>
          <Route path="details/:id" element={<DetailsPage />}></Route>
        </Routes>

      </CartProvider>


    </>


  );
}

export default App
