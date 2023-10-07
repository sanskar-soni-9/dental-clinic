import { ImSpinner2 } from "react-icons/im";

const Loading = () => {
  return (
    <div className="h-screen w-full bg-slate-100 flex justify-center items-center">
      <ImSpinner2 className="text-teal-600 text-5xl animate-spin transition-all duration-75 ease-in-out" />
    </div>
  );
};

export default Loading;
