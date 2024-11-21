"use client";
import useModalStore from "@/hooks/modalStore";
import { useEffect } from "react";

const ModalContainer = () => {
  const modals = useModalStore((state) => state.modals);

  useEffect(() => {
    if (modals.length > 0) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // cleanup
    };
  }, [modals]);

  return (
    <>
      {modals.map(({ Component, props }, idx) => {
        return (
          <div
            key={idx}
            className="modal-overlay fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50"
          >
            <div className="modal-content">
              <Component {...props} />
            </div>
          </div>
        );
      })}
    </>
  );
};
export default ModalContainer;
