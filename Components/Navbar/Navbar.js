import Link from "next/link";



const Navbar = () => {
    return (
        <>
         <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Next JS</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/blog'>Blog</Link></li>
                <li><Link href='/addPost'>Add Blog</Link></li>
                <li><Link href='/about'>About</Link></li>
                </ul>
            </div>
            </div>
        </>
    );
};

export default Navbar;