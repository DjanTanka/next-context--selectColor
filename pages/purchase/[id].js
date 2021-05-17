import {useRouter} from 'next/router'

function Pursh() {
  const router = useRouter()
  return (
    <>
    <h1>Я - purshase {router.query.id}</h1>
  </>
  )
}

export default Pursh;
