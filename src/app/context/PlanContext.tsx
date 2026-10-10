
"use client";

import {  createContext, useContext, useState,  useEffect,} from "react";

import type { Workout, PlanWorkout } from "@/app/Types/types";
import { toast } from "react-hot-toast";

type PlanContextType = {
    plan: PlanWorkout[];
    saved: Workout[];
    addToPlan: (workout: Workout) => void;
    addToSaved: (workout: Workout) => void;
    removeFromPlan: (id: number) => void;
    removeFromSaved: (id: number) => void;
    markAsDone: (id: number) => void;
};

const PlanContext = createContext<PlanContextType | undefined>(undefined);

export function PlanProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [plan, setPlan] = useState<PlanWorkout[]>([]);
    const [saved, setSaved] = useState<Workout[]>([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const savedPlan = localStorage.getItem("fitlog-plan");
        const savedWorkouts = localStorage.getItem("fitlog-saved");

        if (savedPlan) {
            setPlan(JSON.parse(savedPlan));
        }

        if (savedWorkouts) {
            setSaved(JSON.parse(savedWorkouts));
        }

        setLoaded(true);
    }, []);

    useEffect(() => {
        if (loaded) {
            localStorage.setItem("fitlog-plan", JSON.stringify(plan));
            localStorage.setItem("fitlog-saved", JSON.stringify(saved));
        }
    }, [plan, saved, loaded]);

    function addToPlan(workout: Workout) {
        const alreadyAdded = plan.some(
            (item) => item.id === workout.id
        );

        if (alreadyAdded) {
            toast.error("Workout already in your plan!");
            return;
        }

        if (plan.length >= 5) {
            toast.error("You can add only 5 workouts!");
            return;
        }

        const newWorkout: PlanWorkout = {
            ...workout,
            isDone: false,
        };

        setPlan([...plan, newWorkout]);
        toast.success("Added to today's plan!");
    }

    function addToSaved(workout: Workout) {
        const alreadySaved = saved.some(
            (item) => item.id === workout.id
        );

        if (alreadySaved) {
            toast.error("Workout already saved!");
            return;
        }

        setSaved([...saved, workout]);
        toast.success("Saved for later!");
    }

    function removeFromPlan(id: number) {
        setPlan(plan.filter((item) => item.id !== id));
        toast.success("Workout removed from plan!");
    }

    function removeFromSaved(id: number) {
        setSaved(saved.filter((item) => item.id !== id));
        toast.success("Workout removed from saved!");
    }

    function markAsDone(id: number) {
        setPlan(
            plan.map((item) =>
                item.id === id
                    ? { ...item, isDone: true }
                    : item
            )
        );

        toast.success("Workout completed!");
    }

    return (
        <PlanContext.Provider
            value={{ plan, saved, addToPlan, addToSaved,removeFromPlan,removeFromSaved,markAsDone, }} >
            {children}
        </PlanContext.Provider>
    );
}

export function usePlan() {
    const context = useContext(PlanContext);

    if (!context) {
        throw new Error("usePlan must be used inside PlanProvider");
    }

    return context;
}
