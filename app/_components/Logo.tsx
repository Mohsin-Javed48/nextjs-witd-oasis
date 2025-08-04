import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/logo.png";

const page: React.FC = () => {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image
        src="/icon.png"
        height="60"
        width="60"
        alt="The Wild Oasis logo"
        quality={100}
      />
      {/* <Image
        src={logo}
        height="60"
        width="60"
        alt="The Wild Oasis logo"
        quality={10}
      /> */}
      <span className="text-xl font-semibold text-primary-100">
        The Wild Oasis
      </span>
    </Link>
  );
};

export default page;
