import { Routes, Route } from "react-router";
import HomePage from "./Components/HomePage";

import DetailsPage from "./Components/DetailsPage";
import NavBar from "./NavBar";

function App() {


  return (
    <>

      <NavBar></NavBar>
      <Routes>
      <Route index element={<HomePage />}></Route>
      <Route path="details/:id" element={<DetailsPage/>}></Route>
    </Routes>
    
    </>

    
  );
}

export default App
