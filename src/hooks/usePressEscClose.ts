import { useEffect } from "react";
import { UsePressEscCloseData } from "types/UsePressEscCloseData";

const usePressEscClose = ({ isOpen, toggle }: UsePressEscCloseData) => {
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        toggle();
      }
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [isOpen, toggle]);
};

export default usePressEscClose;
