const Tour = ({ id, image, price, info }) => {
  return (
    <article key={id} className=" gap-20 p-2 w-[560px]">
      <img
        className="h-[550px] w-full object-cover rounded-2xl p-2"
        src={image}
        alt={image}
      />
      <div>
        <h2 className="py-4 px-2 text-xl font-semibold">{name}</h2>
        <p className="pb-4 px-2">{info}</p>
        <p className="text-2xl font-bold">For only {price}$</p>
      </div>
    </article>
  );
};

export default Tour;
