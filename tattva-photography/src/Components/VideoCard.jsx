import  { useState, useEffect } from 'react'
import Avatar from "react-avatar";
import axios from 'axios';
const VideoCard = ({ item }) => {
    const [channelData, setChannelData] = useState([])
    const getYoutubechannelName = async () => {
        try {
            const res = await axios.get(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${item.snippet.channelId}&key=${import.meta.env.VITE_API_KEY}`)
            // console.log(res.data.items[0].snippet)
          
            setChannelData(res.data.items[0].snippet.thumbnails.high.url)
        } catch (error) {
            console.log(`errror from thumnail,${error}`)
        }

    }   
    useEffect(() => { getYoutubechannelName() }, [])
    return (
        <div className='w-full cursor-pointer'>
            <img className=" w-full " src={item.snippet.thumbnails.medium.url} alt='https://imgs.search.brave.com/pOaBQnGdotrnHtF_0NMASNCS6LazIYQ19AmbcrWTQmE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGVjaHNtaXRoLmNv/bS9ibG9nL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIxLzAyL1RT/Qy10aHVtYm5haWwt/ZXhhbXBsZS0xMDI0/eDU3Ni5wbmc' />
            <div>
                <div className='flex mt-2 '>
                        <div className=' w-[15%] justify-center align-middle '>
                            <Avatar className='pl-0 left-0 m-2' src={channelData} size={'34px'}  round={true} />
                        </div>
                    <div className='ml-2 '>
                        <h1 className='flex font-bold text-white'>{item.snippet.title} </h1>
                        <p className='flex text-small text-white'>{item.snippet.channelTitle}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default VideoCard