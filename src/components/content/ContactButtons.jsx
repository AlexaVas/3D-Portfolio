export default function ContactButtons (){












return (
  <>
    <div className="w-full h-full  py-10 px-6 gap-10 flex flex-col justify-center items-center">
      <h1 className="text-center text-xl font-semibold text-black">
        Get in Touch
      </h1>
      <p className="md:w-1/2 text-md text-left">
        Excited to bring ideas to life? Let’s connect! Whether it’s a creative
        project or a collaboration, I’d love to hear from you. Reach out and
        let’s make it happen!
      </p>
      <section className="flex flex-col gap-6 justify-center items-center bg-gray-50 p-4 w-1/2 min-w-fit  rounded-md shadow-lg">
        <div className="text-center space-y-3">
          <h2 className="text-lg font-medium text-black">
            Reach out to me on LinkedIn
          </h2>
          <button className="px-6 py-2 text-black bg-blue-300 rounded-2xl shadow-md hover:bg-blue-200 transition-all duration-300">
            <a href="https://www.linkedin.com/in/alexandra-vasinova-819178195/">
              Connect on LinkedIn
            </a>
          </button>
        </div>

        <p className="text-sm font-medium text-gray-500">OR</p>

        <div className="text-center space-y-3">
          <h2 className="text-lg font-medium text-black">
            Book an Appointment{" "}
          </h2>
          <button className="px-6 py-2 text-black bg-purple-300 rounded-2xl shadow-md hover:bg-purple-200 transition-all duration-300">
            <a href="https://calendly.com/alexandra-vasinova/morphio">
              {" "}
              Book Now
            </a>
          </button>
        </div>
      </section>
    </div>
  </>
);
}