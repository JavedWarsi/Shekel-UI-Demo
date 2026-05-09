"use client";

import { typography } from "@/tokens/design-tokens";
import Image from "next/image";

export default function EarningsBottomCTA() {
  return (
    <div
      className="w-full relative rounded-t-[48px] overflow-hidden h-[600px] py-16 md:py-24 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between"
      style={{
        fontFamily: typography.fonts.inter,
        backgroundImage: "url('/section-8-about/cta-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="relative z-10 ml-20 text-center flex justify-center items-center flex-col center mx-auto max-w-[600px] text-center md:text-center mb-12 md:mb-0">
        <h2 className="text-[40px] md:text-[56px] font-medium text-[#0b0b0b] leading-[1.1] tracking-tight mb-6" style={{ fontFamily: typography.fonts.poppins }}>
          Ready To Cash Out<br />Your Earnings?
        </h2>

        <p className="text-[22px] text-[#475569] leading-[1.6] mb-10 max-w-[500px]">
          Transfer your available balance securely to your bank account.
        </p>

        <button className="px-12 py-4 rounded-[20px] text-white font-medium text-[15px] shadow-[0_8px_30px_rgba(81,125,245,0.4)] transition-transform hover:scale-105"
          style={{ background: "linear-gradient(180deg, #6B93FF 0%, #A2BFFF 100%)" }}
        >
          Withdraw Now
        </button>
      </div>

      <div className="relative z-20 mt-80 flex-shrink-0 w-[300px] md:w-[450px] h-[300px] md:h-[450px]">
        <Image
          src="/section-18/ctabottab.png"
          alt="3D Character"
          fill
          className="object-contain scale-[2.5]"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      </div>
    </div>
  );
}
