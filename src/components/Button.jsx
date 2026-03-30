export const Button = ({ icon, text, onClickHandler }) => {
  return (
    <button
      onClick={onClickHandler}
      className="cursor-pointer text-xs md:text-lg flex items-center justify-center gap-1 px-4 py-2 rounded-md bg-neutral-700  hover:bg-neutral-800 active:scale-96"
    >
      {icon}
      {text}
    </button>
  );
};
