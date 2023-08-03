import * as React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { ProductResult } from "../utils/schemas";
import ProductCard from "./ProductCard.astro";
import { z } from "zod";

const ProductsResult = z.array(ProductResult);
export interface Props {
  products: z.infer<typeof ProductsResult>;
}
export const  Slider=({products}:Props) =>{
  const [ref] = useKeenSlider<HTMLDivElement>({
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 10 },
      },
    },
    slides: { perView: 1 },
  })
  return (
    <div ref={ref} className="keen-slider">
              {products.map((product:any) => (
               <div className="" key={product.id}>hello</div>
              ))}

    
    </div>
  )
}
export default Slider