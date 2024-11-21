import Image from "next/image"
import img from "./img.png"
import numbs from "./assets/slide-numbers.png"
import left_arr from "./assets/Frame 9.png"
import right_arr from "./assets/Frame 8.png"
export default function Hero (){
    return(
        <div>
            <div className="hero">
                <div className="icons">

                </div>
            <div className="hero_text">
                <div className="head">
                <h1 className="Heading">PROJECT <br /> <b>Lorum</b></h1>
                </div>

                <div className="Icons_hero">
                    <div className="arrowbtns">
                <Image src={left_arr} alt="" className=""/>
                <Image src={right_arr} alt="" className=""/>
                    </div>
                <Image src={numbs} alt="" className="img_side_nums"/>
                </div>
            </div>
            <div className="hero_Img">
                <Image src={img} alt="" className="img_hero"/>
                <div className="btn_img">
                VIEW PROJECTS 
                <Image src={right_arr} alt="" className="arr_right"/>
                </div>

            </div>
            </div>

            <div className="About">
                <div className="about_images">
                    <div className="imgs_abt1">
                        {/* <Image src={} alt="" />
                        <Image src={} alt="" /> */}
                    </div>
                    <div className="imgs_abt2"></div>
                </div>
                <div className="about_Text"></div>
            </div>
        </div>
    )

}

