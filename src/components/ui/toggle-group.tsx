
import * as React from "react"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
import { type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { toggleVariants, type ToggleProps } from "@/components/ui/toggle"

const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants>
>({
  size: "default",
  variant: "default",
})

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn("flex items-center justify-center gap-1", className)}
    {...props}
  >
    <ToggleGroupContext.Provider value={{ variant, size }}>
      {children}
    </ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
))

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName

interface ToggleGroupItemProps extends 
  Omit<React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item>, "value">,
  VariantProps<typeof toggleVariants> {
    value: string;
    imageSrc?: string;
    imageAlt?: string;
}

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  ToggleGroupItemProps
>(({ className, children, variant, size, imageSrc, imageAlt, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext)
  const isWithImage = !!imageSrc;

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        toggleVariants({
          variant: isWithImage ? "withImage" : context.variant || variant,
          size: isWithImage ? "withImage" : context.size || size,
        }),
        className
      )}
      {...props}
    >
      {imageSrc && (
        <img 
          src={imageSrc} 
          alt={imageAlt || "Toggle image"} 
          className="w-full h-auto max-h-12 object-cover rounded-md mb-1" 
        />
      )}
      {children}
    </ToggleGroupPrimitive.Item>
  )
})

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName

export { ToggleGroup, ToggleGroupItem }
