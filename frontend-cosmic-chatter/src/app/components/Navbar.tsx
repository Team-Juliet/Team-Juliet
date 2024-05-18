import Link from "next/link";


const Navbar = () => {
    return (
        <nav className="">
            <div className= "">
                <div className="">
                    <div className="">
                        <div className="">
                        <Link href="/">Home</Link>
                        <Link href="/forum">Forum</Link>
                        <Link href="/work">Work</Link>
                        <Link href="/profile">Profile</Link>
                        <Link href="/contact">Contact</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;