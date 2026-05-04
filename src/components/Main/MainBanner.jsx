export default function MainBanner() {
    const banLinkImg0 = <img src="src\assets\img\buy-comics-digital-comics.png" alt="Digital comics" />;
    const banLinkImg1 = <img src="src\assets\img\buy-comics-merchandise.png" />;
    const banLinkImg2 = <img src="src/assets/img/buy-comics-subscriptions.png" alt="Subscriptions" />;
    const banLinkImg3 = <img src="src\assets\img\buy-comics-subscriptions.png" alt="Comic shop locator" />;
    const banLinkImg4 = <img src="src/assets/img/buy-dc-power-visa.svg" alt="DC power visa" />;
    const bannerItem0 = <> 
        {banLinkImg0}
        <p>DIGITAL COMICS</p>
    </>;
    const bannerItem1 = <> 
        {banLinkImg1}
        <p>MERCHANDISE</p>
    </>;
    const bannerItem2 = <> 
        {banLinkImg2}
        <p>SUBSCRIPTIONS</p>
    </>;
    const bannerItem3 = <> 
        {banLinkImg3}
        <p>COMIC SHOP LOCATOR</p>
    </>;
    const bannerItem4 = <> 
        {banLinkImg4}
        <p>DC POWER VISA</p>
    </>;
    return (
        <>
            {bannerItem0}
            {bannerItem1}
            {bannerItem2}
            {bannerItem3}
            {bannerItem4}
        </>
    );
}