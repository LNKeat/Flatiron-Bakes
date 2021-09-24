import React, { useState } from 'react'


function Form({ handleAddCake }){
  const [newPigData, setNewPigData] = useState({
    flavor:"",
    image:"",
    price:"",
    size:"",
    description:"",
  })

  function handleChange(e){
    setNewPigData({
      ...newPigData,
      [e.target.name] : e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    handleAddCake(newPigData)

  }
  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="flavor" name="flavor" type="text" value={newPigData.flavor} onChange={handleChange} />
      <input placeholder="description" name="description" type="text" value={newPigData.description} onChange={handleChange} />
      <input placeholder="image" name="image" type="text" value={newPigData.image} onChange={handleChange} />
      <input placeholder="price" name="price" type="text" value={newPigData.price} onChange={handleChange} />
      <input placeholder="size" name="size" type="text" value={newPigData.size} onChange={handleChange} />
      <input type="submit" value="Add Cake" />
    </form>
  )
}


export default Form