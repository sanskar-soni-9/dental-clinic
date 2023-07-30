"use client";
import { useState } from "react";

const CopyTextToClipboard = ({ text, styles }) => {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <div className="flex items-center gap-2 group/clipboard">
      <p
        className={styles}
        onClick={() => {
          setIsCopied(true);
          navigator.clipboard.writeText(text);
          setTimeout(() => setIsCopied(false), 500);
        }}
      >
        {isCopied ? "Copied to Clipboard!" : text}
      </p>
      {isCopied ? (
        ""
      ) : (
        <p
          className="group-hover/clipboard:block hidden bg-teal-600 rounded-full text-teal-50 px-2 py-1 cursor-pointer"
          onClick={() => {
            setIsCopied(true);
            navigator.clipboard.writeText(text);
            setTimeout(() => setIsCopied(false), 500);
          }}
        >
          Click to Copy
        </p>
      )}
    </div>
  );
};

export default CopyTextToClipboard;
