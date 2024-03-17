import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import News from './components/News'

function App() {
  let [article, setArticle] = useState([])
  let [news,setNews]=useState("everything")
  let [date,setDate]=useState("2024-03-15")
  useEffect(()=>{
    fetch(`https://newsapi.org/v2/everything?q=${news}&from=${date}&apiKey=42a07b748ecb451781a40862d8f7214a`).then((data)=>data.json()).then((news)=>setArticle(news.articles)).catch((error)=>console.log("Something Went Wrong :",error))
  
  },[news,date])

  return (
    <>
      <header className="bg-[#5272ff] w-[100%]  text-white flex justify-around fixed p-4">
        <img className='w-[120px] logo' src="./logo.jpg" alt="logo" />
        <h1 className="head font-serif  font-bold text-[150%]">Latest News || Service</h1>
        
        <input className="datebar sm:w-[20vw] indent-2 text-black rounded-lg " type='text' placeholder='Enter the Date In YYYY-MM-DD' onChange={(event)=>{
          setDate(event.target.value)
        }} ></input> 
       <input className="searchbar sm:w-[20vw] indent-2 text-black rounded-lg 
        " type="text" onChange={(event)=> {if(event.target.value!==""){setNews(event.target.value)}else{setNews("india")}}}   placeholder="Find The Related News" />
     </header>
      <main className='flex flex-wrap justify-center align-middle bg-gradient-to-r  from-blue-900 to-sky-400  pt-[6%]'>
      
      {article.map((news)=>{
       return  <News news={news} />
     })}
      </main>
   
    </>
  )
}

export default App
