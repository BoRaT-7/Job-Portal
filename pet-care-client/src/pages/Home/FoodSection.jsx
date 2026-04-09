import petfood1 from "../../assets/petfood/petfood.jpg";
import petfood2 from "../../assets/petfood/petfood2.jpg";
import { Link, useNavigate } from "react-router-dom";
const petFoods = [
  { id: 1, name: "Premium Dog Food", category: "Dog", image: petfood1, price: 1200 },
  { id: 2, name: "Healthy Puppy Meal", category: "Dog", image: petfood2, price: 1500 },
  { id: 3, name: "Organic Cat Food", category: "Cat", image: petfood1, price: 1100 },
  { id: 4, name: "Kitten Growth Formula", category: "Cat", image: petfood2, price: 1300 },
  { id: 5, name: "Bird Nutri Mix", category: "Bird", image: petfood1, price: 900 },
  { id: 6, name: "Parrot Special Seeds", category: "Bird", image: petfood2, price: 1000 },
];

const FoodSection = () => {
  const navigate = useNavigate();

  const handleBuyNow = (food) => {
    // PaymentForm.jsx-এ food পাঠানো হচ্ছে
    navigate("/payment", { state: { food } });
  };

  return (
    <section className="py-6 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl text-center font-bold text-gray-800 mb-3">
          🍖 Healthy Pet Food
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-6">
          Provide your beloved pets with premium, nutritious food designed to keep them healthy, active, and happy. 
          Treat your furry friends with the nutrition they deserve!
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {petFoods.map((food) => (
            <div
              key={food.id}
              className="bg-gray-50 rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition duration-300 hover:-translate-y-2"
            >
              <img
                src={food.image}
                alt={food.name}
                className="h-56 w-full object-cover hover:scale-110 transition duration-500"
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800">
                  {food.name}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  High-quality nutrition for your lovely pets.
                </p>

                <p className="text-lg font-bold text-primary mt-3">
                  ৳ {food.price}
                </p>

                <button
                  onClick={() => handleBuyNow(food)}
                  className="btn btn-primary w-full mt-4 hover:scale-105 transition duration-300"
                >
                Add to Cart 🛒
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/petfood">
            <button className="btn btn-primary px-8 hover:scale-105 transition">
              See All Food →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FoodSection;