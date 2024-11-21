import Image from "next/image"
import logo from "./logo.png"
export default function Header (){
    return(
        <div>
            <ul className="nav">
                <li className="logo">
                   <Image src={logo} alt=""/>
                </li>
                <li>
                    MAIN
                </li>
                <li>
                    GALLERY
                </li>
                <li>
                    PROJECTS
                </li>
                <li>
                    CERTIFICATES
                </li>
                <li>
                    CONTACTS
                </li>
            </ul>
        </div>
    )
}


