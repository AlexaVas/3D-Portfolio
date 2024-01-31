export default function Fallback()
{

    console.log('fallback')

return (
  <>
    <div className="bg-gray-100 w-full h-full flex items-center justify-around flex-col">
      <div className="font-sans font-medium text-xl flex ">
        <div className="flex flex-row  m-1">
          <div className="text-xl rounded-full w-[50px] h-[50px] bg-blue-100 animate-[wiggle_2s_linear_0s_infinite_reverse]">
            
          </div>
          <div className="text-xl rounded-full w-[50px] h-[50px] bg-purple-200 animate-[wiggle_2s_linear_0.1s_infinite_reverse]">
            
          </div>
          <div className="text-xl rounded-full w-[50px] h-[50px] bg-gray-200 animate-[wiggle_2s_linear_0.2s_infinite_reverse]">
            
          </div>
        </div>
      </div>
    </div>
  </>
);
}