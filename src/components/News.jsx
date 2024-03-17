function News({news}) {
    console.log(news);
    return (
     <>
   
        {/* card  */}
       <div className="card flex flex-wrap  bg-white  m-5 p-2 sm:h-auto sm:w-[250px] rounded-lg ">
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
     
     </>
   
    )
    
}

export default News