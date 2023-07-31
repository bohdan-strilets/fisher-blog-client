import { useEffect, useCallback } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const useModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const modalsName = {
    CREATE_POST: "create-post",
  };

  const openModal = (modalName: string) => {
    const updatedParams = new URLSearchParams(searchParams);
    updatedParams.set("modal", modalName);
    setSearchParams(updatedParams);
  };

  const closeModal = useCallback(() => navigate(-1), [navigate]);

  const checkQueryParam = (modalName: string) => {
    const modal = searchParams.get("modal");
    return modal === modalName;
  };

  const backdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) closeModal();
  };

  useEffect(() => {
    const onPressEscape = (e: { code: string }) => {
      if (e.code === "Escape") closeModal();
    };

    window.addEventListener("keydown", onPressEscape);
    return () => window.removeEventListener("keydown", onPressEscape);
  }, [closeModal]);

  return {
    modalsName,
    openModal,
    closeModal,
    checkQueryParam,
    backdropClick,
  };
};

export default useModal;
