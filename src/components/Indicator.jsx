import Header from './Header'

export default function Indicator({ scroll, setContactMeOpen, contactMe, setProjectsOpen, projectsOpen}) {
  
  return (
    <>
      <Header
        setContactMeOpen={setContactMeOpen}
        contactMe={contactMe}
        setProjectsOpen={setProjectsOpen}
        projectsOpen={projectsOpen}
      />
      {scroll ? null : (
        <div className=" z-1 w-screen h-screen flex justify-center">
          <p className="absolute top-[85%] text-gray-400 text-3xl animate-[wiggle_2s_linear_0s_infinite_reverse]">
            .
          </p>
          <p className="absolute top-[86%] text-gray-500 text-3xl animate-[wiggle_2s_linear_0.1s_infinite_reverse]">
            .
          </p>
          <p className="absolute top-[87%] text-gray-600 text-3xl animate-[wiggle_2s_linear_0.2s_infinite_reverse]">
            .
          </p>
          <p className="absolute top-[91%] font-sans font-medium">Scroll</p>
        </div>
      )}
    </>
  );
}