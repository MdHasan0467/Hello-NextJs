import Image from "next/image";


const Users = ({user}) => {
    return (
        <div>
            <Image src={user?.picture?.large} alt='' width={100} height={100} />
            <h1>{user.name.last}</h1>
            <h1>{user.email}</h1>
            {/* <img src={user.picture.large} alt="" /> */}
        </div>
    );
};

export default Users;