import React from 'react';
import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-neutral-950 px-4 text-center text-white">
            <h1 className="text-6xl font-black tracking-widest text-[#ccff00] sm:text-9xl">
                404
            </h1>

            <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-4xl">
                Page Not Found
            </h2>

            <p className="mt-2 max-w-md text-sm text-neutral-400 sm:text-base">
                Sorry, we couldn’t find the page you’re looking for. It might have been removed, renamed, or never existed.
            </p>

            <div className="mt-8">
                <Link href="/" className="inline-block rounded-lg bg-[#ccff00] px-6 py-3 text-sm font-semibold text-black">
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;