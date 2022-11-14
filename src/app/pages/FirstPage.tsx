import React, { useEffect } from 'react'
import { json } from 'stream/consumers'
import { useGetAllProductsQuery } from '../store/RTKQuery'

const FirstPage = () => {

  const { isLoading, data, error } = useGetAllProductsQuery('hello')

  useEffect(()=>{
    console.log("First Page Rendered")
    console.log({isLoading,data,error})
  })
  return (
    <div>
      {isLoading && <h1>Loading ...</h1>}
      {data && (
        <h1>
          {Object.values(data.products).map((item: any) => {
            return <div key={item.id}>{item.title}</div>  
          })}
        </h1>
      )}
      {error && <h1>{JSON.stringify(error)}</h1>}
    </div>
  )
}

export default FirstPage
