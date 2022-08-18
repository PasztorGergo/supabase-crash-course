import Link from "next/link";
import React from "react";
import Avatar from "../Avatar";

export default function index() {
  return (
    <nav className="flex px-4 h-20 bg-white shadow-sm items-center">
      <h2 className="grow">
        <Link href="/">
          <a>Supa Gallery</a>
        </Link>
      </h2>
      <ul className="flex items-center justify-between gap-4">
        <li>Contact</li>
        <li>About</li>
        <li>
          <Avatar />
        </li>
      </ul>
    </nav>
  );
}
