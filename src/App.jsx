import { Routes, Route } from "react-router";
import HomePage from "./Components/HomePage";
import Details from "./Components/Details";

function App() {


  return (
    <Routes>
      <Route index element={<HomePage />}></Route>
      <Route path="details/:id" element={<Details/>}></Route>
    </Routes>
  );
}

export default App
