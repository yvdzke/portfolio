function Button(props) {
  const { hover, variant, children = "...", textColor, font, onClick } = props;
  return (
    <>
      <div>
        <button
          onClick={onClick}
          className={`${variant} ${hover} ${textColor} ${font}py-2 px-4 rounded-md min-w-[120px] text-center`}
        >
          {children}
        </button>
      </div>
    </>
  );
}

export default Button;
