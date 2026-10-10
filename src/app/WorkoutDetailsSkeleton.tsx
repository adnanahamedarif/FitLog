import React from 'react';

const WorkoutDetailsSkeleton = () => {
    return (
        <div className="min-h-screen bg-[#0A0A0A] px-4 py-10 text-white sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl animate-pulse">

                {/* Back Button Skeleton */}
                <div className="mb-8 h-5 w-32 rounded bg-white/10" />

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">

                    {/* Left: Workout Image Skeleton */}
                    <div className="flex min-h-72 items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-[#151515] p-6 sm:min-h-96">
                        <div className="h-64 w-3/4 rounded-xl bg-white/5" />
                    </div>

                    {/* Right: Workout Information Skeleton */}
                    <div>
                        {/* Muscle Groups / Tags Skeleton */}
                        <div className="mb-4 flex flex-wrap gap-2">
                            <div className="h-6 w-16 rounded-full bg-white/10" />
                            <div className="h-6 w-20 rounded-full bg-white/10" />
                        </div>

                        {/* Title Skeleton */}
                        <div className="h-10 w-3/4 rounded-lg bg-white/10 sm:h-12" />

                        {/* Description Skeleton */}
                        <div className="mt-3 space-y-2">
                            <div className="h-4 w-full rounded bg-white/10" />
                            <div className="h-4 w-5/6 rounded bg-white/10" />
                        </div>

                        {/* Unified Stats Table Card Skeleton */}
                        <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-[#151515]">
                            {[...Array(7)].map((_, i) => (
                                <div
                                    key={i}
                                    className={`flex items-center justify-between px-5 py-3.5 ${
                                        i !== 6 ? "border-b border-white/5" : ""
                                    }`}
                                >
                                    <div className="h-3 w-20 rounded bg-white/10" />
                                    <div className="h-4 w-16 rounded bg-white/10" />
                                </div>
                            ))}
                        </div>

                        {/* Instructions Section Skeleton */}
                        <div className="mt-8">
                            <div className="h-3 w-28 rounded bg-white/10" />

                            <div className="mt-4 space-y-3">
                                {[...Array(4)].map((_, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="h-4 w-4 rounded bg-white/10" />
                                        <div className="h-4 w-full rounded bg-white/10" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons Skeleton */}
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <div className="h-12 flex-1 rounded-xl bg-white/15" />
                            <div className="h-12 flex-1 rounded-xl bg-white/10" />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default WorkoutDetailsSkeleton;