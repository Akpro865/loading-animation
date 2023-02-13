import profile from '../assets/profile.jpg'
import '../App.css'

export default function Post(){
  return (
  	<div className='m-2 bg-white rounded-xl shadow p-2'>
  	 <div className='flex items-center'>
  	  <div className='skeleton w-12 h-12 rounded-full object-cover'></div>  	  
  	  <div className='w-[95%] pl-3'>
  	  	<p className='skeleton-text skeleton'></p>
  	  	<p className='skeleton-text skeleton'></p>
  	  </div>
  	 </div>
  	 <div className='py-3'>
  	  <p className='skeleton-text skeleton'></p>
  	  <p className='skeleton-text skeleton'></p>
  	  <p className='skeleton-text skeleton'></p>
  	  <p className='skeleton-text skeleton'></p>
  	 </div>
  	</div>
  )
}
