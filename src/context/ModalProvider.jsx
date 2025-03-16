import React, { useContext, useEffect, useState } from "react";

const ModalContext = React.createContext();

export const useModalContext = () => {
  return useContext(ModalContext);
};

const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const openPopup = (content) => {
    setIsOpen(true);
    setContent(content);
  };

  return (
    <ModalContext.Provider value={{ openPopup }}>
      {children}{" "}
      {isOpen && (
        <div className="fixed inset-0">
          <div
            onClick={() => {
              setIsOpen(false);
            }}
            className="absolute inset-0 z-50 flex items-center justify-center bg-black/50"
          >
            {content}
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
