interface Props {
  children: React.ReactNode;
  isDisabled?: boolean;
  variant?: "primary" | "secondary" | "danger" | "action";
  type?: "button" | "submit" | "reset";
  onClick: () => void;
}

export default function Button({
  children,
  isDisabled = false,
  variant = "primary",
  type = "button",
  onClick,
}: Props) {
  function getVariantClass() {
    switch (variant) {
      case "primary":
        return "btn-primary";
      case "secondary":
        return "btn-secondary";
      case "danger":
        return "btn-danger";
      case "action":
        return "btn-action";
    }
  }

  return (
    <button
      className={`btn ${getVariantClass()}`}
      onClick={onClick}
      disabled={isDisabled}
      type={type}
    >
      {children}
    </button>
  );
}
