// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('moyokhathir@gmail.com');
        setHasCopied(true)
        setTimeout(()=>{
            setHasCopied(false)
        },2000)
    }



    return (
        <section className={"c-space my-20"} id={"about"}>
            <div className={"grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full"}>
                <div className={"col-span-1 xl:row-span-3"}>
                    <div className={"grid-container"}>
                        <img src={"/assets/grid1.png"} alt={"grid-1"}
                             className={"w-full sm:h-[276px] h-fit object-contain"}/>
                        <div className={"grid-headtext"}>
                            <p>Hi, I&apos;m Khathir</p>
                            <p className={"grid-subtext"}>
                                A passionate developer with 5 years of experience across frontend and backend development,
                                AI-powered systems, and Sui blockchain. I love turning ideas into clean, functional Products
                                that solve real problems and leave a lasting impact, from MVPs to finsihed SaaS.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={"col-span-1 xl:row-span-3"}>
                    <div className={"grid-container"}>
                        <img src={"/assets/grid2.png"} alt={"grid-2"} className={"w-full sm:h-[276px] object-contain"}/>
                        <div>
                            <p className={"grid-headtext"}>What I Build With</p>
                            <p className={"grid-subtext"}>
                              I&apos;m a full-stack developer with deep experience in the javascript ecosystem (including Typescript,
                              React, Next.js, Node.js and Nest.js) - with backend support in Python for AI and machine learning applications. I also build
                              for the Sui blockchain, creating secure, performant Web3 experiences. 
                              
                            </p>
                        </div>
                    </div>
                </div>


                <div className={"col-span-1 xl:row-span-4"}>
                    <div className={"grid-container"}>
                        <div className={"rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center"}>
                        { <Globe
                            height={326}
                            width={326}
                            backgroundColor="rgba(0,0,0,0)"
                            backgroundImageOpacity={0.5}
                            showAtmosphere={true}
                            showGraticules={true}
                            globeImageUrl="https://unpkg.com/three-globe/example/img/earth-night.jpg"
                            bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"
                            labelsData={[{
                                    lat: 9.0820, // Nigeria's approximate latitude
                                    lng: 8.6753, // Nigeria's approximate longitude
                                    text: "I'm here",
                                    color: "white",
                                    size: 20}]}
                        /> }

                        </div>
                        <div>
                            <p className={'grid-headtext'}>I work remotely across most timezone</p>
                            <p className={'grid-subtext'}>
                               Based in Nigeria - a trusted hub for remote tech talent. I work seamlessly across U.S., U.K., and EU timezones,
                               delivering quality work on time, everytime.
                            </p>
                            <Button name={'Contact Me'} isBeam containerClass={'w-full mt-10'}/>
                        </div>

                    </div>
                </div>


                <div className={'xl:col-span-2 xl:row-span-3'}>
                    <div className={"grid-container"}>
                        <img className={"w-full sm:h-[266px] h-fit object-contain"} src={"/assets/grid3.png"} alt={"grid-3"}/>
                        <div>
                            <p className={'grid-headtext'}>
                                Passion That Builds
                            </p>
                            <p className={"grid-subtext"}>
                                I&apos;m passionate about creating sysytems that blend intelligence, elegance, and performance - from intuitive
                                frontend to robust backend architecture. I&apos;m especially drawn to solving complex problems with AI and what&apos;s possible
                                with blockchain through the Sui ecosystem.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={"xl:col-span-1 xl:row-span-2"}>
                    <div className={"grid-container"}>
                        <img src={'/assets/grid4.png'} alt={'grid-4'} className={'w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top'}/>
                        <div className={'space-y-2'}>
                            <p className={'grid-subtext text-center '}>Contact Me</p>
                            <div className={'copy-container'} onClick={handleCopy}>
                                <img src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'} alt={'copy'}/>
                                <p className={'lg:text-1.6xl  md:text-xl font-medium text-gray_gradient text-white'}>
                                    moyokhathir@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}
export default About
