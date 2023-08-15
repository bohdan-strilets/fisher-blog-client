import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "pagees/HomePage";
import RegistrationPage from "pagees/RegistrationPage";
import LoginPage from "pagees/LoginPage";
import RestorePasswordPage from "pagees/RestorePasswordPage";
import ProfilePage from "pagees/ProfilePage";
import PartingPage from "pagees/PartingPage";
import { useAppDispatch } from "hooks/useAppDispatch";
import { useAppSelector } from "hooks/useAppSelector";
import operations from "redux/user/userOperations";
import { getIsRefreshing } from "redux/user/userSelectors";

const App: React.FC<{}> = () => {
  const dispatch = useAppDispatch();
  const isRefreshing = useAppSelector(getIsRefreshing);

  useEffect(() => {
    dispatch(operations.refreshUser());
  }, [dispatch]);

  return (
    <>
      {!isRefreshing ? (
        <>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth/registration" element={<RegistrationPage />} />
            <Route path="/auth/login" element={<LoginPage />} />
            <Route
              path="/auth/restore-password"
              element={<RestorePasswordPage />}
            />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/parting" element={<PartingPage />} />
          </Routes>
        </>
      ) : null}
    </>
  );
};

export default App;
