"use client";

import { useEffect, useState } from "react";
import { RefreshCw } from "lucide-react";

import type { Workout } from "@/app/Types/types";
import { getAllWorkouts } from "@/app/utils/api";
import WorkoutCard from "@/app/components/WorkoutCard";
import WorkoutCardSkeleton from "@/app/WorkoutCardSkeleton";

export default function LibrarySection() {
    const [workouts, setWorkouts] = useState<Workout[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    async function loadWorkouts() {
        try {
            setLoading(true);
            setError("");

            const data = await getAllWorkouts();

            setWorkouts(data);
        } catch (err) {
            console.error("Workout API error:", err);
            setError("Unable to load workouts. Please try again.");
        } finally {
            setLoading(false);
        }
    }


    useEffect(() => {
        loadWorkouts();
    }, []);




    return (
        <div id="library" className="scroll-mt-28 bg-[#0A0A0A] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-7xl">
                <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <h2 className="mt-3 text-xl font-black sm:text-5xl">THE LIBRARY</h2>

                        <p className="mt-3 text-sm text-gray-400 sm:text-xl">
                            Twelve lifts covering every major muscle group.
                        </p>
                    </div>
                </div>

                {/* Error */}
                {error && (
                    <div className="flex min-h-48 flex-col items-center justify-center gap-4 text-center">
                        <p className="text-sm font-semibold text-red-400">{error}</p>
                        <button
                            onClick={loadWorkouts}
                            className="flex items-center gap-2 rounded-xl bg-[#CCFF00] px-4 py-2 text-xs font-extrabold uppercase text-black transition hover:opacity-90"
                        >
                            <RefreshCw size={14} />
                            Retry
                        </button>
                    </div>
                )}

                {/* Loading Skeletons */}
                {loading && (
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <WorkoutCardSkeleton key={i} />
                        ))}
                    </div>
                )}



                {/* Workout Card */}
                {!loading && !error && workouts.length > 0 && (
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {workouts.map((workout) => (
                            <WorkoutCard key={workout.id} workout={workout} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}