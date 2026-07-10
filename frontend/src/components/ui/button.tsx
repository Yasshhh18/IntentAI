import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { motion, type HTMLMotionProps } from "framer-motion"
import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
        destructive: "bg-error text-error-foreground hover:bg-error/90 shadow-sm",
        outline: "border border-outline bg-transparent hover:bg-surface-variant text-on-surface",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-surface-variant hover:text-on-surface text-on-surface-variant",
        link: "text-primary underline-offset-4 hover:underline",
        ai: "bg-surface border border-accent/20 text-accent hover:bg-accent/10 hover:border-accent/40 shadow-[0_0_15px_rgba(245,158,11,0.15)]",
        glass: "bg-surface/10 backdrop-blur-md border border-glass-border text-on-surface hover:bg-surface/20",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3 text-xs",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
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
  loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, loading, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    // We use framer-motion for micro-interactions if it's a standard button
    if (!asChild) {
      return (
        <motion.button
          whileTap={{ scale: 0.98 }}
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref as any}
          disabled={loading || props.disabled}
          {...(props as HTMLMotionProps<"button">)}
        >
          {loading ? (
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : null}
          {children}
        </motion.button>
      )
    }

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
