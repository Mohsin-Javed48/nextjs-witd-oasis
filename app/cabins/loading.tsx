import React from "react";
import Spinner from "@/app/_components/Spinner";

const page: React.FC = () => {
  return (
    <div className="grid items-center justify-center">
      <Spinner />
      <p className="text-xl text-primary-200">Loadin Cabin data.....</p>
    </div>
  );
};

export default page;
