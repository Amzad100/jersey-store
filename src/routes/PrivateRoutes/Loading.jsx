import Lottie from "lottie-react";
import loading from "../../assets/loading.json";

export default function Loading() {
  return (
    <div>
      <Lottie
        className="h-[400px] lg:h-[600px]"
        animationData={loading}
      ></Lottie>
    </div>
  );
}
