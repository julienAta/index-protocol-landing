import React from "react";

import { Card, CardContent } from "@/components/ui/card";

function Zero() {
  return (
    <div className="h-[90vh] flex flex-wrap p-12">
      <Card className="w-1/2">
        <div className="px-4 py-36">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-bold mb-9">Zero</h1>
            <p className="text-xl mb-16">
              Zero is a fair launch and liquidity bootstrapping protocol on
              Solana.
            </p>
          </div>
        </div>
      </Card>
      <Card className="w-1/2">
        <div className="px-4 py-36">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-bold mb-9">Zero</h1>
            <p className="text-xl mb-16">
              Zero is a fair launch and liquidity bootstrapping protocol on
              Solana.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Zero;
