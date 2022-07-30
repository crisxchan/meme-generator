import './header.css'
import appIcon from '../../assets/app-icon.png'

export default function Header() {
    return (
        <header>
            <img src={appIcon}/>
            <h1>Meme Generator</h1>
            <p>React Course - Project 3</p>
        </header>
    )
}