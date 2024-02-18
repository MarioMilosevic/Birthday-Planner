const ClearButton = ({ handleClear }) => {
  return (
    <button
      onClick={handleClear}
      className="rounded-3xl bg-gray-300 px-8 py-4 mt-4 font-semibold text-xl"
    >
      Clear All
    </button>
  );
};

export default ClearButton;
