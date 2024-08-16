"use client";

import { Facebook, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container mx-auto border-t">
      <div className="p-4 flex items-center justify-between">
        <h2 className="text-3xl font-bold">
          <Link href="/">Next Commerce</Link>
        </h2>
        <address>
          <p className="text-lg font-semibold">Nagpur, Maharashtra, India</p>
          <div className="flex items-center gap-3 pt-5 flex-wrap">
            <Twitter size={36} className="cursor-pointer hover:text-blue-500" />
            <Facebook
              size={36}
              className="cursor-pointer hover:text-blue-500"
            />
            <Linkedin
              size={36}
              className="cursor-pointer hover:text-blue-500"
            />
          </div>
        </address>
      </div>
      <p className="text-sm font-semibold text-center">
        Copyright &copy;nextcommerce {new Date().getFullYear()}
      </p>
    </footer>
  );
}
