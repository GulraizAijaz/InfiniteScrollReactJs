import React from 'react'
import Card from './Card'
import Loading from './Loading'
import { useState,useEffect } from 'react' 
const Home = () => {

    // states
    const [data,setData] = useState([])
    const [page,setPage] = useState(1)
    const [loading,setLoading] = useState(false)
    // get data from api
    const getData = async()=>{
        setLoading(true)
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/?_limit=6&_page=${page}`)
        const data = await res.json()
        setData((prev)=> [...prev,...data])
        setLoading(false)
    }
    // api call whenever the page size changes 
    useEffect(()=>{
        getData()
    },[page])
    
    // scroll function
    const handelInfiniteScroll = async()=>{
        try{
            if(window.innerHeight + document.documentElement.scrollTop+1 > document.documentElement.scrollHeight ){
                setPage((prev)=>prev+1)
            }
        }
        catch (err){
            console.log(err)
        }
    }
    // add scroll event listener
    useEffect(() => {
        window.addEventListener("scroll", handelInfiniteScroll);
        return () => window.removeEventListener("scroll", handelInfiniteScroll);
      }, []);
    
  return (
    <div className='home-main'>
    <div className='CardWrap'>
        {console.log(data)}
        {data.map((curVal, id) => {
            return <Card key={id} info={curVal} />;
          })}
    </div>
    {loading && <Loading />}
    </div>
  )
}

export default Home