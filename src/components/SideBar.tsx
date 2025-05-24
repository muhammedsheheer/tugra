"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type FC } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: FC<SidebarProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const d = localStorage.getItem("positiond");
    if (d !== null) {
      setPositiond(d);
    }
  }, []);
  const [positiond, setPositiond] = useState<string>("");
  useEffect(() => {
    if (positiond) {
      localStorage.setItem("positiond", positiond);
    }
  }, [positiond]);

  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = () => setShowSubMenu((prev) => !prev);

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="w-[300px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>
            <Image
              src="/images/home/hero/logo-tugra.png"
              width={162}
              height={35}
              alt="Foodo"
              className="w-28"
            />
          </SheetTitle>
          <SheetDescription className="flex w-full flex-col items-center justify-center gap-7 pt-14">
            <Link
              href="/"
              className="flex w-full justify-center p-0 font-cormorant text-3xl font-normal text-white"
            >
              Home
            </Link>
            <button
              onClick={toggleSubMenu}
              className="flex w-full justify-center p-0 font-cormorant text-3xl font-normal text-white"
            >
              <span>Menu</span>
            </button>
            {showSubMenu && (
              <div className="ml-6 flex w-full flex-col gap-6 pb-4 text-sm text-white">
                <Link
                  className="flex w-full justify-center p-0 font-cormorant text-3xl font-normal text-white"
                  href="/pdf/Main_Menu.pdf"
                  target="_blank"
                  // className="hover:underline"
                >
                  Main Menu
                </Link>
                <Link
                  className="flex w-full justify-center p-0 font-cormorant text-3xl font-normal text-white"
                  href="/pdf/lunch _menu.pdf"
                  target="_blank"
                  // className="hover:underline"
                >
                  Lunch Menu
                </Link>
                <Link
                  className="flex w-full justify-center p-0 font-cormorant text-3xl font-normal text-white"
                  href="/pdf/dessert _menu.pdf"
                  target="_blank"
                  // className="hover:underline"
                >
                  Dessert Menu
                </Link>
                <Link
                  className="flex w-full justify-center p-0 font-cormorant text-3xl font-normal text-white"
                  href="/pdf/kids_menu.pdf"
                  target="_blank"
                  // className="hover:underline"
                >
                  Kids Menu
                </Link>
                <Link
                  className="flex w-full justify-center p-0 font-cormorant text-3xl font-normal text-white"
                  href="/pdf/party_menu.pdf"
                  target="_blank"
                  // className="hover:underline"
                >
                  Party Menu
                </Link>
              </div>
            )}
            {/* <Link
              href="/menu"
              className="flex w-full justify-center p-0 font-cormorant text-3xl font-normal text-white"
            >
              Menu
            </Link> */}

            <Link
              href="/about-us"
              className="flex w-full justify-center p-0 font-cormorant text-3xl font-normal text-white"
            >
              Our Story
            </Link>
            <Link
              href="/menu"
              className="flex w-full justify-center p-0 font-cormorant text-3xl font-normal text-white"
            >
              Order Online
            </Link>
            <Link
              href="/contact"
              className="flex w-full justify-center p-0 font-cormorant text-3xl font-normal text-white"
            >
              Contact
            </Link>
            <Link
              href="/table-booking"
              className="flex w-full justify-center p-0 font-cormorant text-3xl font-normal text-white"
            >
              Table Booking
            </Link>
            {/* <Link
              href=""
              className="flex w-full justify-center p-0 font-cormorant text-3xl font-normal text-white"
            >
              Food
            </Link>
            <Link
              href="/drinks"
              className="flex w-full justify-center p-0 font-cormorant text-3xl font-normal text-white"
            >
              Drinks
            </Link> */}
            {/* <Button
                            variant="link"
                            className={cn("w-full flex justify-start p-0 uppercase text-accent text-white border-b-[1px] border-b-gray-800")}
                            asChild
                        >
                            <Link href="/menu" className="flex gap-2 py-6"><Dock /> <span>Menu</span></Link>
                        </Button>
                        <Button
                            asChild
                            variant="link"
                            className="w-full flex justify-start p-0 uppercase text-accent text-white border-b-[1px] border-b-gray-800"
                        >
                            <Link href="/about-us" className="flex gap-2 py-6"><ShieldQuestion /> <span>About</span> </Link>
                        </Button>
                        <Button
                            variant="link"
                            className="w-full flex justify-start p-0 uppercase text-accent text-white border-b-[1px] border-b-gray-800"
                            asChild
                        >
                            <Link href="/contact" className="flex gap-2 py-6"><Phone /> <span>Contact</span></Link>
                        </Button>
                        <Button
                            asChild
                            variant="link"
                            className="w-full flex justify-start px-1 p-0 uppercase text-accent text-white border-b-[1px] border-b-gray-800"
                        >
                            <Link href="/table-booking" className="flex gap-2 py-6"><BookCheck /> <span>Booking</span> </Link>
                        </Button>
                        <Button
                            asChild
                            variant="link"
                            className="w-full flex justify-start p-0 uppercase text-accent text-white"
                        >
                            <Link href="/gift-voucher" className="flex gap-2 py-6" ><Gift /> <span>Gift Voucher</span></Link>
                        </Button> */}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
