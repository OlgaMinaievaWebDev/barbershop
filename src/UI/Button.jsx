function Button({ children, onClick, type="button" }) {
  return (
    <button
      type="type"
      onClick={onClick} // Add the onClick here
      className="z-20 text-accent border-none rounded-md px-6 py-3 text-xl font-bold bg-white mt-8 cursor-pointer hover:bg-accent hover:text-white transition-all shadow-md"
    >
      {children}
    </button>
  );
}

export default Button;
