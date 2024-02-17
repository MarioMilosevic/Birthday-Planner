const Tour = (props) => {
  return (
    <div key={props.id} className="border-black bg-gray-200 p-4">
      <img
        src={props.image}
        alt={props.image}
        className="w-96 h-60 items-center object-cover rounded-xl"
      />
      <h2 className="py-4 text-xl font-semibold">{props.name}</h2>
      <p className="">{props.info}</p>
      <p>For only {props.price}$</p>
    </div>
  );
};

export default Tour;
