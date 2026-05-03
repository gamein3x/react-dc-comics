export default function LinkFooter() {
    const linkHead0 = <h6>Titolo lista</h6>;
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
            {linkBox}
        </>
    );
}