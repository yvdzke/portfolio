function Button(props) {
  const { hover, variant, children, textColor, font } = props;
  return (
    <>
      <div>
        <button
          className={`${variant} ${hover} ${textColor} ${font}py-2 px-4 rounded-md transition-colors duration-300`}
        >
          {children}
        </button>
      </div>
    </>
  );
}

export default Button;
