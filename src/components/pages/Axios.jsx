import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Axios = () => {

  const [Images, setImages] = useState([])

  
  const getImages = async () => {
    try {
      const response = await axios.get("https://picsum.photos/v2/list");
      const data = response.data;
      console.log(data);
      setImages(data);
    } catch (error) {
      console.error("Error while fetching images! ");
    }
  }

  return (
    <div className='container my-3'>
      <div className='my-5 text-center'>
        <button className='btn btn-outline-success btn-block m-4 mb-0 px-5' onClick={getImages}>
          Fetch Image</button></div>
      <div className="py-5">
        {Images.map((element, index) => {
          return <img
         key={index}
         src={element.download_url}
         width={360}
         height={300}
         className='m-1 p-1'
       />
        })}
      </div>
    </div>
  )
}

export default Axios