import { useEffect, useCallback } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const useModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const modalsName = {
    CREATE_POST: "create-post",
    TERMS_USE_SITE: "terms-use-site",
    PRIVACY_POLICY: "privacy-policy",
    GREETINGS: "greetings",
    REPEAT_CONFIRM_EMAIL: "repeat-confirm-email",
    RESTORE_PASSWORD: "restore-password",
    CHANGE_PROFILE: "change-profile",
    CHANGE_EMAIL: "change-email",
    CHANGE_PASSWORD: "change-password",
    DELETE_PROFILE: "delete-profile",
    UPLOAD_USER_POSTER: "upload-user-poster",
    UPLOAD_USER_AVATAR: "upload-user-avatar",
    ADD_TITLE: "add-title",
    ADD_PARAGRAPH: "add-paragraph",
    ADD_IMAGE: "add-image",
    ADD_VIDEO: "add-video",
    ADD_LINE: "add-line",
    ADD_INDENT: "add-indent",
    ADD_LIST: "add-list",
    ADD_LINK: "add-link",
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
    const onPressEscape = (e: KeyboardEvent) => {
      if (e.code === "Escape") navigate("/");
    };

    document.addEventListener("keydown", onPressEscape);
    return () => document.removeEventListener("keydown", onPressEscape);
  }, [navigate]);

  return {
    modalsName,
    openModal,
    closeModal,
    checkQueryParam,
    backdropClick,
  };
};

export default useModal;
