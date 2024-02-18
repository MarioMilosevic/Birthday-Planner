const Tour = (props) => {
  return (
    <div
      key={props.id}
      className=" gap-20 p-2 w-[560px]"
    >
      <img
        className="h-[550px] w-full object-cover rounded-xl"
        src={props.image}
        alt={props.image}
        />
        <div>
      <h2 className="py-4 text-xl font-semibold">{props.name}</h2>
      <p className="pb-4 ">{props.info}</p>
      <p className="text-2xl font-bold">For only {props.price}$</p>
        </div>
    </div>
  );
};

export default Tour;
