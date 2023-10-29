"use client";
import { useState } from "react";
import ContactUs from "./ContactUs";
import PrimaryButton from "./PrimaryButton";

const BookOnline = ({ isDark }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <PrimaryButton
        text="Book Appointment"
        handleClick={() => {
          setIsOpen(true);
          document.body.classList.add("overflow-y-hidden");
        }}
        isDark={isDark}
      />
      {isOpen && (
        <div
          className="fixed top-0 right-0 left-0 bottom-0 m-0 overflow-y-hidden z-50 bg-gray-900 sm:bg-slate-900/60 flex sm:items-center justify-center cursor-pointer"
          onClick={() => {
            setIsOpen(false);
            document.body.classList.remove("overflow-y-hidden");
          }}
        >
          <ContactUs
            closeContactUs={() => {
              setIsOpen(false);
              document.body.classList.remove("overflow-y-hidden");
            }}
          />
        </div>
      )}
    </>
  );
};

export default BookOnline;
