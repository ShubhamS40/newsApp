import { useEffect, useState } from 'react'

import './App.css'

import { nanoid } from 'nanoid'


function App() {
  const id=nanoid()
  
  let [article, setArticle] = useState([])
  // let [news,setNews]=useState("usa")
  // let [date,setDate]=useState("2024-03-15")
  useEffect(()=>{
    fetch(`https://backend-api-uhen.vercel.app/`).then((data)=>data.json()).then((news)=>setArticle(news.articles)).catch((error)=>console.log("Something Went Wrong :",error))
  
  },[])

  return (
    <>
      <header className="bg-[#5272ff] w-[100%]  text-white flex justify-around fixed p-4">
        <img className='w-[120px] logo' src="./logo.jpg" alt="logo" />
        <h1 className="head font-serif  font-bold text-[150%]">Latest News || Service</h1>
        
        {/* <input className="datebar w-[8vw] cursor-pointer sm:w-[20vw] indent-2 text-black rounded-lg " type='date' placeholder='Enter the Date In YYYY-MM-DD' onChange={(event)=>{
          setDate(event.target.value)
        }} ></input>  */}
       {/* <input className="searchbar w-[120px]  sm:w-[20vw] indent-2 text-black rounded-lg 
        " type="text" onChange={(event)=> {if(event.target.value!==""){setNews(event.target.value)}else{setNews("india")}}}   placeholder="Find The Related News" /> */}
     </header>
      <main className='flex flex-wrap justify-center align-middle bg-gradient-to-r  from-blue-900 to-sky-400 pt-[20%]  sm:pt-[6%]'>
      
      {article.map((news)=>{
       return    <div key={id}  className="card flex flex-wrap  bg-white  m-5 p-2 sm:h-auto sm:w-[250px] rounded-lg ">
       {/* image part */}
       <img   className="overflow-hidden flex justify-center align-middle  sm:w-[250px]  sm:h-[150px]  m-[4%] rounded-lg" src={news.urlToImage} alt="image" />
       {/* content part */}
      <div className="content flex flex-col align-middle justify-center">
       {/* title section */}
      <span className="text-wrap text-[2vh] font-bold font-serif"><span className="text-xl">Title </span>:{news.title}</span>
      {/* content section */}
      <span className="text-wrap text-[1.8vh]"><span className="text-[2vh] font-bold">Content </span>:{news.content}</span>
      {/* author section */}

      <span className="text-wrap text-[1.8vh]"><span className="text-[2vh] font-bold">Author</span>:{news.author}</span>

    
       <a href={news.url}>Readmore...</a>
      </div>
      
   </div>
     })}
      </main>
   
    </>
  )
}

export default App
