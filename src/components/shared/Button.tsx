"use client";

import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion';

type ButtonProps = Omit<HTMLMotionProps<'button'>, 'children'> & {
  variant?: 'primary' | 'outline' | 'nav' | 'hero' | 'hero-primary' | 'ghost';
  children: React.ReactNode;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', children, ...props }, ref) => {
    const [mounted, setMounted] = useState(false);
    const prefersReducedMotion = useReducedMotion();

    useEffect(() => {
      setMounted(true);
    }, []);

    const shouldReduceMotion = mounted ? prefersReducedMotion : false;

    const baseClass =
      'inline-flex items-center justify-center font-sans tracking-tight transition-[color,background-color,border-color,box-shadow,transform] duration-200 ease-out disabled:pointer-events-none disabled:opacity-50';

    const variants = {
      primary:
        'bg-[linear-gradient(180deg,#2864E4_0%,#ECF2FF_100%)] font-semibold text-white text-[16px] px-[32px] py-[17px] rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(59,130,246,0.3),0px_4px_6px_-4px_rgba(59,130,246,0.2)]',
      outline:
        'bg-[#1a1f2d] border border-[rgba(255,255,255,0.2)] font-semibold text-white text-[16px] px-[33px] py-[17px] rounded-[12px] hover:bg-white/8',
      /** Home hero CTAs: outline at rest, gradient + glow on hover (both buttons match). */
      hero:
        'bg-[#14171F] border border-[rgba(255,255,255,0.15)] font-semibold text-white text-[16px] px-[32px] py-[17px] rounded-[12px]',
      'hero-primary':
        'bg-[linear-gradient(90deg,#AA8BFF_0%,#76A2FF_100%)] font-semibold text-white text-[16px] px-[32px] py-[17px] rounded-[12px] shadow-[0px_4px_24px_rgba(186,158,255,0.4)] border-none',
      nav: 'font-medium text-white text-[14px] uppercase tracking-[-0.35px] px-[24px] py-[8px] rounded-[5px]',
      ghost: '',
    };

    const navStyle =
      variant === "nav"
        ? {
            background:
              "linear-gradient(155deg, rgba(40,100,228,1) 33%, rgba(30,154,255,1) 89%, rgba(198,248,255,1) 100%)",
          }
        : {};

    return (
      <motion.button
        ref={ref}
        className={`${baseClass} ${variants[variant]} ${className}`}
        style={navStyle}
        whileHover={
          !mounted || shouldReduceMotion
            ? undefined
            : variant === 'hero'
              ? {
                  y: -3,
                  scale: 1.02,
                  borderColor: 'transparent',
                  background:
                    'linear-gradient(to right, var(--color-primary-from), var(--color-primary-to))',
                  color: 'var(--color-text-light)',
                  boxShadow:
                    '0px 12px 28px -6px rgba(186, 158, 255, 0.45), 0px 8px 20px -8px rgba(105, 156, 255, 0.35)',
                }
              : variant === 'outline'
              ? {
                  y: -3,
                  borderColor: 'transparent',
                  background:
                    'linear-gradient(to right, var(--color-primary-from), var(--color-primary-to))',
                  color: 'var(--color-text-light)',
                  boxShadow: 'none',
                }
              : variant === 'primary'
                ? {
                  y: -3,
                  scale: 1.025,
                  background: 'linear-gradient(180deg, #3974F6 0%, #FFFFFF 100%)',
                  color: '#ffffff',
                  boxShadow:
                    '0px 18px 34px -8px rgba(59, 130, 246, 0.55), 0px 8px 18px -8px rgba(59, 130, 246, 0.4)',
                }
                : {
                  y: -3,
                  scale: 1.025,
                  boxShadow:
                    '0px 18px 34px -8px rgba(186,158,255,0.5), 0px 8px 18px -8px rgba(186,158,255,0.38)',
                  filter: 'brightness(1.15)',
                }
        }
        whileTap={!mounted || shouldReduceMotion ? undefined : { scale: 0.98 }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
