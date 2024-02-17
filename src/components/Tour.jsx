const Tour = (props) => {
  return (
    <div key={props.id} className="border-black bg-gray-200 px-4">
      <img
        src={props.image}
        alt={props.image}
        className="w-96 h-60 items-center object-cover"
      />
      <h2 >{props.name}</h2>
      <p className="">{props.info}</p>
      <p>{props.price}</p>
    </div>
  );
};

export default Tour;
