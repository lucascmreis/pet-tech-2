import { forwardRef } from "react";

interface ButtonOptions {}

type Ref = HTMLButtonElement;

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  ButtonOptions;

const Button = forwardRef<Ref, ButtonProps>((props, ref) => {
  const { type = "submit", children, ...rest } = props;
  return (
    <button
      ref={ref}
      type={type}
      className="mt-6 bg-blue hover:bg-blue-dark text-white rounded-full  px-6 py-4 text-center font-body text-xl font-semibold transition-colors"
      {...rest}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
