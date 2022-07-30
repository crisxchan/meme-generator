import './meme.css'
import {useState} from 'react'
import memesData from '../../memesData'

export default function Meme() {
    const [memeUrl, setMemeUrl] = useState('')
    const memesArray = memesData.data.memes 

    function getMemeData() {             
        const randomIndex = Math.round(Math.random() * memesArray.length)
        setMemeUrl(memesArray[randomIndex].url)
    }

    return (
        <section id="meme">
            <div id="input">
                <input type={"text"} placeholder={"Top text"} />
                <input type={"text"} placeholder={"Bottom text"}/>    
            </div>
            <button onClick={getMemeData}>Get a new meme image</button>
            <img src={memeUrl} />
        </section>
    )
}