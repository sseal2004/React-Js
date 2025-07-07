 import React from "react"
 
 function Card({country,money}){
 

console.log(country)


  return (
    <>
 {/* Div class for row starting here  */}
    <div className="flex flex-row justify-center items-start gap-6 p-6 flex-wrap">
        {/* Card 1 */}
        <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
          <img
            src="https://images.pexels.com/photos/1191090/pexels-photo-1191090.jpeg"
            alt="Example"
            width="300"
            height="250"
            className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
          />
          <div className="mt-6 mb-2">
            <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
              {country}
            </span>
            <h2 className="text-xl font-semibold tracking-wide">{money}</h2>
          </div>
          <p className="text-gray-300">
            Is your name Google? Because you’ve got everything I’ve been searching for
          </p>
        </div> 

        {/* Card 2 */}
        <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
          <img
            src="https://images.pexels.com/photos/7738041/pexels-photo-7738041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Example"
            width="300"
            height="250"
            className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
          />
          <div className="mt-6 mb-2">
            <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
              Russian
            </span>
            <h2 className="text-xl font-semibold tracking-wide">$800</h2>
          </div>
          <p className="text-gray-300">
            Are you a campfire? Because you're hot and I want s'more.
          </p>
        </div> 
         {/* Card 3 */}
        <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
          <img
            src="https://r2.erweima.ai/imgcompressed/compressed_7cdc3c3a876a51080ff18a1de850703c.webp"
            alt="Example"
            width="300"
            height="250"
            className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
          />
          <div className="mt-6 mb-2">
            <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
              Indian
            </span>
            <h2 className="text-xl font-semibold tracking-wide">$500</h2>
          </div>
          <p className="text-gray-300">
            "Are you sitting on the F5 key? Because your body is refreshing."
          </p>
        </div> 
       
            {/* Div class for row closing here  */}
      </div>
      </>
  )
 }
 export default Card