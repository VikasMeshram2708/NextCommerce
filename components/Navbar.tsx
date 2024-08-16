import Link from "next/link";
import { Button } from "./ui/button";
import { ShoppingBasket } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="container mx-auto border-b">
      <div className="p-6 flex items-center justify-between">
        <h2 className="text-3xl font-bold">
          <Link href="/">Next Commerce</Link>
        </h2>
        <Button variant={"ghost"}>
          <ShoppingBasket />
        </Button>
      </div>
    </nav>
  );
}
