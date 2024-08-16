"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { ShoppingBasket } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/state/store";

export default function Navbar() {
  const totalItems = useSelector(
    (state: RootState) => state.products.product.length
  );
  return (
    <nav className="container mx-auto border-b">
      <div className="p-6 flex items-center justify-between">
        <h2 className="text-3xl font-bold">
          <Link href="/">Next Commerce</Link>
        </h2>
        <Link href="/basket">
          <Button variant={"ghost"}>
            <ShoppingBasket />
            {totalItems >= 1 && <p>{totalItems}</p>}
          </Button>
        </Link>
      </div>
    </nav>
  );
}
