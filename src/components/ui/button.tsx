import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "secondary" | "hero" | "ghost" | "link" | "warm";
  size?: "default" | "sm" | "lg" | "xl" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", asChild = false, children, ...props }, ref) => {
    
    const baseClasses = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-base font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
    
    const variantClasses: Record<string, string> = {
      default: "bg-[#3D7A5A] text-white hover:bg-[#3D7A5A]/90 shadow-md",
      outline: "border-2 border-[#3D7A5A] bg-transparent text-[#3D7A5A] hover:bg-[#3D7A5A] hover:text-white",
      secondary: "bg-[#F5E6D3] text-[#2D3B2D] hover:bg-[#F5E6D3]/80",
      hero: "bg-[#3D7A5A] text-white hover:scale-105 shadow-lg hover:shadow-xl rounded-full",
      ghost: "hover:bg-[#F5E6D3] hover:text-[#2D3B2D]",
      link: "text-[#3D7A5A] underline-offset-4 hover:underline",
      warm: "bg-[#E9C46A] text-[#2D3B2D] hover:bg-[#E9C46A]/90 shadow-md",
    };
    
    const sizeClasses: Record<string, string> = {
      default: "h-12 px-6 py-3",
      sm: "h-10 rounded-md px-4",
      lg: "h-14 rounded-xl px-8 text-lg",
      xl: "h-16 rounded-2xl px-10 text-xl",
      icon: "h-10 w-10",
    };
    
    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
    
    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement<{ className?: string }>, {
        className: classes,
        ref,
        ...props,
      });
    }
    
    return (
      <button className={classes} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
