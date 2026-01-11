import React from 'react';

const LoaidngSpinenr = () => {
    return (
        <div className="min-h-screen bg-transparent flex flex-col items-center justify-center">
            <div className="relative flex flex-col items-center">
                
                {/* Minimalist Logo Text */}
                <div className="mb-8 overflow-hidden">
                    <h2 className="text-3xl font-black tracking-tighter flex items-center gap-1">
                        LOAN<span className="text-orange-500">LINK</span>
                        <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-ping"></span>
                    </h2>
                </div>

                {/* Modern Linear Progress Bar */}
                <div className="w-64 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
                    {/* The "Flowing" Light */}
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-data-flow"></div>
                </div>

                {/* Status Text with Shimmer */}
                <p className="mt-4 text-[10px] uppercase tracking-[0.5em] text-white/40 font-bold animate-pulse">
                    Processing Financial Data
                </p>

                {/* Background Glow (Soft) */}
                <div className="absolute -z-10 w-48 h-48 bg-orange-500/10 blur-[100px] rounded-full"></div>
            </div>

            {/* Custom Keyframes */}
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes data-flow {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                .animate-data-flow {
                    animation: data-flow 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
                }
            `}} />
        </div>
    );
};

export default LoaidngSpinenr;