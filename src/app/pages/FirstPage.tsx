import React, { useEffect } from 'react'
import { json } from 'stream/consumers'
import {
  useAddNewPostMutation,
  useGetAllProductsQuery,
} from '../store/RTKQuery'

const FirstPage = () => {
  const data1 = useGetAllProductsQuery('hello')
  const [addNewPost, response] = useAddNewPostMutation();
  useEffect(() => {
    console.log('First Page Rendered')
    console.log({ isLoading: data1.isLoading, data: data1.data, error: data1.error })
  })
  const postReq = () => {
    addNewPost({
      title: 'Some Title',
      userId:5
    }).unwrap().then((res)=>{
      console.log('res',res);
    })
  }
  return (
    <div>
      <button onClick={postReq}>Post Request</button>
      {response.isSuccess && <h1>{JSON.stringify(response)}</h1>}
      {data1.isLoading && <h1>Loading ...</h1>}
      {data1.data && (
        <h1>
          {Object.values(data1.data.products).map((item: any) => {
            return <div key={item.id}>{item.title}</div>
          })}
        </h1>
      )}
      {data1.error && <h1>{JSON.stringify(data1.error)}</h1>}
    </div>
  )
}

export default FirstPage
