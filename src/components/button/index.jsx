const Button = (prop) => {
  const { variant, children } = prop;
  return <button className={`${variant}`}>{children}</button>;
};

export default Button;
