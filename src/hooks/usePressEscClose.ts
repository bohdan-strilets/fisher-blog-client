import { useEffect } from "react";
import { UsePressEscCloseData } from "types/UsePressEscCloseData";

const usePressEscClose = ({ isOpen, toggle }: UsePressEscCloseData) => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
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
