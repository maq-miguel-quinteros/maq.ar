import { BiCurrentLocation, BiEnvelope, BiLogoBlogger, BiMoon, BiPhone, BiSun, BiSolidBook, BiLogoYoutube, BiLogoFacebookCircle, BiLogoInstagramAlt, BiLogoTwitter } from 'react-icons/bi'
import { SiWattpad } from "react-icons/si";
import image from '../../assets/profile.png'
import ArtisticAsideCard from '../atoms/ArtisticAsideCard'
import ArtisticLiDot from '../atoms/ArtisticLiDot'
import SpanItem from '../atoms/SpanItem'
import ArtisticMenu from '../atoms/ArtisticMenu'
import ArtisticMenuItem from '../atoms/ArtisticMenuItem'

// eslint-disable-next-line react/prop-types
export default function ArtisticLeft({ darkMode, toggleDarkMode }) {

    return (
        <div className="
        min-h-screen flex-1 relative p-10 transition-all duration-500
        sm:border-r
        bg-yellow-50 text-yellow-950 border-yellow-700
        dark:bg-yellow-950 dark:text-yellow-50 dark:border-yellow-700">

            <div className="flex flex-col gap-5">
                <div className="flex flex-col items-center justify-center gap-5">
                    <img src={image} alt="profile" className='w-32 rounded-full' />
                    <div className='text-center space-y-1'>
                        <h2 className='text-4xl font-light '>Miguel Ángel <span className='font-semibold'>Quinteros</span></h2>
                        <h4 className='text-xl font-light'>Escritor</h4>
                    </div>
                    <button className='absolute right-10 top-10' onClick={toggleDarkMode}>
                        {darkMode ?
                            (<BiSun className='text-2xl' />) :
                            (<BiMoon className='text-2xl' />)}
                    </button>
                </div>
                <ArtisticMenu>
                    <div className='flex flex-wrap gap-3'>
                        <div className='flex flex-wrap gap-3'>
                            <ArtisticMenuItem
                                name='laboral'
                                path={'/'} />
                            <ArtisticMenuItem name='artístico'
                                path={'artistico'} />
                        </div>
                    </div>
                </ArtisticMenu>

                <ArtisticAsideCard>
                    <ul className='space-y-3'>
                        <li className='flex items-center gap-2'>
                            <BiCurrentLocation className='text-xl' />
                            <span>Av. Francisco de Aguirre 140, CP4000</span>
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
                </ArtisticAsideCard>

                <ArtisticAsideCard title='LIBROS'>
                    <ul className='space-y-5'>
                        <li>
                            <div className='flex items-center gap-2'>
                                <BiSolidBook className='text-2xl text-red-900' />
                                <span><a className='dark:hover:bg-red-700 hover:bg-red-700 hover:text-yellow-50' href='#' target='' >La Casa de los Espejos</a></span>
                            </div>
                            <span className='text-xs font-light'>Puerta Roja Ediciones. ISBN: 978-987-1992-50-8</span>
                        </li>
                        <li >
                            <div className='flex items-center gap-2'>
                                <BiSolidBook className='text-4xl text-slate-900 dark:text-slate-900' />
                                <span><a className='dark:hover:bg-slate-700 hover:bg-slate-700 hover:text-yellow-50' href='#' target=''>Algunas Notas Sobre las Reuniones del Club de Ideadores Taciturnos</a></span>
                            </div>
                            <span className='text-xs font-light'>Ediciones del Parque. ISBN: 978-987-1992-50-8</span>
                        </li>
                        <li >
                            <div className='flex items-center gap-2'>
                                <BiSolidBook className='text-4xl dark:text-green-900 text-green-900' />
                                <span><a className='dark:hover:bg-green-700 hover:bg-green-700 hover:text-yellow-50' href='#' target=''>Ernesto Pérez Pascualino y sus Cuentos de Ciencia-Ficción Popular</a></span>
                            </div>
                            <span className='text-xs font-light'>Ediciones del Parque. ISBN: 978-987-33-2539-7</span>

                        </li>
                    </ul>
                </ArtisticAsideCard>

                <ArtisticAsideCard title='PUBLICACIONES DIGITALES'>
                    <ul className='space-y-3'>
                        <li className='flex items-center gap-2'>
                            <BiLogoBlogger className='text-xl' />
                            <span><a className='dark:hover:bg-yellow-700 hover:bg-yellow-700 hover:text-yellow-50' href='https://madrigueradelpichon.blogspot.com/' target='_blank' >la madriguera del pichón</a></span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <SiWattpad className='text-xl' />
                            <span><a className='dark:hover:bg-orange-700 hover:bg-orange-700 hover:text-yellow-50' href='https://www.wattpad.com/user/maq_miguel' target='_blank'>@maq_miguel</a></span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <BiLogoYoutube className='text-xl' />
                            <span><a className='dark:hover:bg-red-700 hover:bg-red-700 hover:text-yellow-50' href='https://www.youtube.com/@maq.miguel.quinteros' target='_blank'>@maq.miguel.quinteros (en construcción)</a></span>
                        </li>
                    </ul>
                </ArtisticAsideCard>

                <ArtisticAsideCard title='TALLERES'>
                    <ul>
                        <ArtisticLiDot
                            field='Guion Cinematográfico'
                            place='Nicolás Rapisarda'
                            year='2025'
                        />
                        <ArtisticLiDot
                            field='Narrativa: Narrar los Cuerpos'
                            place='María José Bovi en Madre Selva Libros'
                            year='2022'
                        />
                        <ArtisticLiDot
                            field='Escritura Poética y Narrativa: El Riesgo'
                            place='María José Bovi y Mateo Diosque en La Pajarera'
                            year='2022'
                        />
                        <ArtisticLiDot
                            field='Narrativa: La Topadora'
                            place='Monoambiente Editorial en Ayelén Biblioteca Popular de Cultura LGBT+'
                            year='2021'
                        />
                        <ArtisticLiDot
                            field='Narrativa: Miniambientes para la Comunidad'
                            place='Monoambiente Editorial'
                            year='2021'
                        />
                    </ul>
                </ArtisticAsideCard>
                {/**
                <ArtisticAsideCard title='HABILIDADES'>
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
                </ArtisticAsideCard>                
                <ArtisticAsideCard title='INTERESES'>
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
                </ArtisticAsideCard>
                */}
                <ArtisticAsideCard title='REDES SOCIALES'>
                    <ul className='space-y-3'>
                        <li className='flex items-center gap-2'>
                            <BiLogoFacebookCircle className='text-2xl' />
                            <span><a className='dark:hover:bg-blue-700 hover:bg-blue-700 hover:text-yellow-50' href='https://www.facebook.com/maq.miguel.quinteros' target='_blank' >@maq.miguel.quinteros</a></span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <BiLogoInstagramAlt className='text-2xl' />
                            <span><a className='dark:hover:bg-amber-700 hover:bg-amber-700 hover:text-yellow-50' href='https://www.instagram.com/maq.miguel.quinteros/' target='_blank'>@maq.miguel.quinteros</a></span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <BiLogoTwitter className='text-2xl' />
                            <span><a className='dark:hover:bg-sky-700 hover:bg-sky-700 hover:text-yellow-50' href='https://x.com/maq_miguel' target='_blank'>@maq_miguel</a></span>
                        </li>
                    </ul>
                </ArtisticAsideCard>
                {/** 
                <ArtisticAsideCard title='IDIOMAS'>
                    <ul className='flex list-disc flex-col gap-3'>
                        <li>Español</li>
                        <li>Ingles</li>
                    </ul>
                </ArtisticAsideCard>
                */}
            </div>
        </div>
    )
}
