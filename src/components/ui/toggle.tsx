
import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
        withImage:
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground flex flex-col p-1 gap-1",
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5",
        withImage: "min-h-[5rem] min-w-[5rem] p-1",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface ToggleProps extends React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root>,
  VariantProps<typeof toggleVariants> {
  imageSrc?: string;
  imageAlt?: string;
}

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  ToggleProps
>(({ className, variant, size, imageSrc, imageAlt, children, ...props }, ref) => {
  const isWithImage = !!imageSrc;
  
  return (
    <TogglePrimitive.Root
      ref={ref}
      className={cn(toggleVariants({ 
        variant: isWithImage ? "withImage" : variant, 
        size: isWithImage ? "withImage" : size
      }), className)}
      {...props}
    >
      {imageSrc && (
        <span className="inline-block w-full">
          <img 
            src={imageSrc} 
            alt={imageAlt || "Toggle image"} 
            className="w-full h-auto max-h-12 object-cover rounded-md mb-1" 
          />
        </span>
      )}
      <span className="inline-block">
        {children}
      </span>
    </TogglePrimitive.Root>
  );
})

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }
export type { ToggleProps }
