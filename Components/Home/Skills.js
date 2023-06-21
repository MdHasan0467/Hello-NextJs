import React, { useEffect } from 'react';
import { BsBrowserChrome, BsDatabaseFill, BsFiletypeCss, BsFiletypeHtml, BsGithub } from 'react-icons/bs';
import { FaBootstrap, FaGitAlt, FaNodeJs, FaReact } from 'react-icons/fa';
import { VscActivateBreakpoints } from 'react-icons/vsc';
import { SiExpress, SiJavascript, SiMongodb, SiNetlify,SiNextdotjs,SiRedux,SiTailwindcss,SiTypescript,SiVercel, SiVisualstudio } from 'react-icons/si';
// import Aos from 'aos';
// import 'aos/dist/aos.css'
// import Lottie from 'lottie-react';
// import Animation from '../../Assets/Animations/react-and-node-development-mobile-first.json'




const Skills = () => {
    // useEffect(() => {
    //     Aos.init();
    // },[])
    return (
        <>
        <div id='skills' className='w-3/4 mx-auto my-10'>
            <h1 className='text-3xl text-start font-semibold'>My Skills_</h1>


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div>
                <div>
                    <p className='flex justify-start my-5 text-2xl font-semibold'>
                    <VscActivateBreakpoints className='mt-1 mx-3' />
                     Tools & Design Skill_
                    </p>

                    <div className="flex gap-5">

                    <div title='Git'  className='cursor-pointer w-10 h-10 flex items-center justify-center bg-green-600 rounded-full'>
                        <div className='text-3xl'>
                        <FaGitAlt className='my-2 text-white' />
                        </div>
                    </div>

                    <div title='Github'  className='cursor-pointer w-10 h-10 flex items-center justify-center bg-green-600 rounded-full'>
                    <div className='text-3xl'>
                    <BsGithub className='my-2 text-white' />
                    </div>
                    </div>

                    <div title='Vercel'  className='cursor-pointer w-10 h-10 flex items-center justify-center bg-green-600 rounded-full'>
                       <div className='text-2xl'>
                       <SiVercel className='my-2 text-white' />
                       </div>
                        </div>

                    <div title='Netlify'  className='cursor-pointer w-10 h-10 flex items-center justify-center bg-green-600 rounded-full'>
                        <div className='text-3xl'>
                        <SiNetlify className='my-2 text-white' />
                        </div>
                        </div>

                    <div title='Chrome'  className='cursor-pointer w-10 h-10 flex items-center justify-center bg-green-600 rounded-full'>
                       <div className='text-3xl'>
                       <BsBrowserChrome className='my-2 text-white' />
                       </div>
                        </div>

                    <div title='VS Code'  className='cursor-pointer w-10 h-10 flex items-center justify-center bg-green-600 rounded-full'>
                        <div className='text-2xl'>
                        <SiVisualstudio className='my-2 text-white' />
                        </div>
                        </div>
                    </div>
                </div>

                
                <div>
                    <p className='flex justify-start my-5 text-2xl font-semibold'>
                        <VscActivateBreakpoints className='mt-1 mx-3' />
                        Development Skills_
                        </p>

                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">

                    <div  className='cursor-pointer w-32 h-20 border rounded-xl bg-base-100 hover:bg-gradient-to-r from-green-800 to-emerald-300 font-semibold hover:text-white group hover:border-green-500 border-green-400'>
                        <BsFiletypeHtml className='w-full group-hover:text-white mx-auto my-2 text-2xl text-green-800' />
                        HTML
                    </div>

                    <div  className='cursor-pointer w-32 h-20 border rounded-xl bg-base-100 hover:bg-gradient-to-r from-green-800 to-emerald-300 font-semibold hover:text-white group hover:border-green-500  border-green-400'>
                        <BsFiletypeCss className='w-full group-hover:text-white mx-auto my-2 text-2xl text-green-800' />
                        CSS
                    </div>

                    <div  className='cursor-pointer w-32 h-20 border rounded-xl bg-base-100  border-green-400 hover:bg-gradient-to-r from-green-800 to-emerald-300 font-semibold hover:text-white group hover:border-green-500'>
                        <SiTailwindcss className='w-full group-hover:text-white mx-auto my-2 text-2xl text-green-800' />
                        Tailwind CSS
                    </div>

                    <div  className='cursor-pointer w-32 h-20 border rounded-xl  bg-base-100 border-green-400 hover:bg-gradient-to-r from-green-800 to-emerald-300 font-semibold hover:text-white group hover:border-green-500'>
                        <FaBootstrap className='w-full group-hover:text-white mx-auto my-2 text-2xl text-green-800' />
                        Bootstrap
                    </div>

                    <div  className='cursor-pointer w-32 h-20 border rounded-xl bg-base-100 border-green-400 hover:bg-gradient-to-r from-green-800 to-emerald-300 font-semibold hover:text-white group hover:border-green-500'>
                        <SiJavascript className='w-full group-hover:text-white mx-auto my-2 text-2xl text-green-800' />
                        JavaScript
                    </div>


                    <div  className='cursor-pointer w-32 h-20 border rounded-xl bg-base-100 border-green-400 hover:bg-gradient-to-r from-green-800 to-emerald-300 font-semibold hover:text-white group hover:border-green-500'>
                        <FaReact className='w-full group-hover:text-white mx-auto my-2 text-2xl text-green-800' />
                        React
                    </div>

                    <div  className='cursor-pointer w-32 h-20 border rounded-xl bg-base-100 border-green-400 hover:bg-gradient-to-r from-green-800 to-emerald-300 font-semibold hover:text-white group hover:border-green-500'>
                        <FaNodeJs className='w-full group-hover:text-white mx-auto my-2 text-2xl text-green-800' />
                        Node JS
                    </div>

                    <div  className='cursor-pointer w-32 h-20 border rounded-xl bg-base-100 border-green-400 hover:bg-gradient-to-r from-green-800 to-emerald-300 font-semibold hover:text-white group hover:border-green-500'>
                        <SiExpress className='w-full group-hover:text-white mx-auto my-2 text-2xl text-green-800' />
                        Express JS
                    </div>

                    <div  className='cursor-pointer w-32 h-20 border rounded-xl bg-base-100 border-green-400 hover:bg-gradient-to-r from-green-800 to-emerald-300 font-semibold hover:text-white group hover:border-green-500'>
                        <SiMongodb className='w-full group-hover:text-white mx-auto my-2 text-2xl text-green-800' />
                        MongoDB
                    </div>
                    </div>
                </div>
                
                
                <div>
                    <p className='flex justify-start my-5 text-2xl font-semibold'>
                        <VscActivateBreakpoints className='mt-1 mx-3' />
                        Currently Learning_
                        </p>

                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">

                    <path  className='group cursor-pointer flex font-semibold text-transparent text-start bg-clip-text bg-gradient-to-r from-green-400 to-green-600'>
                        <SiRedux className='mt-1 mx-1 text-green-600 group-hover:text-green-800' />
                        <span className='group-hover:text-green-800'>Redux</span>
                    </path>

                    <p  className='group cursor-pointer flex font-semibold text-transparent text-start bg-clip-text bg-gradient-to-r from-green-400 to-green-600'>
                        <SiNextdotjs className='mt-1 mx-1 text-green-600 group-hover:text-green-800' />
                        <span className='group-hover:text-green-800'>Next.js</span>
                    </p>

                    <p data-aos="fade-up-left" className='group cursor-pointer flex font-semibold text-transparent text-start bg-clip-text bg-gradient-to-r from-green-400 to-green-600'>
                        <SiTypescript className='mt-1 mx-1 text-green-600 group-hover:text-text-green-800' />
                        <span className='group-hover:text-green-800'>TypeScript</span>
                    </p>

                    <p  className='group cursor-pointer flex font-semibold text-transparent text-start bg-clip-text bg-gradient-to-r from-green-400 to-green-600'>
                        <BsDatabaseFill className='mt-1 mx-1 text-green-600 group-hover:text-green-800' />
                        <span className='group-hover:text-green-800'>Mongoose</span>
                    </p>

                    
                    </div>
                </div>
                
                
                </div>




                {/* <div data-aos="fade-up-left" className='flex items-center'>
                    <Lottie className='w-96' animationData={Animation} loop={true} />
                </div> */}
                <div>
                    <h1>Lottie</h1>
                </div>
                </div>



        </div>
        </>
    );
};

export default Skills;