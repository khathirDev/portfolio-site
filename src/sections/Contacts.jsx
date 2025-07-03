import {useRef, useState} from 'react'
import emailjs from '@emailjs/browser'

const Contacts = () => {

    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })

    const [loading, setLoading] = useState(false)

    const handleChange = (e)=>{setForm({ ...form, [e.target.name]: e.target.value })}


    // service_oroailq

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     setLoading(true);

    //   try {
    //      await emailjs.send(
    //          'service_oroailq',
    //           'template_4ro29yi',
    //           {
    //               from_name: form.name,
    //               to_name: 'Khathir',
    //               from_email: form.email,
    //               to_email: "moyokhathir@gmail.com",
    //               message: form.message,
    //           },
    //          'qLJmKSrpXTKZN2OzB'
    //       )

    //       setLoading(false);
    //       alert('Thank you. I will get back to you as soon as possible.')

    //       setForm({
    //           name: '',
    //           email: '',
    //           message: ''
    //       })

    //   }catch (error){
    //         alert("Something went wrong. Please try again")
    //         console.log(error)
    //     }
    // }

    const handleSubmit = async (e) => {
            e.preventDefault();
            setLoading(true);

        try {
            await emailjs.send(
                'service_oroailq',
                'template_ygljveo', // Replace with ID from dashboard
                {
                    name: form.name,
                    email: form.email,
                    message: form.message,
                },
                'qLJmKSrpXTKZN2OzB'
            );

            setLoading(false);
            alert('Thank you. I will get back to you as soon as possible.');
            
            setForm({
                name: '',
                email: '',
                message: ''
            });

        } catch (error) {
            setLoading(false);
            alert("Something went wrong. Please try again");
            console.log(error);
        }
};


    return (
        <section className={"c-space my-20"} id={"contact"}>
         <div className={"relative min-h-screen flex items-center justify-center flex-col"}>
             <img src={"/assets/terminal.png"} alt={"terminal background"} className={"absolute inset-0 min-h-screen"}/>
             <div className={"contact-container"}>
                 <h3 className={"head-text mt-3 space-y-7"}>Let&apos;s get in touch!</h3>
                 <p className={"text-lg text-white-600 mt-3"}>Whether you are looking to build a new website,
                     improve your existing platform, or bring a unique project to life, I&apos;m here.</p>

                 <form ref = {formRef} onSubmit = {handleSubmit}
                     className = {"flex flex-col gap-6"} >
                     <label className = {"space-y-3"} >

                         <span className = {"field-label"} > Full name </span>
                            <input type={"text"}
                                name={"name"}
                                value={form.name}
                                required
                                onChange={handleChange}
                                className={"field-input"}/>
                     </label>

                     <label className="space-y-3">
                         <span className="field-label">Email</span>
                            <input
                             type="email"
                             placeholder={"johndoe@gmail.com"}
                             name="email"
                             value={form.email}
                             required
                             onChange={handleChange}
                             className="field-input"
                         />
                     </label>

                     <label className={"space-y-3"}>
                         <span className="field-label">Your message</span>
                         <textarea
                             placeholder={"Hi, I have a job for you..."}
                             name="message"
                             value={form.message}
                             rows={5}
                             required
                             onChange={handleChange}
                             className="field-input"
                         />
                     </label>

                     <button className={"field-btn"} type={"submit"} disabled={loading}>
                         {loading ? "Sending..." : "Send message"}
                         <img src={"/assets/arrow-up.png"} alt={"arrow-up"} className={"field-btn_arrow"}/>
                     </button>

                 </form>


             </div>
         </div>
        </section>
    )
}
export default Contacts


