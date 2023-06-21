import { useState } from "react";


const ApiRoute = ({data}) => {
    const [resP, setResP] = useState({})

    const handlePostReq = () => {
        // setResP('');
        fetch('/api/blogs', {
            method : 'POST',
            headers : {
                'content-type': 'application/json',
            },
            body: JSON.stringify({message: 'Post request done!'})
        })
        .then(res => res.json())
        .then(data => setResP(data))
    }


    const handleUpdate = () => {
        // setResP('');
        fetch('/api/blogs', {
            method : 'PUT',
            headers : {
                'content-type': 'application/json',
            },
            body: JSON.stringify({message: 'Put request done!'})
        })
        .then(res => res.json())
        .then(data => setResP(data))
    }





    return (
        <div>
            <style jsx>
                {`
                .container{
                    display: flex;
                    flex-direction: column;
                    gap:20px;
                    margin-top:10px;
                }
                .container div{
                    padding: 20px;
                    min-height:115px;
                    border : 1px solid gray;
                }
                ,btn{
                    padding: 10px 25px;
                    cursor : pointer;
                    margin-top: 10px;
                    border : none;
                    border-radius: 3px;
                }
                .btn:active{
                    opacity:80%;
                }
                .post-btn{
                    background : #16a13b;
                    color : #fff;
                    border : none;
                }
                .update-btn{
                    background : #75ad15;
                    color : #fff;
                    border: none;
                }
                .delete-btn{
                    background : #e30000;
                    color : #fff;
                    border : none;
                }
                `}
            </style>




            <h1>Fundamental of API Routes in Next Js</h1>


            <div className="container">
                <div>
                    <h2>Get Request</h2>
                    <h3>{data?.username}</h3>
                </div>

                
                <div>
                    {
                        resP.message?
                        <p>{resP.message}</p>
                        :
                        <h2>Post Request</h2>
                    }
                    <button onClick={handlePostReq} className="btn post-btn">Add Post</button>
                </div>

                <div>
                {
                        resP.message?
                        <p>{resP.message}</p>
                        :
                        <h2>Updated Request</h2>
                    }
                    <button onClick={handleUpdate} className="btn update-btn">Update</button>
                </div>

                <div>
                    <h2>Delete Request</h2>
                    <button className="btn delete-btn">Delete</button>
                </div>


            </div>
        </div>
    )
}
export default ApiRoute;





export const getServerSideProps = async () => {
    const res = await fetch('http://localhost:3000/api/blogs')
    const data = await res.json();

    return {
        props : {data}
    }
}