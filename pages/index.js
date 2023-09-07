import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import Intro from '../components/Intro'
import {useState,useRef} from "react"
import useSound from 'use-sound';

export default function Home() {
  const [isbook,setisbook]=useState(false)
  const [isMovie,setisMovie]=useState(false)
  const [isbeach,setisbeach]=useState(false)
  const [isMuseum,setismueseum]=useState(false)
  const [isbowl,setisbowl]=useState(false)
  const [play]=useSound('/perfect.mp3')
  const [movie,setmovie]=useState({
    rocky:false,
    jawan:false
  })
  const [beach,setbeach]=useState({
    marines:false,
    juhu:false
  })
  const [museum,setmuseum]=useState({
    cinema:false,
    history:false
  })
  const clickHandler=()=>{
    
    play()
    setisbook(true)
  }
  const movieHandler=()=>{
    setisMovie(true)
    setisbeach(false)
    setismueseum(false)
    setisbowl(false)
  }
  const beachHandler=()=>{
    setisMovie(false)
    setisbeach(true)
    setismueseum(false)
    setisbowl(false)
  }
  const museumHandler=()=>{
    setisMovie(false)
    setisbeach(false)
    setismueseum(true)
    setisbowl(false)
  }
  const bowlHandler=()=>{
    setisMovie(false)
    setisbeach(false)
    setismueseum(false)
    setisbowl(true)
  }
  const audioRef = useRef();

  const [bowl,setbowl]=useState(false)
  
  return (
    <div className='flex flex-col items-center'>
     <NavBar></NavBar>
    
     <Intro clickHandler={clickHandler}></Intro>
     {isbook && <>
     <div>
      <p className='text-lg text-pink-500'>1. What do you want to do for the day?
      </p>
      <div className='flex space-x-4 my-4'>
        <button  className='main bg-pink-600 text-white py-1 rounded-sm px-4' onClick={movieHandler}>Movie </button>
        <button  className='main bg-pink-600 text-white py-1 rounded-sm px-4' onClick={beachHandler}>Marines/Beach</button>
        <button  className='main bg-pink-600 text-white py-1 rounded-sm px-4' onClick={museumHandler}>Some antique Muesuem</button>
        <button  className='main bg-pink-600 text-white py-1 rounded-sm px-4' onClick={bowlHandler}>Bowling and arcade</button>
      </div>
     </div>
     {isMovie && <>
       <p className='italic main text-pink-500 my-3'>Yayy, So Movie it is !!!</p>
       <>
       <div className='flex my-5 space-x-10'>
        <div className='shadow-md'>
          <img src='https://upload.wikimedia.org/wikipedia/en/6/65/Rocky_Aur_Rani_Ki_Prem_Kahani.jpg'></img>
          <p className='font-semibold text-center my-2'>Rocky Aur Raani ki Prem Kahani</p>
          <button className='mb-3 mx-[30%] bg-pink-600 py-1 px-4 text-white main rounded-sm' onClick={()=>setmovie({
            rocky:true,
            jawan:false
          })}>BOOK IT</button>
        </div>
        <div className='shadow-md'>
          <img className='h-[365px]' src='https://st1.bollywoodlife.com/wp-content/uploads/2022/06/Jawan.jpg' height={200} width={300}></img>
          <p className='font-semibold text-center my-2'>Jawaan</p>
          <button className='mb-3 mx-[30%] bg-pink-600 py-1 px-4 text-white main rounded-sm' onClick={()=>setmovie({
            jawan:true,
            rocky:false
          })}>BOOK IT</button>
        </div>

       </div>
       </>

     </>}
     {
      isbeach && <>
      <p className='italic main text-pink-500 my-3'>You are as calm as the sea !!!</p>
       <>
       <div className='flex my-5 space-x-10 '>
        <div className='shadow-md'>
          <img  className="h-[170px]"src='https://upload.wikimedia.org/wikipedia/commons/d/d0/Marine_lines_%2C_mumbai.jpg' height={300} width={300}></img>
          <p className='font-semibold text-center my-2'>Marine Lines</p>
          <button className='mb-3 mx-[30%] bg-pink-600 py-1 px-4 text-white main rounded-sm' onClick={()=>setbeach({
            marines:true,
            juhu:false
          })}>BOOK IT</button>
        </div>
        <div className='shadow-md'>
          <img  src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/ab/77/f9/img-20190525-192344-01.jpg?w=1200&h=1200&s=1' height={300} width={300}></img>
          <p className='font-semibold text-center my-2'>Juhu Beach</p>
          <button className='mb-3 mx-[30%] bg-pink-600 py-1 px-4 text-white main rounded-sm' onClick={()=>setbeach({
            juhu:true,
            marines:false
          })}>BOOK IT</button>
        </div>

       </div>
       </>

      </>
     }
      {
      isMuseum && <>
      <p className='italic main text-pink-500 my-3'>We have a unique history so lets explore some of it too !!!</p>
       <>
       <div className='flex my-5 space-x-10 '>
        <div className='shadow-md'>
          <img  className="h-[170px]"src='https://assets.gqindia.com/photos/5cdc0dc8306c1c8b856e3628/16:9/w_2560%2Cc_limit/national-museum-of-Indian-Cinemas.jpg' height={300} width={300}></img>
          <p className='font-semibold text-center my-2' >National Muesuem of Indian Cinema</p>
          <button className='mb-3 mx-[30%] bg-pink-600 py-1 px-4 text-white main rounded-sm' onClick={()=>setmuseum({
            history:false,
            cinema:true
          })}>BOOK IT</button>
        </div>
        <div className='shadow-md'>
          <img  src='https://th-i.thgim.com/public/business/co9stk/article65634845.ece/alternates/FREE_1200/2022-04-Mahindra%20Museum-161-edit.jpg' height={300} width={300}></img>
          <p className='font-semibold text-center my-2'>National Museum of Living History</p>
          <button className='mb-3 mx-[30%] bg-pink-600 py-1 px-4 text-white main rounded-sm' onClick={()=>setmuseum({
            history:true,
            cinema:false
          })}>BOOK IT</button>
        </div>

       </div>
       </>

      </>
     }
     {
      isbowl && <>
      <p className='italic main text-pink-500 my-3'>Lets not leave any fun to 'SPARE'!!!</p>
       <>
       <div className='flex my-5 space-x-10 '>
        <div className='shadow-md'>
          <img  className="h-[170px]"src='https://images.moneycontrol.com/static-mcnews/2022/09/The-Game-Ranch_interiors-2-1-1-770x433.jpg' height={300} width={400}></img>
          <p className='font-semibold text-center my-2'>Game Ranch</p>
          <button className='mb-3 mx-[35%] bg-pink-600 py-1 px-4 text-white main rounded-sm' onClick={()=>setbowl(true)}>BOOK IT</button>
        </div>
       </div>
       </>
  
      </>
     }
     
     </>}
     {movie.rocky && isMovie && <div className='shadow-md'>
     <h1 className='bg-pink-500 text-white py-2 px-3 w-full'> So lets meet on Sunday !!!!</h1>
     <p class="text-sm main px-3 my-1 "> You selected Rocky Aur Rani Ki Prem Kahani </p><br/>
     </div>}
     {movie.jawan && isMovie && <div className='shadow-md'>
     <h1 className='bg-pink-500 text-white py-2 px-3 w-full'> So lets meet on Sunday !!!!</h1>
     <p class="text-sm main px-3 my-1 "> You selected Jawan </p><br/>
     </div>}
     {beach.marines && isbeach &&<div className='shadow-md'>
     <h1 className='bg-pink-500 text-white py-2 px-3 w-full'> So lets meet on Sunday !!!!</h1>
     <p class="text-sm main px-3 my-1 "> You selected Marines </p><br/>
     </div>}
     {beach.juhu && isbeach && <div className='shadow-md'>
     <h1 className='bg-pink-500 text-white py-2 px-3 w-full'> So lets meet on Sunday !!!!</h1>
     <p class="text-sm main px-3 my-1 "> You selected Juhu </p><br/>
     </div>}
     {museum.cinema && isMuseum &&<div className='shadow-md'>
     <h1 className='bg-pink-500 text-white py-2 px-3 w-full'> So lets meet on Sunday !!!!</h1>
     <p class="text-sm main px-3 my-1 "> You selected National Muesuem of Indian Cinema </p><br/>
     </div>}
     {museum.history && isMuseum && <div className='shadow-md'>
     <h1 className='bg-pink-500 text-white py-2 px-3 w-full'> So lets meet on Sunday !!!!</h1>
     <p class="text-sm main px-3 my-1 "> You selected National Muesuem of Living History </p><br/>
     </div>}
     {bowl && isbowl &&<div className='shadow-md'>
     <h1 className='bg-pink-500 text-white py-2 px-3 w-full'> So lets meet on Sunday !!!!</h1>
     <p class="text-sm main px-3 my-1 "> You selected Bowling </p><br/>
     </div>}

    </div>
   
  )
}
