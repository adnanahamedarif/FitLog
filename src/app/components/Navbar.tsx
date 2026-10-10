"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/assets/logo.png";

export default function Navbar() {
  const pathname = usePathname();

  const getLinkClass = (href: string) => {
    const isActive = pathname === href;

    return `px-5 py-2 rounded-full text-sm font-semibold transition ${
      isActive ? "bg-[#1a2608] text-[#CCFF00]" : "text-gray-400 hover:text-white"
    }`;
  };



  return (
    <header className="sticky top-0 z-50 border-b border-gray-800 bg-[#0A0A0A]/95 backdrop-blur-xl">
      <div className="navbar mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        
        <div className="navbar-start">
          <Link href="/" className="flex items-center gap-3">
            <Image src={logo} alt="FitLog Logo" width={32} height={32} className="object-contain" />
            <h2 className="text-2xl font-black tracking-tight text-white">
              FIT<span className="text-[#CCFF00]">LOG</span>
            </h2>
          </Link>
        </div>

        <div className="navbar-center hidden sm:flex">
          <div className="flex items-center gap-1 rounded-full border border-gray-800 bg-[#111318] p-1.5">
            <Link href="/" className={getLinkClass("/")}> Workouts </Link>

            <Link href="/my-plan" className={getLinkClass("/my-plan")}> My Plan</Link>
          </div>
        </div>

        <div className="navbar-end gap-3 flex items-center">
          <Link href="/my-plan"  className="flex items-center gap-2  px-4 py-2 text-xs font-bold text-white]" >
            Plan <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#CCFF00] text-black font-extrabold">0</span>
          </Link>

          <Link href="/my-plan" className="flex items-center gap-2  px-4 py-2 text-xs font-bold text-white"  >
            Saved <span className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-800 text-white font-extrabold">0</span>
          </Link>
        </div>
      </div>


      {/* Mobile */}
      <div className="flex justify-center gap-3 border-t border-gray-800 px-4 py-3 sm:hidden bg-[#111318]">
        <Link href="/" className={getLinkClass("/")}>Workouts</Link>
        <Link href="/my-plan" className={getLinkClass("/my-plan")}> My Plan</Link>
      </div>
    </header>
  );
}