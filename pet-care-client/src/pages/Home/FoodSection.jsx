import { Link, useNavigate } from "react-router-dom";

const petFoods = [
  {
    id: 1,
    name: "Premium Dog Food",
    category: "Dog",
    image:
      "https://images.unsplash.com/photo-1583511655826-05700442b31b?q=80&w=1200&auto=format&fit=crop",
    price: 1200,
  },
  {
    id: 2,
    name: "Healthy Puppy Meal",
    category: "Dog",
    image:
      "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?q=80&w=1200&auto=format&fit=crop",
    price: 1500,
  },
  {
    id: 3,
    name: "Organic Cat Food",
    category: "Cat",
    image:
      "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=1200&auto=format&fit=crop",
    price: 1100,
  },
  {
    id: 4,
    name: "Kitten Growth Formula",
    category: "Cat",
    image:
      "https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=1200&auto=format&fit=crop",
    price: 1300,
  },
  {
    id: 5,
    name: "Bird Nutri Mix",
    category: "Bird",
    image:
      "https://images.unsplash.com/photo-1444464666168-49d633b86797?q=80&w=1200&auto=format&fit=crop",
    price: 900,
  },
  {
    id: 6,
    name: "Parrot Special Seeds",
    category: "Bird",
    image:
      "https://images.unsplash.com/photo-1522926193341-e9ffd686c60f?q=80&w=1200&auto=format&fit=crop",
    price: 1000,
  },
];

const FoodSection = () => {
  const navigate = useNavigate();

  const handleBuyNow = (food) => {
    navigate("/payment", { state: { food } });
  };

  return (
    <section className="py-6 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl text-center font-bold text-gray-800 mb-3">
          🍖 Healthy Pet Food
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-6">
          Provide your beloved pets with premium, nutritious food designed to
          keep them healthy, active, and happy.
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