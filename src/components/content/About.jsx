
export default function About()
{


return (
  <>
    <article className=" flex justify-center gap-7 flex-wrap md:flex-nowrap columns-2">
      <img
        className="top-1/2 h-1/2 min-h-52 min-w-52 w-1/2 md:h-1/4 md:w-1/4 lg:mb-4 object-fill rounded-lg gap-8 shadow-2xl"
        src={"/pictures/portfolio_pic.jpeg"}></img>
      <section className="m-4 mb-10  min-w-52  max-w-xl text-left">
        <h1 className="text-xl">
          <p className="font-medium">Hello and Welcome to my portfolio! 👋</p>{" "}
          <br></br>
          My name is Alexandra, I am based in Berlin, Germany, but originally
          come from Slovakia. I am a Front-End Developer that enjoys creating 3D
          Web Experiences. For my 3D projects, I use pure Three.js/React Three
          Fiber, and custom made shaders written in GLSL.
        </h1>
        <br></br>
        <h2 className="text-base">
          <p>WebGL JavaScript React Three.js R3F GLSL</p>
          <p>Tailwind GSAP Blender - UV unwrapping and texture baking</p>
          <p>MongoDB Node.js Express</p>
        </h2>
        <br></br>
        <div className="flex gap-3">
          <a
            href="https://www.linkedin.com/in/alexandra-vasinova-819178195/"
            className=" bg-gray-100 rounded-xl p-1 shadow-md hover:bg-gray-200">
            LinkedIn
          </a>
          <a
            href="https://github.com/AlexaVas"
            className=" bg-gray-100 rounded-xl p-1 shadow-md hover:bg-gray-200">
            GitHub
          </a>
        </div>
      </section>
    </article>
  </>
);}