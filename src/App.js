import Search from "./components/Search";
import './App.css'
import { useEffect, useState } from "react";
import Pagination from "./components/Pagination";
import NewsArticle from "./components/NewsArticle";
import getNewsArticle from "./getNewsArticle";

function App() {
  const [ page, setPage] = useState(0);
  const [search , setSearch] = useState('');
  const [newsArticles , setNewsArticles] = useState([]);
  
useEffect(()=>{
  const fetchData = async () => {
    const data = await getNewsArticle(page, search);
    setNewsArticles(data)
  };

  fetchData()
} ,[search, page])
  
  return (
    <div >
      <Search search={search} setSearch={setSearch} />
      <Pagination page={page} setPage={setPage} />
      <NewsArticle newsArticles={newsArticles}/>
    </div>
  );
}

export default App;
