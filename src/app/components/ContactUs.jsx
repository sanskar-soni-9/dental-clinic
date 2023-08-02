"use client";
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

const textareaMaxCharLength = 600;

const ContactUs = ({ closeContactUs }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobNumber, setMobNumber] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      firstName,
      lastName,
      email,
      mobNumber,
      message,
    };
    setStatus("sending");

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) =>
      res.json().then((data) => {
        if (data.success) {
          setStatus("sent");
          setTimeout(closeContactUs, 2500);
          return;
        }
        setStatus("error");
      }),
    );
  };

  return (
    <div
      className="relative bg-gray-900 rounded-[50px] pt-20 pb-16 flex flex-col items-center w-full sm:w-[600px] text-teal-500 text-sm font-semibold"
      onClick={(e) => e.stopPropagation()}
      onSubmit={handleSubmit}
    >
      <AiFillCloseCircle className="absolute top-5 right-5 w-12 h-12 text-teal-500 bg-gray-900 hover:scale-110 rounded-full cursor-pointer" onClick={closeContactUs} />
      <form className="flex flex-col gap-7 w-fit" autoComplete="on">
        <div className="flex flex-col sm:flex-row gap-5">
          <label className="space-y-1">
            <p className="font-bold">
              First Name: <span className="text-red-700">*</span>
            </p>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="rounded-xl px-3 py-2 bg-teal-100 text-sm text-slate-700 placeholder-slate-400 w-[85vw] sm:w-full"
              required={true}
            />
          </label>
          <label className="space-y-1">
            <p className="font-bold">
              Last Name: <span className="text-red-700">*</span>
            </p>
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="rounded-xl px-3 py-2 bg-teal-100 text-sm text-slate-700 placeholder-slate-400 w-[85vw] sm:w-full"
              required={true}
            />
          </label>
        </div>
        <label className="space-y-1">
          <p className="font-bold">Email:</p>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-xl px-3 py-2 bg-teal-100 text-sm text-slate-700 placeholder-slate-400 w-[85vw] sm:w-full"
          />
        </label>
        <label className="space-y-1">
          <p className="font-bold">
            Contact No.: <span className="text-red-700">*</span>
          </p>
          <input
            type="tel"
            value={mobNumber}
            placeholder="Contact No."
            onChange={(e) => setMobNumber(e.target.value)}
            className="rounded-xl px-3 py-2 bg-teal-100 text-sm text-slate-700 placeholder-slate-400 w-[85vw] sm:w-full"
            maxLength={13}
            required={true}
            minLength={10}
          />
        </label>
        <label className="space-y-1">
          <p className="font-bold">
            Message: <span className="text-red-700">*</span>
          </p>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={message.length <= 60 ? 2 : message.length / 42 + 1}
            className="overflow-y-clip resize-none rounded-xl px-3 py-2 bg-teal-100 text-sm text-slate-700 placeholder-slate-400 w-[85vw] sm:w-full"
            spellCheck={true}
            placeholder="Message"
            maxLength={textareaMaxCharLength}
            required={true}
          />
          <p className="text-end">{`${message.length}/${textareaMaxCharLength} characters`}</p>
        </label>
        <div className="flex gap-5 flex-col items-center sm:flex-row">
          <input
            type="submit"
            className="relative bg-teal-600 px-5 p-3 text-teal-50 active:bg-teal-50 active:text-teal-600 rounded-lg cursor-pointer w-fit hover:-top-0.5 hover:shadow-teal-600 shadow-sm disabled:cursor-wait disabled:pointer-events-none"
            disabled={status === "sending" || status === "sent"}
            value={status === "sending" ? "Sending..." : "Submit"}
          />
          {status === "error" ? (
            <p className="text-red-700">
              Failed to submit form right now, try again after some time.
            </p>
          ) : status === "sent" ? (
            <p>Message received successfully, thank you for contacting us.</p>
          ) : (
            ""
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
