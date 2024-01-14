import React from "react";
import { Button } from "./ui/button";

import { ModeToggle } from "./toggle-theme";
import Image from "next/image";
import Link from "next/link";
function Header() {
  return (
    <header className="p-8 lg:px-6 h-14 flex items-center bg-gray-900">
      <Link className="flex items-center justify-center" href="#">
        <Image alt="Acme Inc" height="35" src="/aaa.jpg" width="35" />
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <a
          href="https://twitter.com/sagamonkehq"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>Twitter</Button>
        </a>
        <a
          href="https://discord.com/invite/sagamonke"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>Discord</Button>
        </a>
      </nav>
    </header>
  );
}

export default Header;
