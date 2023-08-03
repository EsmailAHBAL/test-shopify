import type { FC } from "react"


const CollectionC : FC<{c : {title:string,total:number}}> = ({c}) => {
 const {title,total}= c
  return (
   <div className="border-2 border-black p-2 md:p-5 border-t-0 md:border-l-0 ">
      <div className="py-4 text-3xl md:text-6xl font-extralight ">{title}</div>
      <div className="flex justify-end items-center mt-5">
       <span className="text-3xl md:text-4xl bg-black rounded-full text-white px-3">{total}</span>
      </div>
   </div>
  )
}

export default CollectionC