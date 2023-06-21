import Navbar from "../Navbar/Navbar";


const Layout = ({children}) => {
    return (
        <>
        <Navbar />
            <main className="p-20">{children}</main>
        </>
    );
};

export default Layout;