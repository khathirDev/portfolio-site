// import React from 'react'

const Footer = () => {
    return (
        <section className={"c-space pt-7 pb-3 border-t border-black-300 flex justify-between items center flex-wrap gap-5"}>
             <div className={"text-white-500 flex gap-2"}>
                 <p>Terms and Conditions</p>
                 <p>|</p>
                 <p>Privacy Policy</p>
             </div>

            <div className={"flex gap-3"}>
                <div className={"social-icon"}>
                    <a href="https://github.com/khathirDev">
                    <img src={"/assets/github.svg"} alt={"github"} className={"w-1/2 h-1/2 ml-1.5"} loading="lazy"/>
                    </a>
                </div>

                <div className={"social-icon"}>
                    <a href="https://x.com/khathir_">
                    <img src={"/assets/twitter.svg"} alt={"twitter"} className={"w-1/2 h-1/2 ml-1.5"} loading="lazy"/>
                    </a>
                </div>

                <div className={"social-icon"}>
                    <a href='https://instagram.com/developedBykhathir'>
                    <img src={"/assets/instagram.svg"} alt={"instagram"} className={"w-1/2 h-1/2"} loading="lazy"/>
                    </a>
                </div>
            </div>

            <p className={"text-white-500"}>Copyright 2025. All Right Reserved</p>

        </section>
    )
}
export default Footer
