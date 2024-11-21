import Image from "next/image"
import img_1 from "./assets/Rectangle 8.png"
import img_2 from "./assets/Rectangle 9.png"
import img_3 from "./assets/Rectangle 10.png"
import arrow from "./assets/Frame 8.png"
import one from "./assets/1.png"
import two from "./assets/2.png"
import projects from "./assets/Group 79.png"
import formImage from "./assets/image 12.png"
import arow from "./assets/arrow-2-right-long-1.svg"
import logo_f from "./assets/Group 11 1.png"
export default function about (){
    return(
        <div>

            <div className="About_section">
            <div className="About_images_section">
                <div className="one">
            <Image src={img_1} alt="" className="img_about"/>
            <Image src={img_3} alt="" className="img_about"/>
            </div>
            <Image src={img_2} alt="" className="img_about"/>
            </div>

            <div className="About_text_section"></div>
            <h2 className="heading_about">About</h2>
            <p className="para_about">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, dignissimos sequi maiores perferendis voluptatibus, qui veniam distinctio tenetur illum consequuntur nostrum repellat nam quasi! Pariatur deserunt dolores quaerat blanditiis quo doloremque ea ipsum dignissimos delectus, eos eum quam explicabo alias quibusdam enim dolore minima!</p>

            <div className="btn_read">
            READ MORE 
            <Image src={arrow} alt="" className="arrow_about"/>
            </div>
            </div>

            <div className="statement">
                <h2 className="heading1">Main Focus/Mission Statement</h2>
                <div className="states">
                   <div className="state_data">
                   <Image src={one} alt=""/> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores vel officiis pariatur ea iste, explicabo, deleniti quo qui tempore consequuntur minus? Explicabo.</p>
                   </div>
                   <div className="state_data">
                   <Image src={two} alt=""/> <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut consequuntur accusantium fuga, rerum itaque dignissimos consectetur distinctio maiores, reprehenderit facilis libero! Quos?</p>
                   </div>
                </div>


            </div>

            <div className="projects_section">
                {/* <h3 className="Heading_proj heading1">Our Projects</h3> */}
                <Image src={projects} alt="" className="pro_img"/>
                {/* <div className="proj_images">
                </div> */}
            </div>
            

                <div className="form_section">
                    <div className="contect_form">
                    <h3 className="heading1">Contact Us</h3>

                    <form action="">
                        <input type="text" name="" className="inpt" placeholder="Name *" required/>
                        <input type="text" name="" className="inpt" placeholder="Phone Number *"required/>
                        <input type="text" name="" className="inpt" placeholder="E-mail *" required/>
                        <input type="text" name="" className="inpt" placeholder="Intrested In"/>
                        <textarea name="" id="" className="inpt" required placeholder="Message *"></textarea>

                        <input type="button" value="SEND EMAIL >" className="btn_submit"/>
                        
                    </form>

                    </div>
                    <div className="img_form">
                    <Image src={formImage} alt=""/> 
                    </div>

                </div>



            </div>

    )

}

