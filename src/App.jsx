import { Routes, Route } from "react-router";
import HomePage from "./Components/HomePage";

import DetailsPage from "./Components/DetailsPage";

function App() {


  return (
    <Routes>
      <Route index element={<HomePage />}></Route>
      <Route path="details/:id" element={<DetailsPage/>}></Route>
    </Routes>
  );
}

export default App
