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
          <a
            target="_blank"
            href="https://birdeye.so/token/93RC484oMK5T9H89rzT5qiAXKHGP9jscXfFfrihNbe57?chain=solana"
          >
            Zero
          </a>
        </Button>
        <Button className="">
          <a target="_blank" href="https://www.tensor.trade/trade/one">
            One
          </a>
        </Button>
      </div>
    </nav>
  );
}

export default Header;
