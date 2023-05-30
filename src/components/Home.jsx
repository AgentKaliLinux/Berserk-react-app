import React from 'react'
import vg from "../assets/5.png"
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from "react-icons/ai"

const Home = () => {
    return (
        <>
            <div className='home' id="home">
                <main>
                    <h1>Berserk</h1>
                    <p>It Is A Depressed Manga</p>
                </main>
            </div>
            <div className="home2">
                <img src={vg} alt="Graphics" />
                <div>
                    <p>Berserk (Japanese: ベルセルク, Hepburn: Beruseruku) is a 2016 anime television series based on Kentaro Miura's manga series of the same name and an acting sequel to the Golden Age Arc film trilogy. This is the second television series adaptation of the manga after the 1997 anime of the same name, covering the Conviction arc from the manga. A second season, covering the first half of the Hawk of the Millennium Empire arc aired in 2017.</p>
                </div>
            </div>
            <div className="home3" id="about" >
                <div>
                    <h1>Who Is Guts</h1>
                    <p>Guts, renowned as the "Black Swordsman", is a former mercenary and branded wanderer who travels the world in a constant internal struggle between pursuing his own ends and upholding his attachments to those dear to him.t one time driven solely by his will to survive, Guts finds purpose in life upon joining the Band of the Falcon, greatly helping in the faction's storied successes during the Hundred-Year War as captain of the band's raiders. He eventually becomes dissatisfied with clinging to Griffith's dream and departs from the band in pursuit of his own.
                    </p>
                </div>
            </div>
            <div className="home4" id="manga">
                <div>
                    <h1>Manga</h1>
                    <article>
                        <a href="https://readberserk.com/" target={"blank"}>
                            <div style={{
                                animationDelay: "0.3s",
                            }}>
                                <AiFillGoogleCircle />
                                <p>Google</p>
                            </div></a>
                        <a href="https://www.amazon.com/Berserk-Deluxe-1-Kentaro-Miura/dp/1506711987/ref=sr_1_2?crid=30I2XXLGZP7V7&keywords=berserk&qid=1685468605&sprefix=berserk+guts%2Caps%2C299&sr=8-2" target={"blank"}>
                            <div style={{
                                animationDelay: "0.5s",
                            }}>
                                <AiFillAmazonCircle />
                                <p>Amazon</p>
                            </div></a>
                        <a href="https://www.youtube.com/watch?v=0MIw4xzxcTU" target={"blank"}>
                            <div style={{
                                animationDelay: "0.7s",
                            }}>
                                <AiFillYoutube />
                                <p>Youtube</p>
                            </div></a>
                        <a href="https://www.instagram.com/berserk.4ever/" target={"blank"}>
                            <div style={{
                                animationDelay: "1s",
                            }}>
                                <AiFillInstagram />
                                <p>Instagram</p>
                            </div></a>
                    </article>
                </div>
            </div>
        </>
    )
}

export default Home