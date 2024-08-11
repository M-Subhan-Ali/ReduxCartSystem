import { useSelector } from "react-redux";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import Navbar from "./Components/Nav/Navbar";
import Overlay from "./Components/Overlay/Overlay";
function App() {
  const { OpenModal } = useSelector((state) => state.modal);
  return (
    <main className="relative">
      <Navbar />
      <Cart />
      {OpenModal && <Overlay />}
    </main>
  );
}

export default App;
