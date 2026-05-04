export default function LinkFooter() {
    const linkHead0 = <h6>Titolo lista</h6>;
    const linkImgBg = <img src="src\assets\img\dc-logo-bg.png" alt="DC logo background" />
    const linkList0 = <>
    <ul>
        <li>text</li>
        <li>text</li>
        <li>text</li>
        <li>text</li>
        <li>text</li>
    </ul>
    </>;
    const linkBox = <>
        <div>{linkHead0}</div>
        <div>{linkList0}</div>
    </>;
    console.log('aaa');
    return (
        <>
            <div>{linkBox}</div>
            <div>{linkImgBg}</div>
        </>
    );
}