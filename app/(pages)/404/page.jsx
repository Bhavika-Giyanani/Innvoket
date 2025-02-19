import Link from "next/link";
import React from "react";

const ErrorPage = () => {
  return (
    <div className="my-10 md:my-20 flex flex-col items-center justify-between space-y-10">
      <h1 className="text-3xl md:text-9xl text-orange-500">Ooops!</h1>

      <p className="text-gray-500">
        404 Error: Looks like you've hit a dead end. Don't worry, our web ninjas
        are on the case to bring you back to safety!
      </p>

      <Link
        href="/"
        className="bg-[#FF7A30] py-3 px-7 rounded-full transition-colors text-black"
      >
        BACK TO HOME ↗
      </Link>
    </div>
  );
};

export default ErrorPage;
