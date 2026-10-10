import Link from "next/link";
import { Clock3, Flame, Star } from "lucide-react";
import type { Workout } from "@/app/Types/types";

export default function WorkoutCard({ workout,}: { workout: Workout;}) {
  return (
    <Link href={`/workout/${workout.id}`} className="group card overflow-hidden rounded-2xl border border-gray-800 bg-[#111318] hover:border-[#CCFF00]">
      
      <div className="relative h-52 overflow-hidden bg-[#191B20]">
        <img
          src={workout.image}
          alt={workout.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500"
        />
      </div>

      <div className="card-body gap-4 p-5">
        <div className="flex flex-wrap gap-2">
          {workout.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="badge rounded-md border-none bg-[#CCFF00] px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Workout Name */}
        <h3 className="min-h-12 text-lg font-black uppercase leading-6 text-white">
          {workout.name}
        </h3>

        <p className="truncate text-sm text-gray-400">
          {workout.equipment}
        </p>

        <div className="divider my-0 opacity-10"/>

        <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-gray-200">
          <span className="flex items-center gap-1.5">
            <Clock3 size={15} className="text-[#CCFF00]" />
            {workout.duration} min
          </span>

          <span className="flex items-center gap-1.5">
            <Flame size={15} className="text-[#CCFF00]" />
            {workout.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1.5">
            <Star size={15} className="text-[#CCFF00]" />
            {workout.rating}
          </span>
        </div>
      </div>
    </Link>
  );
}