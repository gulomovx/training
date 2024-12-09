import React, { useState } from 'react'
import products from '../data/Products.json'
const List = () => {
  const [images, setImages] = useState(products)
  console.log(images?.products);

  // const likes = (id) => {
  //   const updatedImages = images.products.map((img) => {
  //     if (id == img.id) {
  //       return { ...img, likes: img.likes + 1 }

  //     } else {
  //       return img
  //     }

  //   })
  //   setImages({ ...images, products: updatedImages }); 
  // }

  // const disLikes = (id) => {
  //   const updatedImages = images.products.map((img) => {
  //     if (id == img.id) {
  //       return { ...img, dislikes: img.dislikes + 1 }

  //     } else {
  //       return img
  //     }

  //   })
  //   setImages({ ...images, products: updatedImages });
  // }
  // const deleteImg = (id) => {
  //   const updated=images.products.filter((img)=> id!==img.id)
  //   setImages({ ...images, products: updated });
  // }

  return (
    <div>
      <div className=" container  mx-auto mt-8 flex justify-between">
        {
          images?.products.map((img) => {
            return (
              <div key={img.id} className="">
                <img src={img.image} alt="" />
                <h1>{img.name}</h1>
                <div className="flex justify-between">
                  <button onClick={() => likes(img.id)} className='bg-slate-100 flex border-2 size-8 rounded-lg'>👍{img.likes}</button>
                  <button onClick={() => deleteImg(img.id)} className='bg-slate-100 border-2 size-8 rounded-lg'> ❌</button>
                  <button onClick={() => disLikes(img.id)} className='bg-slate-100 border-2 size-8 rounded-lg'> 😩{img.dislikes}</button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default List
