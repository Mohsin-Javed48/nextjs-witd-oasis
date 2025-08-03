import Link from "next/link";
import React from "react";

const Navigation: React.FC = () => {
  return (
    <ul>
      <li>
        <Link href="/" className="text-blue-700 underline m-6">
          Home
        </Link>
      </li>
      <li>
        <Link href="/cabins" className="text-blue-700 underline m-6">
          cabins
        </Link>
      </li>
      <li>
        <Link href="/about" className="text-blue-700 underline m-6">
          about
        </Link>
      </li>
      <li>
        <Link href="/contact" className="text-blue-700 underline m-6">
          contact us
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;
