import React from 'react';

const LoanCardSkeleton = () => {
    return (
        <div className="mx-auto">
            {/* Container matches the w-96 and rounded-2xl of your original card */}
            <div className="card h-full w-96 bg-white/5 backdrop-blur-md border border-white/10 shadow-lg rounded-2xl overflow-hidden">

                {/* Figure Skeleton (Image Area) */}
                <div className="w-full h-56 bg-white/10 animate-pulse" />

                <div className="card-body space-y-4">
                    {/* Title Skeleton */}
                    <div className="h-7 w-3/4 bg-white/20 rounded-md animate-pulse" />

                    {/* Description Skeleton (Three lines) */}
                    <div className="space-y-2">
                        <div className="h-4 w-full bg-white/10 rounded animate-pulse" />
                        <div className="h-4 w-5/6 bg-white/10 rounded animate-pulse" />
                    </div>

                    {/* Stats Skeletons */}
                    <div className="space-y-3 pt-2">
                        <div className="h-5 w-1/2 bg-orange-500/20 rounded animate-pulse" />
                        <div className="h-5 w-2/3 bg-orange-500/20 rounded animate-pulse" />
                    </div>

                    {/* Button Skeleton */}
                    <div className="card-actions justify-end mt-4">
                        <div className="h-12 w-32 bg-white/10 rounded-md animate-pulse" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoanCardSkeleton;