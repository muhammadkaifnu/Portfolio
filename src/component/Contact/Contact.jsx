import "./Contact.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import location_icon from "../../assets/location_icon.svg"
import call_icon from "../../assets/call_icon.svg"
import mail_icon from "../../assets/mail_icon.svg"
function Contact(){
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "ac1175c8-8dd7-4caa-b093-69105080bd6f");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
          alert("Message Sent Successfully!")
        }
      };
    return (
        <div id="contact" className="contact">
            <div className="contact-title">
                <h1>Get in Touch</h1>
            
            </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>let's Talk</h1>
                <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /><p>muhammadkaifnu@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" /><p>+92-310-321-3022</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" /><p>Peshawar, KPK, Pakistan</p>
                    </div>
                </div>
            </div>
            <form action="" onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder="Enter Your Name" name="name" />
                <label htmlFor="">Your Email</label>
                <input type="email" name="email" placeholder="Enter Your Email" />
                <label htmlFor="">Write Your Message here</label>
                <textarea name="message" rows="8"placeholder="Enter Your Message" ></textarea>
                <button className="contact-submit" type='submit'>Submit</button>
            </form>
        </div>
            </div>
    )
}
export default Contact