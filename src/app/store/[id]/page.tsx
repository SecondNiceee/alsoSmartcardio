import { Product } from "@/views/Product"

export default async function Page({
    params,
  }: {
    params: Promise<{ id : string }>
  }) {
    const id = (await params).id
    return <Product id={id} />
  }