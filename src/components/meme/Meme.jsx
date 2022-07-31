import './meme.css'
import {useState, useEffect} from 'react'

export default function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    function getMemeUrl() {             
        const randomIndex = Math.round(Math.random() * allMemes.length)
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: allMemes[randomIndex].url
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