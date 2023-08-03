import type { z } from "zod"
import type { ProductResult } from "../utils/schemas"
import type { FC } from "react"

type Props = {
 product : z.infer<typeof ProductResult>
}
const ProductsR  : FC<Props>= ({product}) => {
  return (
   <div className="w-full">
   <div className="flex  flex-col items-center justify-center w-full max-w-sm mx-auto text-black">
    <div className=" border-[1px] border-black p-3  w-full h-64 bg-white my-3 bg-center bg-cover rounded-sm shadow-md" >
      <img src={product?.featuredImage.url} className="object-cover object-center w-full h-full"/>
    </div>

    <div className="w-56 -mt-10 overflow-hidden rounded-lg  shadow-lg md:w-64 ">
        <h3 className="py-2 font-bold tracking-wide text-center bg-white 
         text-black border-2 border-yellow-200 border-b-0  uppercase dark:text-black text-xs ">Nike Revolt</h3>

        <div className="flex items-center justify-between px-3 py-2  border-2 border-t-0  z-10 bg-white border-black">
            <span className="font-bold  ">{JSON.stringify('')}</span>
            <button className="text-sm px-4 py-3 group inline-flex items-center text-gray-700 
            border-black border-[1px] hover:border-gray-800">Shop Now<svg className="flex-shrink-0 w-4 h-4 ml-3 undefined undefined group-hover:translate-x-1 transition-transform duration-500 ease-in" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"></path></svg></button>
        </div>
    </div>
</div>
   </div>
  )
}

export default ProductsR