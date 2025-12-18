"use client"
import React from "react"

type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export default function Input({ className = "", ...props }: InputProps) {
  const classes = `w-full rounded-xl border border-slate-200 bg-white dark:bg-slate-900 px-4 py-2 text-sm text-slate-700 dark:text-slate-200 placeholder:text-slate-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-300 ${className}`
  return <input className={classes} {...props} />
}
