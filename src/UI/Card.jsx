import CardItem from "./CardItem";
import haircutImg from '../assets/haircut.jpg';
import beardTrimImg from '../assets/beard.jpg';
import buzzCutImg from '../assets/buzz.jpg';
function Card() {
  const DUMMY_PRODUCT = [
    {
      id: 1,
      image: haircutImg,
      name: "Haircut",
      duration: 60,
      price: 800,
    },
    {
     id: 2,
     image: buzzCutImg,
      name: "Buzz Cut",
      duration: 30,
      price: 500,
    },
    {
     id: 3,
     image: beardTrimImg,
      name: "Beard Trim",
      duration: 30,
      price: 400,
    },
  ];

 return (
   <div className="max-w mx-auto space-y-4 text-lg text-textGray">
     <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15">
       {DUMMY_PRODUCT.map((item) => (
         <CardItem key={item.id} item={item} />
       ))}
     </ul>
   </div>
 );
}

export default Card;
