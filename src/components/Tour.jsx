const Tour = (props) => {
  return (
    <div key={props.id} className="p-4 bg-gray-200 flex flex-col justify-between">
      <img
        src={props.image}
        alt={props.image}
        className="w-96 h-60 items-center object-cover rounded-xl"
      />
      <h2 className="py-4 text-xl font-semibold">{props.name}</h2>
      <p className="pb-4">{props.info}</p>
      <p className="text-2xl font-bold">For only {props.price}$</p>
    </div>
  );
};

export default Tour;
