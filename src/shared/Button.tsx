interface ButtonProps {
  id?: string;
  className: string;
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick: (...args: any[]) => void;
  type?: "button" | "submit" | "reset";
}

function Button({ id, className, children, onClick, type }: ButtonProps) {
  return (
    <button id={id} className={className} onMouseDown={onClick} type={type}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  id: undefined,
};

export default Button;
