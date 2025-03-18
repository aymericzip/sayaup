"use client";

import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  container?: Element;
  disableScroll?: boolean;
}

export const Modal = ({
  children,
  isOpen,
  container,
  disableScroll = false,
  onClose,
}: ModalProps) => {
  const [isDisplayed, setIsDisplayed] = useState(isOpen);

  const [modalcontainer, setModaContainer] = useState<Element | undefined>(
    container
  );

  useEffect(() => {
    setTimeout(() => {
      setIsDisplayed(isOpen);
    }, 300);
  }, [isOpen]);

  useEffect(() => {
    setModaContainer(container ?? window.document.body);
  }, [container]);

  useEffect(() => {
    if (disableScroll)
      if (isOpen) {
        window.document.body.classList.add("disable-scroll");
      } else {
        window.document.body.classList.remove("disable-scroll");
      }
  }, [isOpen, disableScroll]);

  return modalcontainer ? (
    ReactDOM.createPortal(
      isDisplayed ? (
        <motion.div
          className={`fixed z-40 left-0 top-0 w-full h-full flex justify-center items-center overflow-auto backdrop-blur bg-white bg-opacity-60 playing cursor-pointer`}
          initial={{ opacity: isOpen ? 0 : 1 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.1 }}
          onClick={onClose}
        >
          <motion.div
            className="cursor-default"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: isOpen ? 0.5 : 1 }}
            animate={{ scale: isOpen ? 1 : 0.5 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </motion.div>
      ) : (
        <></>
      ),
      modalcontainer
    )
  ) : (
    <></>
  );
};
