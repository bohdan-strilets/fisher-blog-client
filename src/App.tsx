import { Route, Routes } from "react-router-dom";
import HomePage from "pagees/HomePage";
import RegistrationPage from "pagees/RegistrationPage";

const App: React.FC<{}> = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth/registration" element={<RegistrationPage />} />
    </Routes>
  );
};

export default App;
