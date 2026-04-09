import React, { useState } from "react";
import toast from "react-hot-toast";
import catImg from "../../assets/Adopt-from/cute-cat-relaxing-indoors-removebg-preview.png";
import dogImg from "../../assets/Adopt-from/Dog.png";

export default function AdoptForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   toast.success("Adoption Request Submitted Successfully! 🎉");

  //   setFormData({
  //     name: "",
  //     email: "",
  //     phone: "",
  //     address: "",
  //   });
  // };

  const handleSubmit = async (e) =>{
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/adoptions",
        {
          method:"POST",
          headers:{
            "Content-Type": "application/json",
          },
          body:JSON.stringify(formData),
        });
        const data = await res.json();
        if(data.insertedId){
          toast.success("Adoption Request Submitted Successfully! 🎉");
          setFormData({
            name:"",
            email:"",
            phone:"",
            address:"",
          });
        }
    } catch (error){
      console.error(error);
      toast.error("Error submitting form ❌");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-50 to-purple-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-3xl overflow-hidden max-w-5xl w-full grid md:grid-cols-2">
        
        {/* Left Image Section */}
        <div className="bg-pink-100 flex flex-col items-center justify-center p-8 relative">
          <h2 className="text-3xl font-bold text-pink-600 mb-4 text-center">
            🐾 Find Your Best Friend
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Give a loving home to a pet and make a lifelong companion.
          </p>

          <div className="flex items-end gap-4">
            <img
              src={catImg}
              alt="Cute Cat"
              className="w-40 drop-shadow-xl"
            />
            <img
              src={dogImg}
              alt="Dog"
              className="w-40 drop-shadow-xl"
            />
          </div>
        </div>

        {/* Right Form Section */}
        <div className="p-10">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Adoption Form
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-400 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-400 outline-none"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-400 outline-none"
            />

            <textarea
              name="address"
              placeholder="Your Address"
              value={formData.address}
              onChange={handleChange}
              required
              rows="3"
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-400 outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-3 rounded-xl hover:bg-pink-600 transition duration-300 shadow-lg"
            >
              Submit Adoption Request 🐾
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}