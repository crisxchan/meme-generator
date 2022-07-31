import './meme.css'
import {useState} from 'react'
import memesData from '../../memesData'

export default function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages] = useState(memesData)

    const memesArray = allMemeImages.data.memes 

    function getMemeUrl() {             
        const randomIndex = Math.round(Math.random() * memesArray.length)
        setMeme({
            ...meme,
            randomImage: memesArray[randomIndex].url
        })
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <section id="meme">
            <div id="input">
                <input 
                    type="text" 
                    placeholder="Top text" 
                    value={meme.topText}
                    name="topText"
                    onChange={handleChange}
                />
                <input
                    type="text" 
                    placeholder="Bottom text"
                    value={meme.bottomText}
                    name="bottomText"
                    onChange={handleChange}
                />    
            </div>

            <button onClick={getMemeUrl}>Get a new meme image</button>
            
            <div id="meme-wrapper">
                <img src={meme.randomImage} />
                <h1 className="meme-text top">{meme.topText}</h1>
                <h1 className="meme-text bottom">{meme.bottomText}</h1>
            </div>
        </section>
    )
}