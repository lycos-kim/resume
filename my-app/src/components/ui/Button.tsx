"use client"
import React from "react"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "ghost" | "primary"
}

export default function Button({ variant = "default", className = "", children, ...props }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200 ease-in-out shadow-sm hover:shadow-md"
  const variants: Record<string, string> = {
    default: "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50",
    ghost: "bg-transparent text-slate-700 hover:bg-slate-50",
    primary: "bg-indigo-600 text-white hover:brightness-110",
  }
  const classes = `${base} ${variants[variant]} ${className}`.trim()

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
