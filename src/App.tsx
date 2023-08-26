import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "pagees/HomePage";
import RegistrationPage from "pagees/RegistrationPage";
import LoginPage from "pagees/LoginPage";
import RestorePasswordPage from "pagees/RestorePasswordPage";
import ProfilePage from "pagees/ProfilePage";
import PartingPage from "pagees/PartingPage";
import PostPage from "pagees/PostPage";
import EditPostPage from "pagees/EditPostPage";
import { useAppDispatch } from "hooks/useAppDispatch";
import { useAppSelector } from "hooks/useAppSelector";
import operations from "redux/user/userOperations";
import { getIsRefreshing } from "redux/user/userSelectors";

const App: React.FC<{}> = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch();
  const isRefreshing = useAppSelector(getIsRefreshing);

  useEffect(() => {
    dispatch(operations.refreshUser());
  }, [dispatch]);

  const preloader = document.getElementById("preloader");

  useEffect(() => {
    if (preloader) {
      setTimeout(() => {
        preloader.style.display = "none";
        setIsLoading(false);
      }, 2000);
    }
  }, [preloader]);

  return (
    <>
      {!isLoading && !isRefreshing ? (
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
            <Route path="/blog/:postId" element={<PostPage />} />
            <Route path="/blog/:postId/edit" element={<EditPostPage />} />
          </Routes>
        </>
      ) : null}
    </>
  );
};

export default App;
