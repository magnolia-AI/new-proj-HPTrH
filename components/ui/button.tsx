import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-75 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-brand-yellow text-white shadow-lg hover:bg-brand-yellow-dark transform hover:-translate-y-0.5 transition-all",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-brand-brown bg-brand-beige shadow-md hover:bg-brand-gold hover:text-brand-black",
        secondary:
          "bg-brand-brown text-white shadow-md hover:bg-brand-brown/80",
        ghost: "hover:bg-brand-beige hover:text-brand-black",
        link: "text-brand-yellow underline-offset-4 hover:underline",
        yellow: "bg-brand-yellow text-white shadow-lg hover:bg-brand-yellow-dark transform hover:-translate-y-0.5 transition-all",
      },
      size: {
        default: "h-10 px-5 py-2.5 rounded-lg",
        sm: "h-9 px-4 py-2 rounded-md",
        lg: "h-11 px-6 py-3 rounded-lg",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)


export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"


export { Button, buttonVariants }

