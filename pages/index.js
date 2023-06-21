
import Users from '@/Components/Users/Users';
import Head from 'next/head';


export default function Home({users}) {
    console.log(users.results);
    
  return (
   <div>
     <Head>
     <link rel="icon" href="https://i.pinimg.com/736x/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg" sizes="any" />
        <title>Home Page</title>
      </Head>

      {/* ----Body---- */}
       <h1 className='flex justify-center'>Home Page</h1>

       <div className='grid grid-cols-3'>
        {users.results.map((user, idx) => <Users key={idx} user={user} />)}
       </div>
       
   </div>
  )
}



//* Data Loading ----
export async function getServerSideProps(){
    const res = await fetch('https://randomuser.me/api/?results=10')
    const users = await res.json()



    //* Pass users to the page via props
    return {props: {users}}
}
