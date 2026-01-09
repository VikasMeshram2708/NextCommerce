import Link from "next/link";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { MenuIcon } from "lucide-react";

export default function Header() {
  const navLinks = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/products",
      label: "Products",
    },
    {
      href: "/privacy",
      label: "Privacy Policy",
    },
  ] as const;
  return (
    <header className="p-4 sticky top-0 bg-background">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl sm:text-2xl md:text-3xl font-medium">
          Next{" "}
          <span className="italic bg-clip-text text-transparent bg-linear-to-r from-pink-500 via-orange-500 to-pink-600">
            Commerce
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-4">
          {navLinks.map((i) => (
            <Link key={i.label} href={i.href}>
              {i.label}
            </Link>
          ))}
        </nav>
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant={"ghost"}>
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <Link href="/" className="text-xl sm:text-2xl font-medium">
                    Next{" "}
                    <span className="italic bg-clip-text text-transparent bg-linear-to-r from-pink-500 via-orange-500 to-pink-600">
                      Commerce
                    </span>
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <nav className="p-2 flex flex-col gap-4">
                {navLinks.map((i) => (
                  <Link key={i.label} href={i.href}>
                    <span className="hover:text-primary">{i.label}</span>
                  </Link>
                ))}
              </nav>
              <SheetFooter className="flex flex-col gap-2">
                <Button variant={"link"} className="w-full" type="button">
                  Sign In
                </Button>
                <Button className="w-full" type="button">
                  Sign Up
                </Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden lg:flex items-center gap-2">
          <Button type="button" variant={"link"}>
            Sign In
          </Button>

          <Button type="button">Sign Up</Button>
        </div>
      </div>
    </header>
  );
}
