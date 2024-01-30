/** @format */
import { useState, useRef, useEffect } from "react";
export default function Projects() {

    const [filter, setFilter] = useState([])
    const [threeD, setThreeD] = useState(false);
    const [twoD, setTwoD] = useState(false);
    
  
  const [projects, setProjects] = useState([
    {
      key: 1,
      name: "Barkly",
      description: "Full-Stack Application",
      technologies: ["JS", "Node.js", "React", "Tailwind", "MongoDb"],
      img: "/pictures/Barkly.jpg",
      dimension: "2D",
    },
    {
      key: 2,
      name: "Summer in the Garden",
      description: "Web-based Game",
      technologies: ["JS", "CSS"],
      img: "/pictures/Summer_in_the_garden.jpg",
      dimension: "2D",
    },
    {
      key: 3,
      name: "3D Portfolio",
      description: "3D Portfolio - Alexandra V.",
      technologies: ["JS", "R3F"],
      img: "/pictures/3D-Portfolio.jpg",
      dimension: "3D",
    },
    {
      key: 4,
      name: "Haunted House",
      description: "Three.js experience",
      technologies: ["JS", "Three.js"],
      img: "/pictures/HH 3D.jpg",
      dimension: "3D",
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
      <div className="flex flex-row gap-3 m-5">
        <button
          onClick={() => handleClick("3D")}
          className={`rounded-2xl p-2 text-xs shadow-sm font-bold bg-gray-100 ${
            threeD ? "bg-gray-200" : "bg-none"
          } hover:bg-gray-200`}>
          3D
        </button>
        <button
          onClick={() => handleClick("2D")}
          className={`rounded-2xl shadow-sm bg-gray-100 p-2 text-xs font-bold ${twoD?'bg-gray-200':'bg-none'} hover:bg-gray-200`}>
          2D
        </button>
      </div>

      <div className="flex flex-row gap-5 flex-wrap justify-center items-center pb-10 ">
        {(filter.length > 0 ? filter : projects).map((project) => (
          <div className="text-center m-3" key={project.key}>
            <img
              className="w-64 h-64 object-cover hover:object-scale-down hover:shadow-none rounded  shadow-md"
              src={
                project.img ? project.img : "/pictures/3D-Portfolio.jpg"
              }></img>
            <h1 className="text-xl m-1">{project.name}</h1>
          </div>
        ))}
      </div>
    </>
  );
}
