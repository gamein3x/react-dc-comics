export default function Navbar() {
    const navLogo = <img src="src\assets\img\dc-logo.png"></img>;
    const navItem = <div>Menu a tendinami</div>;
    const navMain = <>
        {navItem}
        {navItem}
        {navItem}
        {navItem}
        {navItem}
        {navItem}
        {navItem}
        {navItem}
        {navItem}
    </>
    
    return (
        <div>
            {navLogo}
            {navMain}
        </div>
    );
}