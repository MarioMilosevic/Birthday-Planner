const Tour = (props) => {
  return (
    <div key={props.id}>
      <img src={props.image} alt={props.image} className="w-96 items-center" />
      <h2>{props.name}</h2>
      <p>{props.info}</p>
      <p>{props.price}</p>
    </div>
  );
};

export default Tour;
