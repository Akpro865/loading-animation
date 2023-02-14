import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Post from './Post'

export default function Posts(){
 const [category, setCategory] = useState(null)

 const navigate = useNavigate()
 
 useEffect(()=>{
  const getData = async()=>{
   const { data } = await axios.get(`https://api.api-ninjas.com/v1/facts?limit=10`, {
   	headers: {
   	 'X-Api-Key': '3Y8GlPtg0Gpv23qjPZlMlg==hw4DF0pyUSkcaRwj'
   	}
   })

   setCategory(data)
   console.log(data)
  }

  getData() 
 }, [])

 let content;
 
 return (
  <>
  <h1 className='text-4xl flex justify-center py-8'>Random Facts</h1>
  <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
   {
   	category ? category.map((category, i)=>(
   	 <div key={i} className='p-3 m-2 rounded-xl bg-white h-40'>
   	  <h2 className='py-0.5 text-[20px] font-medium flex justify-center'>fact - {i + 1}</h2>
   	  <p className='text-[17px] text-gray-700'>{category.fact.substring(0,150)}</p>
   	 </div>
   	)) : (
   		content = [...Array(10).keys()].map(i=>{
   			return <Post key={i}/>
   		})
   	)
   	
   }
  </section>
  <span onClick={()=>navigate('/lazy')} className='py-8 bg-green-500 rounded-[7px] py-2 my-2 px-5 flex cursor-pointer justify-center'>Lazy load</span>
  </>
 )
}