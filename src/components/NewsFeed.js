import { useEffect, useState } from "react";
import  axios  from "axios";

const NewsFeed = () => {
  const[articles,setArticles]=useState(null)

  useEffect(()=>{

    const options = {
      method: 'GET',
      url: 'https://crypto-news16.p.rapidapi.com/news/top/5',
      headers: {
        'X-RapidAPI-Key': 'f877cc701amsh4e9a5428c2e8213p153f7djsnb73b52f5e30b',
        'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com'
      }
    };
    
 axios.request(options).then((response)=>{
	console.log(response.data)
  setArticles(response.data)
}).catch ((error)=> {
	console.error(error);
})
})
const IstArticle=articles?.slice(0,7)
console.log(articles)
    return (
      <div className="news-feed">
  <h2>Newsfeeds</h2>
  {IstArticle?.map((article,_index) => (
    <div key={_index}><a href={article.url}><p>{article.title}</p></a></div>
)
)}

      </div>
    );
  }
  
  export default NewsFeed;