export default function About() {
  return (
    <div className="bg-base-100">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-primary mb-6">
            🐾 About PetCare
          </h1>
          <p className="text-lg text-base-content/80">
            We are passionate about providing the best care, love, and
            services for your beloved pets. Our mission is to ensure every
            pet lives a happy, healthy, and safe life.
          </p>
        </div>
      </section>
      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
          <div className="bg-base-200 p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-primary mb-4">
              🎯 Our Mission
            </h2>
            <p className="text-base-content/70">
              Our mission is to deliver high-quality pet services including
              grooming, veterinary care, adoption, and premium pet food.
              We aim to build a trusted platform where pet owners can find
              everything they need for their furry friends.
            </p>
          </div>
          <div className="bg-base-200 p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-primary mb-4">
              🌟 Our Vision
            </h2>
            <p className="text-base-content/70">
              We envision a world where every pet receives proper care,
              attention, and love. Through innovation and compassion,
              PetCare strives to become a leading pet service platform.
            </p>
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-16 bg-base-200">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-12">
            ❤️ Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-base-100 p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-3">
                🐶 Expert Team
              </h3>
              <p className="text-base-content/70">
                Our experienced professionals ensure top-quality
                care and safety for your pets.
              </p>
            </div>
            <div className="bg-base-100 p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-3">
                🏥 Complete Services
              </h3>
              <p className="text-base-content/70">
                From grooming to medical care and adoption,
                we offer everything in one place.
              </p>
            </div>
            <div className="bg-base-100 p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-3">
                ⭐ Trusted & Reliable
              </h3>
              <p className="text-base-content/70">
                Thousands of happy pet owners trust us
                for reliable and loving pet services.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Call To Action */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold text-primary mb-6">
          Ready to Give Your Pet the Best Care?
        </h2>
        <p className="text-base-content/70 mb-8">
          Join PetCare today and explore our premium services.
        </p>
        <button className="btn btn-primary px-8 hover:scale-105 transition">
          Get Started
        </button>
      </section>
    </div>
  );
}