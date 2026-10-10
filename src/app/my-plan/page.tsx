"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Clock, Flame, Check, Star } from "lucide-react";
import { usePlan } from "../context/PlanContext";

const MyPlanPage = () => {
    const { plan, saved, removeFromPlan, removeFromSaved, markAsDone } = usePlan();

    type WorkoutWithDone = (typeof plan)[number] & { isDone?: boolean };

    const [activeTab, setActiveTab] = useState("plan");
    const [sortBy, setSortBy] = useState("duration");

    const workouts: WorkoutWithDone[] = activeTab === "plan" ? (plan as WorkoutWithDone[]) : (saved as WorkoutWithDone[]);

    const sortedWorkouts = [...workouts].sort((a, b) => {
        if (sortBy === "duration") {
            return (a.duration || 0) - (b.duration || 0);
        }

        if (sortBy === "calories") {
            return (b.caloriesBurned || 0) - (a.caloriesBurned || 0);
        }

        return (b.rating || 0) - (a.rating || 0);
    });

    const totalMinutes = workouts.reduce(
        (total, workout) => total + (workout.duration || 0),
        0
    );

    const totalCalories = workouts.reduce(
        (total, workout) => total + (workout.caloriesBurned || 0),
        0
    );

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
                        <p className="mt-1 text-2xl font-black text-[#CCFF00] sm:text-3xl">
                            {workouts.length}
                        </p>
                    </div>

                    <div className="border-r border-white/5 px-3 sm:px-5">
                        <p className="text-xs text-gray-400">Minutes</p>
                        <p className="mt-1 text-2xl font-black sm:text-3xl">
                            {totalMinutes}
                        </p>
                    </div>

                    <div className="px-3 sm:px-5">
                        <p className="text-xs text-gray-400">Calories</p>
                        <p className="mt-1 text-2xl font-black sm:text-3xl">
                            {totalCalories}
                        </p>
                    </div>
                </div>

                <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex rounded-lg border border-white/10 bg-[#13161C] p-1">
                        <button
                            onClick={() => setActiveTab("plan")}
                            className={`rounded-md px-4 py-2 text-xs font-semibold ${
                                activeTab === "plan" ? "bg-[#222630] text-white" : "text-gray-400 hover:text-white"
                            }`} >
                            Today's Plan ({plan.length})
                        </button>

                        <button
                            onClick={() => setActiveTab("saved")}
                            className={`rounded-md px-4 py-2 text-xs font-semibold ${
                                activeTab === "saved"
                                    ? "bg-[#222630] text-white"
                                    : "text-gray-400 hover:text-white"
                            }`} >
                            Saved ({saved.length})
                        </button>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-400">Sort By</span>

                        <div className="relative">
                            <select value={sortBy}  onChange={(e) => setSortBy(e.target.value)}  className="appearance-none rounded-lg border border-white/10 bg-[#13161C] py-2 pl-3 pr-8 text-xs text-white outline-none focus:border-[#CCFF00]"  >
                                <option value="duration">Duration</option>
                                <option value="calories">Calories</option>
                                <option value="rating">Rating</option>
                            </select>

                            <ChevronDown size={14} className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" />
                        </div>
                    </div>
                </div>

                {/* Empty State */}
                {workouts.length === 0 && (
                    <div className="flex min-h-60 flex-col items-center justify-center rounded-xl border border-dashed border-white/10 px-5 py-12 text-center">
                        <h2 className="text-base font-black uppercase sm:text-lg">
                            {activeTab === "plan" ? "NOTHING HERE YET" : "NO SAVED WORKOUTS"}
                        </h2>

                        <p className="mt-2 text-xs text-gray-400 sm:text-sm">
                            {activeTab === "plan" ? "Browse the library and add a workout." : "Save a workout from the library to find it here later."}
                        </p>

                        <Link href="/#library" className="mt-5 rounded-full bg-[#CCFF00] px-5 py-2.5 text-xs font-bold text-black transition hover:bg-[#DFFF4F]">
                            Go to workouts
                        </Link>
                    </div>
                )}

                {/* Workout List */}
                {sortedWorkouts.length > 0 && (
                    <div className="space-y-4">
                        {sortedWorkouts.map((workout) => (
                            <div key={workout.id} className="flex flex-col gap-4 rounded-xl border border-white/10 bg-[#13161C] p-4 sm:flex-row sm:items-center">
                                <img
                                    src={workout.image}
                                    alt={workout.name}
                                    className="h-36 w-full rounded-lg bg-[#20232B] object-contain p-2 sm:h-28 sm:w-36"
                                />

                                <div className="flex-1">
                                    <h3 className="font-bold uppercase">
                                        {workout.name}
                                    </h3>

                                    <p className="mt-2 text-xs text-gray-400">
                                        {workout.equipment} · {workout.difficulty}
                                    </p>

                                    <div className="mt-3 flex flex-wrap gap-4 text-xs text-gray-400">
                                        <span className="flex items-center gap-1">
                                            <Clock size={14} className="text-[#CCFF00]"/>
                                            {workout.duration} min
                                        </span>

                                        <span className="flex items-center gap-1">
                                            <Flame size={14} className="text-[#CCFF00]" />
                                            {workout.caloriesBurned} kcal
                                        </span>

                                        <span className="flex items-center gap-1.5">
                                            <Star size={15} className="text-[#CCFF00]" />
                                            {workout.rating}
                                        </span>
                                    </div>

                                    {workout.isDone && (
                                        <p className="mt-2 text-xs font-bold text-[#CCFF00]">
                                            COMPLETED
                                        </p>
                                    )}
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    <Link href={`/workout/${workout.id}`} className="rounded-lg border border-white/10 px-3 py-2 text-xs font-bold hover:border-[#CCFF00]">
                                        Details
                                    </Link>

                                    {activeTab === "plan" && (
                                        <button
                                            onClick={() => markAsDone(workout.id)}
                                            disabled={workout.isDone}
                                            className="flex items-center gap-1 rounded-lg bg-[#CCFF00] px-3 py-2 text-xs font-bold text-black disabled:cursor-not-allowed disabled:opacity-50" >
                                            <Check size={14} />
                                            {workout.isDone ? "Done" : "Mark Done"}
                                        </button>
                                    )}

                                    <button  onClick={() =>
                                            activeTab === "plan" ? removeFromPlan(workout.id) : removeFromSaved(workout.id)
                                        }
                                        className="flex items-center gap-1 rounded-lg px-3 py-2 text-xs font-bold" >
                                        ❌
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
};

export default MyPlanPage;