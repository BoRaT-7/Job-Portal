const Services = () => {
  return (
     <section className="py-16 bg-base-100">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary">
            🐾 আমাদের পেট সার্ভিসসমূহ
          </h2>
          <p className="mt-4 text-base-content/70 max-w-2xl mx-auto">
            আমরা আপনার প্রিয় পোষা প্রাণীর যত্নে সর্বোচ্চ মানের সেবা প্রদান করি।
            আমাদের লক্ষ্য আপনার পোষা প্রাণীকে সুস্থ, সুখী এবং নিরাপদ রাখা।
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Grooming */}
          <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition">
            <div className="card-body text-center">
              <h3 className="card-title justify-center text-primary">
                ✂️ গ্রুমিং সার্ভিস
              </h3>
              <p className="text-base-content/70">
                আমাদের বিশেষজ্ঞ গ্রুমাররা আপনার পোষা প্রাণীর চুল কাটা,
                পরিষ্কার ও স্টাইলিং সেবা প্রদান করে। এতে আপনার পোষা প্রাণী
                থাকবে সতেজ ও আরামদায়ক।
              </p>
            </div>
          </div>

          {/* Veterinary */}
          <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition">
            <div className="card-body text-center">
              <h3 className="card-title justify-center text-primary">
                🏥 ভেটেরিনারি সেবা
              </h3>
              <p className="text-base-content/70">
                নিয়মিত স্বাস্থ্য পরীক্ষা, টিকা এবং জরুরি চিকিৎসা সেবা
                আমরা প্রদান করি। আপনার পোষা প্রাণীর সুস্বাস্থ্য আমাদের অঙ্গীকার।
              </p>
            </div>
          </div>

          {/* Pet Boarding */}
          <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition">
            <div className="card-body text-center">
              <h3 className="card-title justify-center text-primary">
                🏠 পেট বোর্ডিং
              </h3>
              <p className="text-base-content/70">
                আপনি বাইরে গেলে আমাদের নিরাপদ ও আরামদায়ক পরিবেশে
                আপনার পোষা প্রাণী থাকবে সম্পূর্ণ যত্নে ও ভালোবাসায়।
              </p>
            </div>
          </div>

          {/* Training */}
          <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition">
            <div className="card-body text-center">
              <h3 className="card-title justify-center text-primary">
                🎓 পেট ট্রেনিং
              </h3>
              <p className="text-base-content/70">
                পেশাদার ট্রেনার দ্বারা আপনার পোষা প্রাণীকে আচরণগত
                ও সামাজিক প্রশিক্ষণ প্রদান করা হয়।
              </p>
            </div>
          </div>

          {/* Pet Food */}
          <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition">
            <div className="card-body text-center">
              <h3 className="card-title justify-center text-primary">
                🥗 প্রিমিয়াম পেট ফুড
              </h3>
              <p className="text-base-content/70">
                উন্নত মানের ও পুষ্টিকর খাবার সরবরাহ করি যা আপনার
                পোষা প্রাণীর সঠিক বৃদ্ধি ও শক্তি নিশ্চিত করে।
              </p>
            </div>
          </div>

          {/* Adoption */}
          <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition">
            <div className="card-body text-center">
              <h3 className="card-title justify-center text-primary">
                ❤️ পেট অ্যাডপশন
              </h3>
              <p className="text-base-content/70">
                পরিত্যক্ত ও আশ্রয়হীন প্রাণীদের নতুন পরিবারে
                পৌঁছে দেওয়ার জন্য আমরা কাজ করি।
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;