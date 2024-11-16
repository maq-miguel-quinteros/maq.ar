import { BiCurrentLocation, BiEnvelope, BiLogoGithub, BiLogoLinkedin, BiMoon, BiPhone, BiSun } from 'react-icons/bi'
import image from '../assets/profile.png'
import AsideCard from '../components/atoms/AsideCard'
import LiDot from '../components/atoms/LiDot'
import SpanItem from '../components/atoms/SpanItem'

// eslint-disable-next-line react/prop-types
export default function HeaderLeft({darkMode, toggleDarkMode}) {

    return (
        <div className="
        min-h-screen flex-1 relative p-10 transition-all duration-500
        sm:border-r
        dark:bg-zinc-950 dark:text-zinc-50 dark:border-zinc-700">
            
            <div className="flex flex-col gap-5">
                <div className="flex flex-col items-center justify-center gap-5">
                    <img src={image} alt="profile" className='w-32 rounded-full' />
                    <div className='text-center space-y-1'>
                        <h2 className='text-4xl font-light '>Miguel <span className='font-semibold'>Quinteros</span></h2>
                        <h4 className='text-xl font-light'>Desarrollador FullStack</h4>
                    </div>
                    <button className='absolute right-10 top-10' onClick={toggleDarkMode}>
                        {darkMode ? 
                        (<BiSun className='text-2xl'/>):
                        (<BiMoon className='text-2xl'/>)}
                    </button>
                </div>

                <AsideCard>
                    <ul className='space-y-3'>
                        <li className='flex items-center gap-2'>
                            <BiCurrentLocation className='text-xl' />
                            <span>Av. Francisco de Aguirre 140</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <BiEnvelope className='text-xl' />
                            <span>maq.miguel.quinteros@gmail.com</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <BiPhone className='text-xl' />
                            <span>+54 0381 155 355225</span>
                        </li>
                    </ul>
                </AsideCard>

                <AsideCard title='SOCIAL'>
                    <ul className='space-y-3'>
                        <li className='flex items-center gap-2'>
                            <BiLogoGithub className='text-xl' />
                            <span>@maq-miguel-quinteros</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <BiLogoLinkedin className='text-xl' />
                            <span>@maq-miguel-quinteros</span>
                        </li>                        
                    </ul>
                </AsideCard>

                <AsideCard title='EDUCATION'>
                    <ul>
                        <LiDot
                            field='Programador'
                            place='Universidad de colorado'
                            year='2020-2024'
                        />
                        <LiDot 
                            field='Prueba 2'
                            place='Carolina'
                            year='2014-2018'
                        />
                    </ul>
                </AsideCard>
                
                <AsideCard title='SKILLS'>
                    <div className='flex flex-wrap gap-3'>
                        <div className='flex flex-wrap gap-3'>
                            <SpanItem name='HTML'/>
                            <SpanItem name='CSS'/>
                            <SpanItem name='JavaScript' />
                            <SpanItem name='React' />
                        </div>
                        <div className='flex flex-wrap gap-3'>
                            <SpanItem name='Python'/>
                            <SpanItem name='PostgreSQL'/>
                        </div>
                    </div>
                    
                </AsideCard>
                <AsideCard title='HOBBIES'>
                    <div className='flex flex-wrap gap-16 p-3'>
                        <ul className='flex list-disc flex-col gap-3'>
                            <li>Estudiar</li>
                            <li>Películas</li>
                            <li>VideGames</li>
                        </ul>
                        <ul className='flex list-disc flex-col gap-3'>
                            <li>Prueba 2</li>
                            <li>algo algo</li>
                            <li>Cosas</li>
                        </ul>
                    </div>
                </AsideCard>
                <AsideCard title='LANGUAGES'>
                    <ul className='flex list-disc flex-col gap-3'>
                        <li>Español</li>
                        <li>Ingles</li>
                    </ul>
                </AsideCard>
            </div>
        </div>
    )
}
