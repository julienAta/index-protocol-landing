import React from "react";
import { Button } from "./ui/button";

import { ModeToggle } from "./toggle-theme";
function Header() {
  return (
    <nav className="flex  justify-between p-5">
      <a className="text-xl font-bold" href="/">
        Analysoor
      </a>

      <div className="flex items-center space-x-5">
        <Button className="">
          <a href="/zero">Zero</a>
        </Button>
        <Button className="">
          <a href="/one">One</a>
        </Button>
      </div>
    </nav>
  );
}

export default Header;
