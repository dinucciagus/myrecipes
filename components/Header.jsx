"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { usePathname } from "next/navigation";
const Header = () => {
  const paths = usePathname().split("/");
  const currentp = paths[2];
  const recipeid = paths[3];

  return (
    <div className="py-5 bg-pink shadow-darkpink shadow-md  ">
      <div>
        <Link className="flex justify-center" href={"/"}>
          <Image alt="Logo My food recipes" src={logo} width={80} />
        </Link>
      </div>
      <div className="px-4 justify-start  w-full flex pt-4 md:pt-0 ">
        <div>
          {currentp ? (
            <Link
              className="text-dark font-semibold cursor-pointer hover:text-darkpink"
              href={`/recipes`}
            >
              {"< "}All recipes{" "}
            </Link>
          ) : null}
          {recipeid ? (
            <Link
              className="text-dark font-semibold cursor-pointer hover:text-darkpink"
              href={`/recipes/${currentp}`}
            >
              {"< "} {currentp}
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default Header;
