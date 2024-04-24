import {React,useState} from 'react'
//this is created for use of shopkeeper not for user
const Addproduct = () => {
  const[name,setName]=useState('')
  const[id,setId]=useState('')
  const[price,setPrice]=useState('')

  async function addproduct(event){
    event.preventDefault();
    const response = await fetch('http://localhost:4000/addproduct',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({name,price,id})
    })

  }
  return (
  
    <div>Addproduct LIST
      <form onSubmit={addproduct}>
        <div className="bg-blue-500">
        <div>
          <input
          className="mb-4 bg-gray-500"
          value={name}
          type="text"
          onChange={(event)=>setName(event.target.value)}
          placeholder="name of the product"
          
          />
        </div>
        <div className="mb-4">
        <input className="bg-gray-600"
        value={price}
        type="text"
        onChange={(e)=>(setPrice(e.target.value))}
        placeholder='price'
        />
       
        </div>
        <div>
          <input
          className="bg-green-300"
          value={id}
          type="number"
          onChange={(e)=>(setId(e.target.value))}
          placeholder='product id'
          />
        </div>
        </div>
        <button
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            ADD PRODUCT
          </button>

      </form>

    </div>
  )
}

export default Addproduct