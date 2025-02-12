/** @format */
import { useState, useRef, useEffect } from "react";
export default function Projects() {

    const [filter, setFilter] = useState([])
    const [threeD, setThreeD] = useState(false);
    const [twoD, setTwoD] = useState(false);
    
  
  const [projects, setProjects] = useState([
    {
      key: 12,
      name: "Ring Configurator",
      description: "Configurator",
      technologies: ["React", "Typescript", "Three.js", "Blender"],
      img: "/pictures/Config_Phone.jpg",
      dimension: "3D",
      link: "https://jewellery-configurator.vercel.app/",
    },
    {
      key: 7,
      name: "Hyven - Customer",
      description: "3D World",
      technologies: ["R3F", "React", "GLSL"],
      img: "/pictures/hyven.jpg",
      dimension: "3D",
      link: "https://hyven.vercel.app/",
    },
    {
      key: 8,
      name: "Business Website - Customer",
      description: "Business Website",
      technologies: ["NextJS", "PHP", "Headless CMS", "SEO"],
      img: "/pictures/aliaj.jpeg",
      dimension: "2D",
      link: "https://aliajevent.com/",
    },
    {
      key: 9,
      name: "Framer Plugin",
      description: "Framer Plugin - Blob",
      technologies: ["GLSL", "Typescript", "React", "Express"],
      img: "/pictures/plugin.jpg",
      dimension: "3D",
      link: "https://www.framer.com/marketplace/plugins/blob/",
    },
    {
      key: 10,
      name: "AR Project",
      description: "AR Project - Bilby",
      technologies: ["WebXR", "Three.js", "VanillaJS"],
      img: "/pictures/ar.jpg",
      dimension: "3D",
      link: "https://ar-bilby.vercel.app/",
    },
    {
      key: 11,
      name: "Face Blurring Editor",
      description: "AR Project - Bilby",
      technologies: ["WebXR", "Three.js", "VanillaJS", "360"],
      img: "/pictures/360.jpg",
      dimension: "3D",
      link: "https://face-blurring.vercel.app/",
    },
    {
      key: 1,
      name: "Barkly",
      description: "Full-Stack Application",
      technologies: ["JS", "Express", "React", "Tailwind", "MongoDb"],
      img: "/pictures/Barkly.jpg",
      dimension: "2D",
      link: "https://barkly-pups.netlify.app/",
    },
    {
      key: 2,
      name: "Summer in the Garden",
      description: "Web-based Game",
      technologies: ["JS", "CSS"],
      img: "/pictures/Summer_in_the_garden.jpg",
      dimension: "2D",
      link: "https://alexavas.github.io/Module1_Final_Project/",
    },
    {
      key: 3,
      name: "3D Portfolio",
      description: "3D Portfolio - Alexandra V.",
      technologies: ["JS", "R3F"],
      img: "/pictures/3D-Portfolio.jpg",
      dimension: "3D",
      link: "",
    },
    {
      key: 4,
      name: "Haunted House",
      description: "Three.js experience",
      technologies: ["JS", "Three.js"],
      img: "/pictures/HH 3D.jpg",
      dimension: "3D",
      link: "https://three-js-haunted-house-gold.vercel.app/",
    },
    {
      key: 5,
      name: "Portal Scene",
      description: "WebGL experience",
      technologies: ["GLSL", "Three.js"],
      img: "/pictures/Portal_Scene.jpg",
      dimension: "3D",
      link: "https://portal-scene-six.vercel.app/",
    },
    {
      key: 6,
      name: "2D Portfolio",
      description: "WebGL experience",
      technologies: ["JS", "CSS", "Animations"],
      img: "/pictures/2D_Portfolio.jpg",
      dimension: "2D",
      link: "https://alexavas.github.io/Portfolio/",
    },
  ]);


  const handleClick = ((type)=>{

    if (type === "3D"){

        if(threeD){

            setFilter([]);
            setThreeD(false);
            setTwoD(false);
           
        }else{

        setFilter(projects.filter((project)=> project.dimension ==='3D'))
        setThreeD(true)
        twoD&&setTwoD(false)
            
        }
           

    }
    else if(type === "2D"){

        if(twoD){
            setFilter([])
            setThreeD(false);
            setTwoD(false);
           
        }else{

            setFilter(projects.filter((project) => project.dimension === "2D"));
        setTwoD(true)
        threeD&&setThreeD(false);
        
        }
            
    }

    
    

  })


  return (
    <>
      <div className="flex flex-row gap-3 m-5 ">
        <button
          onClick={() => handleClick("3D")}
          className={`rounded-full p-2 text-md shadow-sm font-bold bg-gray-100 transition-all duration-300 ${
            threeD ? "bg-gray-200" : "bg-none"
          } hover:bg-gray-200`}>
          3D
        </button>
        <button
          onClick={() => handleClick("2D")}
          className={`rounded-full shadow-sm bg-gray-100 p-2 text-md font-bold transition-all duration-300${
            twoD ? "bg-gray-200" : "bg-none"
          } hover:bg-gray-200`}>
          2D
        </button>
      </div>

      <div className="flex  flex-row gap-5 flex-wrap justify-center items-center pb-10">
        {(filter.length > 0 ? filter : projects).map((project) => (
          <div
            className="text-center flex flex-col justify-center items-center space-y-3 "
            style={{ width: "350px", height: "380px" }} // Uniform size
          >
            <div
              className="text-center  overflow-hidden rounded hover:shadow-gray-500  transition-shadow shadow-md shadow-gray-300"
              key={project.key}>
              <a href={project.link}>
                <img
                  className="w-64 h-64 object-cover hover:scale-110  transition-all duration-500"
                  alt={project.description}
                  src={
                    project.img ? project.img : "/pictures/3D-Portfolio.jpg"
                  }></img>
              </a>
            </div>
            <h1 className="text-xl">{project.name}</h1>
            <article className="flex gap-3 text-sm flex-row flex-wrap w-full relative  justify-center ">
              {project.technologies.map((tech, i) => {
                return (
                  <p className="bg-gray-100 rounded-xl p-1 shadow-md ">
                    {tech}
                  </p>
                );
              })}
            </article>
          </div>
        ))}
      </div>
    </>
  );
}
