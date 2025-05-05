import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "w-full bg-transparent outline-none text-sm placeholder:text-gray-400",
        className
      )}
      {...props}
    />
  )
}

export { Input }
