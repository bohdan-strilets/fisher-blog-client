import { Route, Routes } from "react-router-dom";
import HomePage from "pagees/HomePage";
import RegistrationPage from "pagees/RegistrationPage";
import LoginPage from "pagees/LoginPage";

const App: React.FC<{}> = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth/registration" element={<RegistrationPage />} />
      <Route path="/auth/login" element={<LoginPage />} />
    </Routes>
  );
};

export default App;
