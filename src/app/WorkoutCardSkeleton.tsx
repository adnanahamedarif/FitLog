export default function WorkoutCardSkeleton() {
  return (
    <div className="card overflow-hidden rounded-2xl border border-white/10 bg-[#111318]">
      {/* Skeleton Image */}
      <div className="relative h-52 w-full animate-pulse bg-[#191B20]" />

      <div className="card-body gap-4 p-5">
        {/* Skeleton Badges */}
        <div className="flex flex-wrap gap-2">
          <div className="h-5 w-14 animate-pulse rounded-md bg-white/10" />
          <div className="h-5 w-12 animate-pulse rounded-md bg-white/10" />
        </div>

        {/* Skeleton Workout Name */}
        <div className="space-y-2 py-1">
          <div className="h-5 w-3/4 animate-pulse rounded bg-white/10" />
          <div className="h-5 w-1/2 animate-pulse rounded bg-white/10" />
        </div>

        {/* Skeleton Equipment */}
        <div className="h-4 w-1/3 animate-pulse rounded bg-white/10" />

        <div className="divider my-0 opacity-10" />

        {/* Skeleton Stats Footer */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="h-4 w-16 animate-pulse rounded bg-white/10" />
          <div className="h-4 w-16 animate-pulse rounded bg-white/10" />
          <div className="h-4 w-12 animate-pulse rounded bg-white/10" />
        </div>
      </div>
    </div>
  );
}