const Tour = (props) => {
  return (
    <div
      key={props.id}
      className="bg-gray-200 flex items-center border gap-20 p-2 border-black"
    >
      <img
        className="w-44 h-20 object-cover rounded-xl"
        src={props.image}
        alt={props.image}
        />
        <div className=" w-[70%]  ">
      <h2 className="py-4 text-xl font-semibold">{props.name}</h2>
      <p className="pb-4 ">{props.info}</p>
      <p className="text-2xl font-bold">For only {props.price}$</p>
        </div>
    </div>
  );
};

export default Tour;
