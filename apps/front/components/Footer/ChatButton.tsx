"use client";

import { Chat as ChatIcon } from "@assets/icons/Chat";
import { ChatBot } from "@components/ChatBot";
import { Modal } from "@components/Modal";
import React, { useState } from "react";
import { motion } from "framer-motion";

export const ChatButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        className="rounded-full fixed bottom-8 right-8 aspect-square bg-primary w-12 backdrop-blur shadow-2xl cursor-pointer flex justify-center items-center z-50 opacity-75 text-white"
        onClick={() => setIsModalOpen((isModalOpen) => !isModalOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={isModalOpen ? "open" : "closed"}
        variants={{
          open: {
            opacity: 0,
          },
          cliosed: {
            opacity: 1,
          },
        }}
      >
        <ChatIcon className="w-1/2 h-1/2" />
      </motion.div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        disableScroll
      >
        <ChatBot />
      </Modal>
    </>
  );
};
