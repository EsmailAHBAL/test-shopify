import type { FC } from "react"
import CollectionC from "./collectionsC"

const AllCollectioins :FC<{collections: [{title:string,total:number}]}> = ({collections}) => {
  return (
   <div className={`grid grid-cols-1  md:grid-cols-${collections.length} gap-x-3 gap-y-3 w-full select-none`}>
     
    {
     collections.map((c,i)=> (
      <div className="w-full" key={c.title}>
    
        <CollectionC  c={c}/>
      </div>
     ))
    }
   </div>
  )
}
export default AllCollectioins