import { cn } from "@/lib/utils";
import React, { InputHTMLAttributes } from "react";

type InputGroupProps = {
  className?: string;
  children: React.ReactNode;
};

type InputTextProps = InputHTMLAttributes<HTMLInputElement>;

// InputGroup Component
const InputGroup = ({ className, children }: InputGroupProps) => {
  return (
    <div
      className={cn(
        "input-group focus-within:shadow-lg pl-4 transition-all relative flex items-center w-full rounded-full overflow-hidden",
        className ?? ""
      )}
    >
      {children}
    </div>
  );
};

// Input Component with displayName fix
const Input = React.forwardRef<HTMLInputElement, InputTextProps>(
  (props: InputTextProps, ref: React.Ref<HTMLInputElement>) => {
    const { className, ...rest } = props;

    return (
      <input
        className={cn(
          "input-control w-full py-3 pr-4 outline-none placeholder:font-normal placeholder:text-sm",
          className ?? ""
        )}
        autoComplete="off"
        autoCorrect="off"
        spellCheck="false"
        ref={ref}
        {...rest}
      />
    );
  }
);

// Adding displayName to resolve ESLint issue
Input.displayName = "Input";

// InputGroupText Component
const InputGroupText = ({ className, children }: InputGroupProps) => {
  return (
    <div className={cn("input-group-text mr-3", className ?? "")}>
      {children}
    </div>
  );
};

// Assign subcomponents to InputGroup
InputGroup.Text = InputGroupText;
InputGroup.Input = Input;

// Exporting the InputGroup Component
export default InputGroup;
