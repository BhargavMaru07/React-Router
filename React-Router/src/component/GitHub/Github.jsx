import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom' // aa hook loader ma je data ayo to aa file ma laava mate kam ave

function Github() {

  let data = useLoaderData(); 


  //APDE AA NICHE NO CODE COMMENT KARI SAKIYE KM K APDE API CALL MATE LOADER NO USE KARYO CHE AND LOADER MA GITHUBLOADER APEL CHE JE APDE AA FILE MA NICHE BANAYU CHE TO HAVE NICHE TO APDE DATA.AVATAR_URL AND DATA.FOLLOEWERS APDE DATA AAM FETCH KARYO CHE SO APDE AYA PROBLEM THASE SO APDE AYA AEK HOOK NO USE KARSU JENATHI APDE MAIN.JSX MA JE LOADER CHE AEMA JE DATA AVE E DATA APDI PASE HOOK THROUGH AVI JASE  


    // let[data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/BhargavMaru07')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers : {data.followers}
    <img src={data.avatar_url} alt="Git_image"  width={300}/></div>
  )
}

export default Github

export let githubLoaderInfo = async ()=>{
        let response = await fetch("https://api.github.com/users/BhargavMaru07");
        return response.json();
}