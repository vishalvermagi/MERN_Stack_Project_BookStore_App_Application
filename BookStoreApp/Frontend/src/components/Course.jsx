import React, { useEffect, useState } from 'react'
import Cards from './Cards';
import axios from "axios";
import { Link } from 'react-router-dom';
function Course() {
         const [book,setbook]=useState([]);
         useEffect(()=>{
          const getBook=async()=>{
            try {
            const res=   await axios.get("http://localhost:4001/book");
            console.log(res.data);
            setbook(res.data);
            } catch (error) {
              console.log(error);
            }
          }
          getBook();
         },[])

   
  return (
     <>
     <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white'>
      <div className='py-28 items-center justify-center text-center'>
        <h1 className='text-2xl  md:text-4xl '> We're 
             delighted to have you <span className='text-pink-500'>here! : )
                </span></h1>
       <p className='mt-12'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Dolores quam id praesentium eveniet quae, esse obcaecati quod quo, 
       aspernatur assumenda rem doloremque culpa asperiores tenetur dignissimos
        voluptatem pariatur eum excepturi! Non error maxime vero eveniet?
         Omnis molestiae suscipit incidunt maiores corrupti. Voluptatem quod
          
          quos dolorum, fugit tenetur unde, expedita, deserunt architecto nihil
   inventore 
      dolorum quaerat porro similique quam at.
       </p>
       <Link to="/">
       <button className='mt-6 bg-pink-500 text-white px-4 py-2 
       rounded-md hover:bg-pink-700 duration-300'> back</button>
       </Link>
     
      </div>
       <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        {
            book.map((item)=>{
                return <Cards key={item.id} item= {item}/>
            })
           
        }
       </div>
     </div>
     
     </>
  )
}

export default Course;
