
import Image from "next/image";
import logo from "@/assets/logo.png";

const Footer = () => {
    return (
        <div className="border-t border-gray-800 bg-[#0A0A0A] px-6 py-10 text-white">
            <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                <div className="flex items-center gap-2">
                    <Image src={logo} alt="FitLog Logo" width={32} height={32}/>

                    <h2 className="text-lg font-bold">
                        FITLOG
                    </h2>
                </div>

                <p className="text-sm text-gray-500">
                   © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>

            </div>
        </div>
    );
};

export default Footer;
