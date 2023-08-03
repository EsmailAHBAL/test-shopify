export const ByCollections = (T:any [],by:string) => {
 const data = T.filter((p:any)=> {
   
  const res =  p.collections.find((i:any)=> i.title === by )
  if(!res)return
  return p
  })
  return data
}
export const getAllCollections = (c:any) => {
  const res =c.map((collection:any)=>({title:collection.node.title,total:collection.node.products.edges.length}) )
  return res
}