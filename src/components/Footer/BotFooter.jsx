export default function BotFooter() {
    const BotSignUpBtn = <button>SIGN-UP NOW!</button>
    const BotSocial = <div>
            <div>
                <p>FOLLOW US</p>
            </div>
            <div><img src="src\assets\img\footer-facebook.png" alt="Link a Facebook" /></div>
            <div><img src="src\assets\img\footer-twitter.png" alt="Link a Twitter" /></div>
            <div><img src="src\assets\img\footer-youtube.png" alt="Link a Youtube" /></div>
            <div><img src="src\assets\img\footer-pinterest.png" alt="Link a Pinterest" /></div>
            <div><img src="src\assets\img\footer-periscope.png" alt="Link a Periscope" /></div>
    </div>;
    
    return <>
        <div>{BotSignUpBtn}</div>
        <div>{BotSocial}</div>
    </>
}