import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css";
import HomePage from "./pages/HomePage";
import CustomerRegistration from "./pages/CustomerRegistration";
import AdminRegistration from "./pages/AdminRegistration";
import EmailVerification from "./pages/EmailVerification";
import AdminLogin from "./pages/AdminLogin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/customer-registration"
          element={<CustomerRegistration />}
        />
         <Route path="/admin-registration" element={<AdminRegistration />} />
      <Route path="/login" element={<AdminLogin />} />
        <Route path="/auth/verify/:token" element={<EmailVerification />} /> 
      </Routes>
    </Router>
  );
}

export default App;
