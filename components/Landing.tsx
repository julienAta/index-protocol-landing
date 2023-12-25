import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Landing() {
  return (
    <div className="h-[90vh]">
      <div className="px-4 py-36">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-16" variant="secondary">
            Index Protocol
          </Badge>
          <h1 className="text-6xl font-bold mb-9">
            Fair launch and liquidity bootstrapping on Solana
          </h1>
          <p className="text-xl mb-16">
            Leveraging the blockchain to create a fairer, more open financial
            system for all
          </p>
          <div className="flex justify-center space-x-4">
            <Button className="" variant="outline">
              <a
                target="_blank"
                href="https://twitter.com/analysoor"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </Button>
            <Button className="" variant="outline">
              <a
                target="_blank"
                href="https://discord.gg/analysoor"
                rel="noopener noreferrer"
              >
                Discord
              </a>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 pb-4">
        <Button disabled>Learn more</Button>
      </div>
    </div>
  );
}

function BellIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function SearchIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function ShoppingCartIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

function UserCircleIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="10" r="3" />
      <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
    </svg>
  );
}
