"use client";

import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        html,
        body {
          margin: 0;
          padding: 0;
        }

        .nf-root {
          min-height: 100vh;
          width: 100%;
          background: linear-gradient(
            145deg,
            #ffffff 0%,
            #e8efff 35%,
            #c8d8ff 65%,
            #b0c4ff 100%
          );
          font-family: 'Plus Jakarta Sans', sans-serif;
          overflow: hidden;
          position: relative;
          display: flex;
          align-items: center;
        }

        .nf-root::after {
          content: '';
          position: absolute;
          bottom: -10%;
          right: -5%;
          width: 65vw;
          height: 65vw;
          background: radial-gradient(
            circle,
            rgba(99, 132, 255, 0.22) 0%,
            transparent 70%
          );
          pointer-events: none;
        }

        /* Layout */
        .nf-inner {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 56px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          min-height: 100vh;
        }

        /* Left */
        .nf-left {
          width: 42%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 32px;
        }

        .nf-headline {
          font-size: clamp(28px, 3.6vw, 52px);
          font-weight: 800;
          color: #0d0d1a;
          line-height: 1.15;
          letter-spacing: -0.03em;
          margin: 0;
        }

        .nf-description {
          font-size: 16px;
          line-height: 1.7;
          color: #4b5563;
          max-width: 520px;
          margin: 0;
        }

        /* Buttons */
        .nf-btns {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .nf-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 48px;
          padding: 0 26px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          transition:
            transform 0.18s ease,
            box-shadow 0.18s ease,
            filter 0.18s ease;
          white-space: nowrap;
        }

        .nf-btn:hover {
          transform: translateY(-2px);
        }

        .nf-btn:active {
          transform: translateY(0);
        }

        .nf-btn-purple {
          background: linear-gradient(
            135deg,
            #b39dfa 0%,
            #7c4dff 100%
          );
          color: #fff;
          box-shadow: 0 4px 16px rgba(124, 77, 255, 0.38);
        }

        .nf-btn-purple:hover {
          filter: brightness(1.05);
          box-shadow: 0 8px 24px rgba(124, 77, 255, 0.45);
        }

        .nf-btn-dark {
          background: #111827;
          color: #fff;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.22);
        }

        .nf-btn-dark:hover {
          background: #1f2937;
        }

        /* Right */
        .nf-right {
          width: 80%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          margin-left: -20px;
        }

        .nf-img-wrap {
          position: relative;
          width: 100%;
          max-width: 660px;
          animation: nf-float 5.5s ease-in-out infinite;
        }

        .nf-chip {
          position: absolute;
          background: rgba(255, 255, 255, 0.82);
          border-radius: 3px;
          pointer-events: none;
          animation: nf-drift linear infinite;
        }

        /* Animations */
        @keyframes nf-float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }

          30% {
            transform: translateY(-16px) rotate(0.6deg);
          }

          60% {
            transform: translateY(-8px) rotate(-0.4deg);
          }
        }

        @keyframes nf-drift {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.75;
          }

          60% {
            opacity: 1;
          }

          100% {
            transform: translateY(-64px) rotate(200deg);
            opacity: 0;
          }
        }

        /* Responsive */
        @media (max-width: 860px) {
          .nf-inner {
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 56px 28px 40px;
            gap: 48px;
          }

          .nf-left {
            width: 100%;
            align-items: center;
            text-align: center;
          }

          .nf-right {
            width: 100%;
            justify-content: center;
          }

          .nf-btns {
            justify-content: center;
          }

          .nf-img-wrap {
            max-width: 420px;
          }
        }

        @media (max-width: 480px) {
          .nf-inner {
            padding: 48px 20px 32px;
          }

          .nf-img-wrap {
            max-width: 320px;
          }
        }
      `}</style>

            <div className="nf-root">
                <div className="nf-inner">

                    {/* Left */}
                    <div className="relative z-50 nf-left w-[50%]">

                        <h1 className="nf-headline">
                            404
                            <br />
                            Page does not exist or has been moved.
                        </h1>

                        <p className="nf-description">
                            The page you are looking for might have been removed,
                            renamed, or is temporarily unavailable.
                        </p>

                        <div className="nf-btns">

                            <Link href="/" className="nf-btn nf-btn-purple">
                                Go to Homepage
                            </Link>

                            <Link href="/agents" className="nf-btn nf-btn-dark">
                                Explore Agents
                            </Link>

                        </div>
                    </div>

                    {/* Right */}
                    <div className="nf-right h-full w-[50%]">

                        {/* Floating chips */}
                        {[
                            {
                                top: "14%",
                                left: "22%",
                                w: "12px",
                                h: "12px",
                                delay: "0s",
                                dur: "4s",
                            },
                            {
                                top: "8%",
                                left: "52%",
                                w: "9px",
                                h: "9px",
                                delay: "1.3s",
                                dur: "3.6s",
                            },
                            {
                                top: "58%",
                                left: "8%",
                                w: "8px",
                                h: "8px",
                                delay: "0.6s",
                                dur: "4.8s",
                            },
                            {
                                top: "72%",
                                left: "78%",
                                w: "13px",
                                h: "13px",
                                delay: "2.1s",
                                dur: "3.9s",
                            },
                            {
                                top: "82%",
                                left: "46%",
                                w: "10px",
                                h: "10px",
                                delay: "1.7s",
                                dur: "5.2s",
                            },
                            {
                                top: "40%",
                                left: "92%",
                                w: "7px",
                                h: "7px",
                                delay: "0.9s",
                                dur: "4.3s",
                            },
                        ].map((c, i) => (
                            <span
                                key={i}
                                className="nf-chip"
                                style={{
                                    top: c.top,
                                    left: c.left,
                                    width: c.w,
                                    height: c.h,
                                    animationDelay: c.delay,
                                    animationDuration: c.dur,
                                }}
                            />
                        ))}

                        {/* Image */}
                        <div className="nf-img-wrap">
                            <Image
                                src="/404.png"
                                alt="404 astronaut illustration"
                                width={960}
                                height={880}
                                priority
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    objectFit: "contain",
                                    filter:
                                        "drop-shadow(0 28px 56px rgba(80,110,230,0.16))",
                                }}
                            />
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}