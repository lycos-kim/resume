import React from "react"

type CardProps = React.HTMLAttributes<HTMLDivElement>

export default function Card({ className = "", children, ...props }: CardProps) {
  return (
    <div className={`bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 p-6 ${className}`} {...props}>
      {children}
    </div>
  )
}
