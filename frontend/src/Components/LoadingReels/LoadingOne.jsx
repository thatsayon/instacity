import React from "react";
import ReactLoading from "react-loading";

function LoadingOne() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">

      <ReactLoading type="spokes" height="30px" width="30px" color="#737373" />
    </div>
  );
}

export default LoadingOne;
