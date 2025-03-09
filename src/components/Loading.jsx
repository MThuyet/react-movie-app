import { FadeLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-black brightness-80">
      <FadeLoader color="#ff0000" />
    </div>
  );
};
export default Loading;
