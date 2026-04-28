import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import bg1 from "../../assets/PaymentForm/taylor-kopel-WX4i1Jq_o0Y-unsplash.jpg";
import bg2 from "../../assets/PaymentForm/zoe-gayah-jonker-G7kUPmzi80E-unsplash.jpg";

const PaymentForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const food = location.state?.food;
const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    paymentMethod: "Bkash",
    transactionId: "",
  });

  const [quantity, setQuantity] = useState(1);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleQuantity = (type) => {
    setQuantity((prev) =>
      type === "decrease" ? Math.max(1, prev - 1) : prev + 1
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!food) {
      toast.error("No product selected ❌");
      return;
    }

    const paymentData = {
      ...formData,
      productName: food.name,
      productCategory: food.category,
      productImage: food.image,
      unitPrice: food.price,
      quantity,
    };

    try {
      setLoading(true);

      const response = await fetch("http://localhost:5000/api/payments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentData),
      });

      let data;
      try {
        data = await response.json();
      } catch (err) {
        throw new Error("Invalid server response");
      }

      if (!response.ok) {
        toast.error(data.error || "Payment failed ❌", {
          position: "top-center",
        });
        return;
      }

      if (data.success) {
        setSuccess(true);

        setFormData({
          name: "",
          phone: "",
          address: "",
          paymentMethod: "Bkash",
          transactionId: "",
        });

        setTimeout(() => {
          navigate("/");
        }, 2000); // ⬅️ slightly safer delay for toast visibility
      } else {
        toast.error("Payment failed ❌", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Server error ❌", {
        position: "top-center",
      });
    } finally {
      setLoading(false);
    }
  };

  if (!food) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">No product selected 😢</p>
      </div>
    );
  }

  const totalCost = (food.price * quantity).toFixed(2);

  return (
    <div className="min-h-screen flex items-center justify-center relative p-4 bg-gray-50">
      <img src={bg1} className="absolute inset-0 w-full h-full object-cover opacity-20" />
      <img src={bg2} className="absolute inset-0 w-full h-full object-cover opacity-20" />

      <div className="relative bg-white rounded-3xl shadow-2xl max-w-5xl w-full grid md:grid-cols-2 overflow-hidden">

        {/* LEFT */}
        <div className="bg-pink-50 p-8 flex flex-col items-center gap-4">
          <h2 className="text-3xl font-bold text-pink-600">🐾 Checkout</h2>

          <img src={food.image} className="w-44 h-44 object-cover rounded-2xl shadow" />

          <h3 className="text-xl font-semibold">{food.name}</h3>
          <p className="text-gray-600">{food.category}</p>
          <p className="text-lg font-medium">${food.price}</p>

          <div className="flex items-center gap-4">
            <button onClick={() => handleQuantity("decrease")} className="px-3 py-1 bg-pink-500 text-white rounded-lg">-</button>
            <span className="font-bold">{quantity}</span>
            <button onClick={() => handleQuantity("increase")} className="px-3 py-1 bg-pink-500 text-white rounded-lg">+</button>
          </div>

          <p className="text-2xl font-bold text-pink-500">
            Total: ${totalCost}
          </p>
        </div>

        {/* RIGHT */}
        <div className="p-8">
          <h2 className="text-2xl font-bold text-center mb-6">
            Payment Details
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} className="w-full p-3 border rounded-xl" />

            <input type="tel" name="phone" placeholder="Enter your number" pattern="01[0-9]{9}" required value={formData.phone} onChange={handleChange} className="w-full p-3 border rounded-xl" />

            <textarea name="address" placeholder="Your Address" required value={formData.address} onChange={handleChange} className="w-full p-3 border rounded-xl" />

            <div className="flex gap-4 flex-wrap">
              {["Bkash", "Nogod", "Rocket"].map((method) => (
                <label key={method} className={`px-4 py-2 border rounded-lg cursor-pointer ${formData.paymentMethod === method ? "bg-pink-100 border-pink-500" : ""}`}>
                  <input type="radio" name="paymentMethod" value={method} checked={formData.paymentMethod === method} onChange={handleChange} className="hidden" />
                  {method}
                </label>
              ))}
            </div>

            <div className="p-3 bg-yellow-50 border rounded-xl text-sm">
              {formData.paymentMethod === "Bkash" && "Send to 01754862489 (Bkash)"}
              {formData.paymentMethod === "Nogod" && "Send to 01962584371 (Nogod)"}
              {formData.paymentMethod === "Rocket" && "Send to 01854211690 (Rocket)"}
            </div>

            <input name="transactionId" placeholder="Transaction ID" required value={formData.transactionId} onChange={handleChange} className="w-full p-3 border rounded-xl" />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-pink-500 text-white py-3 rounded-xl hover:bg-pink-600 transition"
            >
              {loading ? "Processing..." : "Confirm Payment 💳"}
            </button>

          </form>
        </div>
      </div>
      {success && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
    <div className="bg-white w-[90%] md:w-1/3 p-8 rounded-2xl shadow-2xl text-center animate-bounce">

      <div className="text-5xl mb-3">🎉</div>

      <h2 className="text-2xl font-bold text-green-600">
        Payment Successful
      </h2>

      <p className="text-gray-500 mt-2">
        Your payment has been submitted successfully.
      </p>

      <button
        onClick={() => navigate("/")}
        className="mt-5 bg-green-500 text-white px-6 py-2 rounded-xl hover:bg-green-600"
      >
        Go Home
      </button>

    </div>
  </div>
)}
    </div>
  );
};

export default PaymentForm;