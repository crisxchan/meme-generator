import './meme.css'

export default function Meme() {
    return (
        <section id="meme">
            <div id="input">
                <input type={"text"} placeholder={"Top text"} />
                <input type={"text"} placeholder={"Bottom text"}/>    
            </div>
            <button>Get a new meme image</button>
        </section>
    )
}