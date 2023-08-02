"use client";
import { useState } from "react";
import PrimaryButton from "./PrimaryButton";
import ContactUs from "./ContactUs";

const BookOnline = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <PrimaryButton
        text="Book Appointment"
        handleClick={() => {
          setIsOpen(true);
          document.body.classList.add("overflow-hidden");
        }}
      />
      {isOpen ? (
        <div
          className="absolute top-0 right-0 left-0 h-screen z-50 bg-slate-900/60 flex items-center justify-center"
          onClick={() => {
            setIsOpen(false);
            document.body.classList.remove("overflow-hidden");
          }}
        >
          <ContactUs
            closeContactUs={() => {
              setIsOpen(false);
              document.body.classList.remove("overflow-hidden");
            }}
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default BookOnline;
