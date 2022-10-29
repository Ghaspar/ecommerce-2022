import { useRouter } from 'next/router'

export default function Produto() {
  const router = useRouter()
  const productID = router.query.id;

  return (
      <>
        produto - {productID}
      </>
  )
}
