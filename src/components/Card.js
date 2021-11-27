import React from 'react'
import Image from "next/image";

//character data being passed as prop from Home.js
const Card = ({characters}) => {
   return (
      <>
         {characters.map((character)=>{
            const {id,name,age,image} = character;
            return(
               <div key={id} className="flex items-center  mb-4">
                  <div className="mr-5" style={{fontSize: '0'}}>
                     <Image src={image} width={75} height={75} className="rounded-full shadow-md object-cover" />
                  </div>
                  <div className="">
                     <h4 className="text-primary font-bold">{name}</h4>
                     <p className="text-gray-500">{age} years old</p>
                  </div>

               </div>
            )
         })}
      </>
   )
}

export default Card


// font size 0 is needed to remove the space at the bottom of the Image component since since display block did not work https://github.com/vercel/next.js/issues/21914