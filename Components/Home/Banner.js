import { BsFacebook, BsFillCloudDownloadFill, BsLinkedin } from 'react-icons/bs';
import { SiMinutemailer } from 'react-icons/si';

const Banner = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:mx-10 mx-5'>
            
        <div className="flex justify-center items-center">
            <div>
                <p className=' text-start text-2xl'>Hi there,</p>

                <p className=' text-2xl text-start'>I am <span className=' text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600'>MD Hasan</span></p>
                {/* <Typical
                className=' text-2xl text-transparent text-start bg-clip-text bg-gradient-to-r from-green-600 to-emerald-300'
                steps={['I am ', 1000, 'I am MD Hasan', 500]}
                loop={Infinity}
                wrapper="p"
                /> */}

                <p className=' text-start text-2xl'>Full Stack Web Developer</p>

                <a href="https://drive.google.com/u/0/uc?id=12bIMlGXjZalhNFddM-nKcUVe-Qpa0-3S&export=download" className='btn w-32 mt-5 text-white border-0 bg-gradient-to-r from-green-600 to-emerald-300 hover:from-emerald-300 hover:to-green-600 flex' >
                 <BsFillCloudDownloadFill className='text-white mt-1 mx-2' /> <span>Resume</span>   
                </a>



                <div className="join-with-me flex my-10 font-semibold text-transparent text-start bg-clip-text bg-gradient-to-r from-green-600 to-emerald-300">
                    <p className='text-2xl'>Join with me - </p>
                    
                    <a href="https://www.facebook.com/ornilhasan0467/" target='_blank' title='Facebook' className='mt-1 mx-5 text-black cursor-pointer hover:text-green-500 text-2xl'>
                    <BsFacebook />
                    </a>

                    <a target='_blank' title='Likedin' href="https://www.linkedin.com/in/md-hasan149357/"  className='mt-1 text-black cursor-pointer hover:text-green-500 text-2xl'>
                    <BsLinkedin />
                    </a>
                    <a href="mailto:ornilhasan.oht.riyad@gmail.com" className='mt-1 text-black mx-5 cursor-pointer hover:text-green-500 text-2xl' title='Direct Email'><SiMinutemailer /></a>
                </div>
            </div>
        </div>

        {/* <div className="flex justify-center items-center mt-10">
            <img draggable='false' data-aos="fade-up-right" className='w-96' src={img} alt="" />
        </div> */}
    </div>
    );
};

export default Banner;