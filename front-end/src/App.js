import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TopBar from "./components/topBar";
import Footer from "./components/footer";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
// import PrivateRoute from "./components/privateRoute";
import { AuthProvider } from "./components/AuthContext";
import CardProductsinCart from "./components/cardProductinCart";
import UsersAdmin from "./pages/usersAdmin";
import Cotizaciones from "./pages/Cotizaciones";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />
        <hr className="m-0" />
        <AuthProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
            <Route path="/cart" element={<CardProductsinCart />} />
            <Route path="/users-admin" element={<UsersAdmin />} />
            <Route path="/cotizaciones" element={<Cotizaciones />} />
          </Routes>
        </AuthProvider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
