import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'

function Footer (){
   
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                        <img src={footer_logo} alt="" />
                        <p>I'm Software engineering Student from Pakistan, My area of interest are Mern Stack and react native</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder='Enter Your Email'/>
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">
                &#169; 2023 Muhammad Kaif, All right reserved
                </p>
                <div className="bottom-footer-right">
                    <p>Term of Services</p>
                    <p>Privacy and Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    )
}
export default Footer