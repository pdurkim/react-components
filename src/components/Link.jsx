import classNames from "classnames";
import useNavigation from "../hooks/useNavigation";

const Link = ({ to, children, className, activeClassName }) => {
  const { navigate, currentPath } = useNavigation();

  const classes = classNames(
    "text-indigo-600",
    className,
    currentPath === to && activeClassName
  );

  const handleClick = (event) => {
    if (event.metakey || event.ctrlKey) {
      return;
    }
    event.preventDefault();

    navigate(to);
  };
  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;
