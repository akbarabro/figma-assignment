import Image from "next/image"
import logo_f from "./assets/Group 11 1.png"
import phone from "./assets/Vector-1.png"
import mail from "./assets/Vector-2.png"
import map from "./assets/Vector.png"
import social from "./assets/4.png"

export default function Footer(){
    return (
        <div>
            
            <div className="footer">
                    <div className="f1">
                    <Image src={logo_f} alt="" className=""/> 
                    </div>
                    <div className="f2">
                        <div className="f2-div">
                        <p className="h2">Information</p>
                        <p>Main</p>
                        <p>Gallery</p>
                        <p>Projects</p>
                        <p>Certifications</p>
                        <p>Contacts</p>
                        </div>
                    </div>
                    <div className="f3">
                        <p className="h2">Contact</p>
                        <ul className="contact_f">
                            <li>
                    <Image src={map} alt="" className="icon_f"/> 

                            1234, lorem ipsem <br /> korangi karachi pakistan
                            </li>
                            <li>
                    <Image src={phone} alt="" className="icon_f"/> 

                            515-565331-272
                            </li>
                            <li>
                    <Image src={mail} alt="" className="icon_f"/> 

                            samplemail@gmail.com
                            </li>
                        </ul>

                    </div>
                    <div className="f4">
                    <Image src={social} alt="" className=""/> 

                    </div>
                </div>
        </div>
    )
}