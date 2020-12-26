import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { database } from '../config'

const Post = () => {
  const router = useRouter();
  const [data, setData] = useState(null);
  const { pid } = router.query;

  useEffect(async () => {
    await database.ref().once('value').then((snapshot) => {
      let data = snapshot.val()
      Object.keys(data).forEach((key) => key == pid ? setData(data[key]) : setData('Not found'))
    })
  }, [])

  return (
    <>
      {data ? <p>Value: {data}</p> : <p>Value: Loading</p>}
    </>
  )
}

export default Post
