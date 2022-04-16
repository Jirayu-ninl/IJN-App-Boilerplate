import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { css } from "@emotion/css";
import { useGlobalStateContext } from "@contexts/globalContext";

export default function Maintenance({ ModalState, setModalState }: { ModalState: boolean, setModalState: any }) {
  const { userName } = useGlobalStateContext();
  const Container = css`
    position: absolute;
    left: 35%;
    top: 35%;
    /* transform: translate(-50%, -50%); */
    background-color: Black;
    box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.27);
    border-radius: 10px;
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    & h1 {
      color: white;
      padding-bottom: 20px;
    }
    & p {
      color: white;
      opacity: 0.6;
      font-weight: 300;
      line-height: 30px;
    }
    & button {
      margin-top: 10px;
      border-color: white;
      border-width: 1px;
      padding: 7px 15px;
      font-size: 10px;
      font-weight: 300;
      color: white;
      background-color: rgba(0, 0, 0, 0);
      opacity: 0.6;
      transition-duration: 100ms;
      &:hover {
        opacity: 1;
        transition-duration: 750ms;
      }
    }
  `;

  return (
    <>
      <AnimatePresence>
        {ModalState && (
          <motion.div
            className={Container}
            initial={{ y: "80%", opacity: 0 }}
            exit={{ y: "80%", opacity: 0 }}
            animate={{
              y: ModalState ? 0 : "80%",
              opacity: ModalState ? 1 : 0,
            }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
          >
            <h1>Maintenance mode</h1>
            <p>
              TheIceJI website is under construction. I am updating your <br />
              Experience with a new design and improve performance <br />
              If you want to contact me, click social link on bottom-left.
            </p>
            <button
              onClick={() => {
                setModalState(false);
              }}
            >
              I Understand
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
