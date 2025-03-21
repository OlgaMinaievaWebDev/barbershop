function CardItem({ item }) {
  const { name, duration, price, image, barber } = item;
  return (
    <li className="flex flex-col gap-2 shadow-lg rounded-lg text-center">
      <img
        src={image}
        alt={name}
        className="w-full object-cover h-[20vh] mb-4 opacity-70"
      />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p>{duration} min</p>
      <p className="text-sm text-accent">{barber}</p>
      <p className="text-sm mb-3 ">${price}</p>
    </li>
  );
}

export default CardItem;
