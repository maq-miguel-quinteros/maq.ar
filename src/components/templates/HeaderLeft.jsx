import { BiCurrentLocation, BiEnvelope, BiLogoGithub, BiLogoLinkedin, BiMoon, BiPhone, BiSun } from 'react-icons/bi'
import image from '../../assets/profile.png'
import AsideCard from '../atoms/AsideCard'
import LiDot from '../atoms/LiDot'
import SpanItem from '../atoms/SpanItem'

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

                <AsideCard title='REDES SOCIALES'>
                    <ul className='space-y-3'>
                        <li className='flex items-center gap-2'>
                            <BiLogoGithub className='text-xl' />
                            <span><a className='dark:hover:bg-zinc-700' href='https://github.com/maq-miguel-quinteros' target='_blank' >@maq-miguel-quinteros</a></span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <BiLogoLinkedin className='text-xl' />
                            <span><a className='dark:hover:bg-zinc-700' href='https://www.linkedin.com/in/maq-miguel-quinteros/' target='_blank'>@maq-miguel-quinteros</a></span>
                        </li>                        
                    </ul>
                </AsideCard>

                <AsideCard title='CURSOS'>
                    <ul>
                        <LiDot 
                            field='Desarrollador Web JAVA'
                            place='MindHub'
                            year='2023'
                        />
                        <LiDot 
                            field='Desarrollador Web Front End'
                            place='MindHub'
                            year='2023'
                        />
                        <LiDot 
                            field='Reparador de PC'
                            place='INI Computación'
                            year='2003'
                        />
                        <LiDot
                            field='Operador de PC'                            
                            year='1999'
                        />                        
                    </ul>
                </AsideCard>
                
                <AsideCard title='HABILIDADES'>
                    <div className='flex flex-wrap gap-3'>
                        <div className='flex flex-wrap gap-3'>
                            <SpanItem name='HTML'/>
                            <SpanItem name='CSS'/>
                            <SpanItem name='JavaScript' />
                            <SpanItem name='React' />
                        </div>
                        <div className='flex flex-wrap gap-3'>
                            <SpanItem name='JAVA'/>
                            <SpanItem name='Python'/>
                            <SpanItem name='PostgreSQL'/>
                        </div>
                    </div>
                    
                </AsideCard>
                <AsideCard title='INTERESES'>
                    <div className='flex flex-wrap gap-16 p-3'>
                        <ul className='flex list-disc flex-col gap-3'>
                            <li>Literatura de ciencia ficción</li>
                            <li>Música</li>
                            <li>Cine clásico</li>
                            <li>Juegos de estrategia</li>                            
                        </ul>
                        <ul className='flex list-disc flex-col gap-3'>
                            <li>Bandas de rock en vivo</li>
                            <li>Bailar salsa</li>
                            <li>Frontón</li>
                        </ul>
                    </div>
                </AsideCard>
                <AsideCard title='IDIOMAS'>
                    <ul className='flex list-disc flex-col gap-3'>
                        <li>Español</li>
                        <li>Ingles</li>
                    </ul>
                </AsideCard>
            </div>
        </div>
    )
}
