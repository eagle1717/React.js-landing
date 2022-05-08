import { Route, Routes } from "react-router";
import Home from "./pages/Home";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}