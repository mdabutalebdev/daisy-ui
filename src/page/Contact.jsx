import React from "react";

const Contact = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Contact <span className="text-indigo-600">Me</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out to
            me using the form below or the contact information provided.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-2xl p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Write your message"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Address
              </h3>
              <p className="text-gray-600">Dhaka, Bangladesh</p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600">example@gmail.com</p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Phone
              </h3>
              <p className="text-gray-600">+880 1234 567 890</p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Map</h3>
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.447642409913!2d90.41251861536223!3d23.81033139256111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7b6d3c2e9cf%3A0x7e9d90c1d9f0e4a!2sDhaka!5e0!3m2!1sen!2sbd!4v1616140330979!5m2!1sen!2sbd"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
