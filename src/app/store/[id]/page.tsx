import dynamic from "next/dynamic"

const Product = dynamic( () => import("@/views/Product" ).then((mod) => mod.Product)  )
export default async function Page({
    params,
  }: {
    params: Promise<{ id : string }>
  }) {
    const id = (await params).id
    return <Product id={id} />
  }