import { Route, Routes } from "react-router-dom";
import HomePage from "pagees/HomePage";
import AuthPage from "pagees/AuthPage";

const App: React.FC<{}> = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  );
};

export default App;
