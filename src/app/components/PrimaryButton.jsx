import Link from "next/link";

const PrimaryButton = ({ text, handleClick, href, isLink, isDark }) => {
  return (
    <div
      className={`relative overflow-hidden group w-fit rounded-lg ${
        isDark
          ? "bg-teal-600 text-teal-50 hover:text-teal-600"
          : "bg-teal-50 text-teal-600 hover:text-teal-50"
      }`}
    >
      <div
        className={`absolute group-hover:left-0 w-full top-0 -left-full right-0 bottom-0 duration-300 ease-in-out ${
          isDark ? "bg-teal-50" : "bg-teal-600"
        }`}
      />
      {isLink ? (
        <Link
          href={href}
          className="inline-block px-3 sm:px-4 py-2 sm:py-3 w-fit rounded-lg font-medium relative"
        >
          {text}
        </Link>
      ) : (
        <button
          onClick={handleClick}
          className="inline-block px-3 sm:px-4 py-2 sm:py-3 w-fit rounded-lg font-medium relative"
        >
          {text}
        </button>
      )}
    </div>
  );
};

export default PrimaryButton;
