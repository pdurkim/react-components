import className from "classnames";

const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) => {
  const classes = className(
    rest.className,
    "flex items-center gap-1 px-5 py-3 border text-2xl",
    {
      "rounded-lg": rounded,
      "bg-white": outline,
      "border-indigo-600": primary || secondary,
      "bg-indigo-600 text-white": primary && !outline,
      "text-indigo-600": (primary && outline) || secondary,
      "border-indigo-400": success,
      "bg-indigo-400 text-white": success && !outline,
      "text-indigo-400": success && outline,
      "border-amber-600": warning,
      "bg-amber-600 text-white": warning && !outline,
      "text-amber-600": warning && outline,
      "border-red-700": danger,
      "bg-red-700 text-white": danger && !outline,
      "text-red-700": danger && outline,
    }
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        "Only one of primary, secondary, success, warning, danger can be true"
      );
    }
  },
};

export default Button;
