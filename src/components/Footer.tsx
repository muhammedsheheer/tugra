"use client";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./Icon";

const Footer = ({}) => {
  return (
    <footer className="h-full w-full bg-[#000]">
      <div className="h-[1px] w-full border-b-[1px] border-b-[#CFAC6A]" />
      <div className="flex flex-col gap-4 px-4 pt-12 md:gap-6 lg:px-10 lg:pt-24">
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-1">
          <Link href={"/"}>
            <Image
              src={"/images/home/hero/logo-tugra.png"}
              width={281}
              height={74}
              alt="logo"
              className="w-20 md:w-32"
            />
          </Link>
        </div>
        {/*big screen */}
        <div className="hidden flex-row items-center justify-center gap-40 md:flex">
          <div className="flex flex-col items-center justify-center gap-3 md:items-start">
            <Link
              href={"/"}
              className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#CFAC6A]"
            >
              Home{" "}
            </Link>
            <Link
              href={"/menu"}
              className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#CFAC6A]"
            >
              Menu{" "}
            </Link>
            <Link
              href={"/contact"}
              className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#CFAC6A]"
            >
              Contact us{" "}
            </Link>
            <Link
              href={"/about-us"}
              className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#CFAC6A]"
            >
              Our Story{" "}
            </Link>
            <Link
              href={"/table-booking"}
              className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#CFAC6A]"
            >
              Booking{" "}
            </Link>
          </div>
          <div className="flex flex-col items-center gap-3 md:items-start">
            <div>
              <Link
                href={""}
                className="font-open_sans text-base font-[400] uppercase tracking-[2px] text-[#CFAC6A]"
              >
                Contact{" "}
              </Link>
            </div>
            <div className="flex flex-col gap-1">
              <Link
                href={"https://g.co/kgs/A9XarPF"}
                target="_blank"
                className="text-end font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#CFAC6A] md:text-start"
              >
                9-11, Market Street, Preston, United Kingdom
              </Link>
              <Link
                href={"mailto:info@humowatford.com"}
                className="text-end font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#CFAC6A] md:text-start"
              >
                info@tugrahayes.co.uk
              </Link>
              <Link
                href={"tele:+442084629898"}
                className="text-end font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#CFAC6A] md:text-start"
              >
                +44 20 8462 9898
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 md:items-start">
            <Link
              href={""}
              className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#CFAC6A]"
            >
              Opening hours
            </Link>
            <p className="text-center font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#CFAC6A] md:text-start">
              Monday 12:00pm to 10:30pm
              <br />
              Tuesday closed
              <br />
              Wednesday 12:00pm to 11:00pm
              <br />
              Thursday 12:00pm to 11:30pm
              <br />
              Friday 12:00pm to 12:00am
              <br />
              Saturday 12:00pm to 12:00am
              <br />
              Sunday 12:00pm to 10:00pm
            </p>
          </div>
        </div>
        {/* mobile screen */}

        <div className="flex flex-col items-start justify-start gap-4 md:hidden md:flex-row md:items-center md:justify-end md:gap-2">
          <div className="flex w-full flex-row items-start justify-start gap-8 md:w-[45%] md:flex-row md:items-center md:justify-end md:gap-16">
            <div className="flex flex-col items-start justify-start gap-3 md:items-start">
              <Link
                href={"/"}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#CFAC6A]"
              >
                Home{" "}
              </Link>
              <Link
                href={"/menu"}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#CFAC6A]"
              >
                Menu{" "}
              </Link>
              <Link
                href={"/contact"}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#CFAC6A]"
              >
                Contact us{" "}
              </Link>
              <Link
                href={"/about-us"}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#CFAC6A]"
              >
                Our Story{" "}
              </Link>
              <Link
                href={"/table-booking"}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#CFAC6A]"
              >
                Booking{" "}
              </Link>
            </div>
            <div className="flex flex-col items-end gap-3 md:items-start">
              <div>
                <Link
                  href={""}
                  className="font-open_sans text-base font-[400] uppercase tracking-[2px] text-[#CFAC6A]"
                >
                  Contact{" "}
                </Link>
              </div>
              <div className="flex flex-col items-end gap-1">
                <Link
                  href={"https://g.co/kgs/qNeM2a6"}
                  target="_blank"
                  className="text-end font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#CFAC6A] md:text-start"
                >
                  44 Station Approach, <br /> Hayes, Bromley BR2 7EJ, United
                  Kingdom
                </Link>
                <Link
                  href={"mailto:info@humowatford.com"}
                  className="text-end font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#CFAC6A] md:text-start"
                >
                  info@tugrahayes.co.uk
                </Link>
                <Link
                  href={"tele:+442084629898"}
                  className="text-end font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#CFAC6A] md:text-start"
                >
                  +44 20 8462 9898
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full border-b-[1px] border-b-[#CFAC6A]" />
          <div className="flex w-full flex-col items-center justify-center gap-8 pt-6 md:w-[45%] md:flex-row md:justify-start md:gap-20">
            <div className="flex flex-col items-center gap-3 md:items-start">
              <span className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#CFAC6A]">
                Opening hours
              </span>
              <p className="text-center font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#CFAC6A] md:text-start">
                Monday 12:00pm to 10:30pm
                <br />
                Tuesday closed
                <br />
                Wednesday 12:00pm to 11:00pm
                <br />
                Thursday 12:00pm to 11:30pm
                <br />
                Friday 12:00pm to 12:00am
                <br />
                Saturday 12:00pm to 12:00am
                <br />
                Sunday 12:00pm to 10:00pm
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-3 md:ml-10 md:items-center md:justify-center">
          <Link
            href={"https://www.instagram.com/tugrahayes/"}
            target="_blank"
            className="text-[#CFAC6A]"
          >
            <Icons.instagram />
          </Link>
          <Link
            href={"https://www.facebook.com/tugrahayes"}
            target="_blank"
            className="text-[#CFAC6A]"
          >
            <Icons.facebook />
          </Link>
          <Link
            href={"https://g.co/kgs/qNeM2a6"}
            target="_blank"
            className="text-[#CFAC6A]"
          >
            <Icons.google />
          </Link>
        </div>
        <div className="flex flex-col gap-2 pb-10">
          <div className="flex flex-col justify-center gap-2 md:flex-row md:justify-between">
            <span className="text-center font-open_sans text-xs font-[400] uppercase tracking-[2px] text-[#CFAC6A] md:text-start">
              © 2025 Tugra , All Rights Reserved
            </span>

            <Link
              href={"https://foodo.ai"}
              target="_blank"
              className="text-center font-open_sans text-xs font-[400] uppercase tracking-[2px] text-[#CFAC6A] md:text-start"
            >
              Powerd by foodo
            </Link>
          </div>
        </div>
      </div>
      <div className="mb-1 h-[1px] w-full border-b-[1px] border-b-[#CFAC6A]" />
    </footer>
  );
};

export default Footer;
