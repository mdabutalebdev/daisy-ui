import React from 'react'

const About = () => {
  return (
    <div> 
      <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            About <span className="text-indigo-600">Me</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I’m a passionate Frontend Developer with experience in building
            modern, responsive, and interactive web applications using React and
            Tailwind CSS. I love learning new technologies and solving real-world
            problems through clean, efficient code.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src="https://avatars.githubusercontent.com/u/178189613?s=400&u=e5f5d3981c9ac95274d31b93134b4a766f33acef&v=4"
              alt="About"
              className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Right Text */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Who am I?
            </h3>
            <p className="text-gray-600 mb-6">
              I am a dedicated developer with a strong focus on frontend
              technologies. My journey started with HTML, CSS, and JavaScript,
              and now I specialize in React.js and Tailwind CSS to craft
              user-friendly digital experiences.
            </p>

            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
                <h4 className="text-lg font-semibold text-indigo-600 mb-2">
                  Experience
                </h4>
                <p className="text-gray-600 text-sm">
                  1+ years of building and deploying frontend projects.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
                <h4 className="text-lg font-semibold text-indigo-600 mb-2">
                  Skills
                </h4>
                <p className="text-gray-600 text-sm">
                  React.js, Next.js, Tailwind CSS, JavaScript, REST API
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
                <h4 className="text-lg font-semibold text-indigo-600 mb-2">
                  Projects
                </h4>
                <p className="text-gray-600 text-sm">
                  Worked on hotel booking, restaurant, and e-commerce apps.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
                <h4 className="text-lg font-semibold text-indigo-600 mb-2">
                  Contact
                </h4>
                <p className="text-gray-600 text-sm">
                  Email: example@gmail.com <br /> Location: Bangladesh
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default About