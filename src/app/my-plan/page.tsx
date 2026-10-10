"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const MyPlanPage = () => {
    const [activeTab, setActiveTab] = useState("plan");
    const [sortBy, setSortBy] = useState("duration");

    return (
        <div className="min-h-screen bg-[#0A0A0A] px-4 py-8 text-white sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">

                <div className="mb-5">
                    <h1 className="text-3xl font-black uppercase">
                        MY PLAN
                    </h1>

                    <p className="mt-1 text-sm text-gray-400">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>
                </div>

                <div className="mb-6 grid grid-cols-3 rounded-xl border border-white/10 bg-[#13161C] p-4 sm:p-6">
                    <div className="border-r border-white/5 px-2 sm:px-5">
                        <p className="text-xs text-gray-400">Exercises</p>
                        <p className="mt-1 text-2xl font-black text-[#CCFF00] sm:text-3xl"> 0</p>
                    </div>

                    <div className="border-r border-white/5 px-3 sm:px-5">
                        <p className="text-xs text-gray-400">Minutes</p>
                        <p className="mt-1 text-2xl font-black sm:text-3xl">0</p>
                    </div>

                    <div className="px-3 sm:px-5">
                        <p className="text-xs text-gray-400">Calories</p>
                        <p className="mt-1 text-2xl font-black sm:text-3xl"> 0 </p>
                    </div>
                </div>

                
                <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex rounded-lg border border-white/10 bg-[#13161C] p-1">
                        <button 
                            onClick={() => setActiveTab("plan")} 
                            className={`rounded-md px-4 py-2 text-xs font-semibold transition ${
                                activeTab === "plan"
                                    ? "bg-[#222630] text-white"
                                    : "text-gray-400 hover:text-white"
                            }`} >
                            Today's Plan
                        </button>

                        <button
                            onClick={() => setActiveTab("saved")}
                            className={`rounded-md px-4 py-2 text-xs font-semibold transition ${
                                activeTab === "saved" ? "bg-[#222630] text-white" : "text-gray-400 hover:text-white"
                            }`}>
                            Saved
                        </button>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-400"> Sort By </span>

                        <div className="relative">
                            <select 
                                value={sortBy} 
                                onChange={(e) => setSortBy(e.target.value)}
                                className="appearance-none rounded-lg border border-white/10 bg-[#13161C] py-2 pl-3 pr-8 text-xs text-white outline-none focus:border-[#CCFF00]" >
                                <option value="duration">Duration</option>
                                <option value="calories">Calories</option>
                                <option value="rating">Rating</option>
                            </select>

                            <ChevronDown size={14} className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"/>
                        </div>
                    </div>
                </div>

                <div className="flex min-h-60 flex-col items-center justify-center rounded-xl border border-dashed border-white/10 px-5 py-12 text-center sm:min-h-60">
                    <h2 className="text-base font-black uppercase sm:text-lg">
                        {activeTab === "plan" ? "NOTHING HERE YET" : "NO SAVED WORKOUTS"}
                    </h2>

                    <p className="mt-2 text-xs text-gray-400 sm:text-sm">
                        {activeTab === "plan" ? "Browse the library and add a lift to get today moving." : "Save a workout from the library to find it here later."}
                    </p>

                    <Link  href="/#library" className="mt-5 rounded-full bg-[#CCFF00] px-5 py-2.5 text-xs font-bold text-black shadow-lg shadow-[#CCFF00]/10 transition hover:bg-[#DFFF4F]">
                        Go to workouts
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default MyPlanPage;