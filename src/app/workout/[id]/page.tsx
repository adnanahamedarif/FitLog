"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Plus, Bookmark, } from "lucide-react";

import type { Workout } from "@/app/Types/types";
import { getWorkoutById } from "@/app/utils/api";
import WorkoutDetailsSkeleton from "@/app/WorkoutDetailsSkeleton"
import NotFound from "@/app/not-found";
import { usePlan } from "@/app/context/PlanContext";
import { Suspense } from "react";
function WorkoutDetailsContent() {
    const params = useParams();
    const router = useRouter();

    const id = params.id as string;

    const [workout, setWorkout] = useState<Workout | null>(null);
    const [loading, setLoading] = useState(true);

    const { addToPlan, addToSaved } = usePlan();

    useEffect(() => {
        async function loadWorkout() {
            try {
                const data = await getWorkoutById(id);
                setWorkout(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        loadWorkout();
    }, [id]);

    if (loading) {
        return <WorkoutDetailsSkeleton />;
    }

    // Error screen
    if (!workout) {
        return (
            <NotFound />
        );
    }

    return (
        <div className="min-h-screen bg-[#0A0A0A] px-4 py-10 text-white sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">

                <button
                    onClick={() => router.back()}
                    className="mb-8 flex items-center gap-2 text-sm text-gray-400 transition hover:text-[#CCFF00]"> <ArrowLeft size={18} /> Back to Library
                </button>

                <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">

                    {/*Workout Image */}
                    <div className="flex h-[500px] items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-[#151515]">
                        <img
                            src={workout.image}
                            alt={workout.name}
                            className="h-full w-full object-cover"
                        />
                    </div>



                    {/*Workout Information */}
                    <div>
                        <h1 className="text-3xl font-black uppercase leading-tight sm:text-4xl">
                            {workout.name}
                        </h1>

                        <p className="mt-2 text-sm leading-relaxed text-gray-400 sm:text-base">
                            {workout.description}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                            {workout.muscleGroups.map((muscle) => (
                                <span key={muscle} className="rounded-full  bg-[#CCFF00] px-3 py-1 text-xs font-bold uppercase text-black" >
                                    {muscle}
                                </span>
                            ))}
                        </div>


                        <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-[#1E2330]">
                            <div className="flex items-center justify-between border-b border-white/5 px-5 py-3.5 text-xs">
                                <span className="font-medium text-gray-400">EQUIPMENT</span>
                                <span className="font-bold text-white">{workout.equipment}</span>
                            </div>
                            <div className="flex items-center justify-between border-b border-white/5 px-5 py-3.5 text-xs">
                                <span className="font-medium text-gray-400">DIFFICULTY</span>
                                <span className="font-bold text-white">{workout.difficulty}</span>
                            </div>
                            <div className="flex items-center justify-between border-b border-white/5 px-5 py-3.5 text-xs">
                                <span className="font-medium text-gray-400">SETS</span>
                                <span className="font-bold text-white">{workout.sets}</span>
                            </div>
                            <div className="flex items-center justify-between border-b border-white/5 px-5 py-3.5 text-xs">
                                <span className="font-medium text-gray-400">REPS</span>
                                <span className="font-bold text-white">{workout.reps}</span>
                            </div>
                            <div className="flex items-center justify-between border-b border-white/5 px-5 py-3.5 text-xs">
                                <span className="font-medium text-gray-400">DURATION</span>
                                <span className="font-bold text-white">{workout.duration} min</span>
                            </div>
                            <div className="flex items-center justify-between border-b border-white/5 px-5 py-3.5 text-xs">
                                <span className="font-medium text-gray-400">CALORIES</span>
                                <span className="font-bold text-white">{workout.caloriesBurned} kcal</span>
                            </div>
                            <div className="flex items-center justify-between px-5 py-3.5 text-xs">
                                <span className="font-medium text-gray-400">RATING</span>
                                <span className="font-bold text-white">{workout.rating}</span>
                            </div>
                        </div>


                        {/* Instructions */}
                        <div className="mt-8">
                            <h3 className=" font-bold text-xl">
                                INSTRUCTIONS
                            </h3>

                            <div className="mt-4 space-y-3">
                                {workout.instructions.map((instruction, index) => (
                                    <div key={index} className="flex items-start gap-3 text-sm text-gray-300" >
                                        {index + 1}.
                                        <p className="leading-relaxed">{instruction}</p>
                                    </div>
                                ))}
                            </div>
                        </div>




                        {/* Buttons */}
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                            <button
                                onClick={() => addToPlan(workout)}
                                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#CCFF00] px-5 py-3.5 text-sm font-black text-black transition hover:bg-[#DFFF4F]" >
                                <Plus size={18} />
                                Add to today's plan
                            </button>

                            <button
                                onClick={() => addToSaved(workout)}
                                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/15 px-5 py-3.5 text-sm font-bold text-white transition hover:border-[#CCFF00] hover:text-[#CCFF00]" >
                                <Bookmark size={16} />
                                Save for later
                            </button>

                        </div>


                    </div>
                </div>

            </div>
        </div>
    );
}

export default function WorkoutDetailsPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center">Loading workout...</div>}>
      <WorkoutDetailsContent />
    </Suspense>
  );
}