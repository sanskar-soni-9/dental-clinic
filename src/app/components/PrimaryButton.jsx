import Link from "next/link";

const PrimaryButton = ({ text, handleClick, href, isLink }) => {
  return (
    <div className="relative overflow-hidden group bg-teal-50 w-fit rounded-lg text-teal-600 hover:text-teal-50">
      <div className="absolute bg-teal-600 group-hover:left-0 w-full top-0 -left-full right-0 bottom-0 duration-300 ease-in-out" />
      {isLink ? (
        <Link
          href={href}
          className="inline-block px-5 py-3 w-fit rounded-lg font-medium relative"
        >
          {text}
        </Link>
      ) : (
        <button
          onClick={handleClick}
          className="inline-block px-5 py-3 w-fit rounded-lg font-medium relative"
        >
          {text}
        </button>
      )}
    </div>
  );
};

export default PrimaryButton;
