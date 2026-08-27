import { BiLogoInstagramAlt } from 'react-icons/bi'

import CertificateCard from '../atoms/CertificateCard'
import ArtisticLiDot from '../atoms/ArtisticLiDot'
import ReferenceCard from '../atoms/ReferenceCard'
import CarruselReels from '../atoms/CarruselReels'

export default function ArtisticBody() {
    const misReels = [
    "https://www.instagram.com/reel/DQnKZBZEXNc/",
    "https://www.instagram.com/reel/DQp1N7qjCij/",
  ];

    return (
        <div className="min-h-screen flex-[3] transition-all duration-500
        bg-sky-50 text-sky-950 dark:bg-sky-950 dark:text-sky-50">
            <main className="flex max-w-[1000px] flex-col gap-10 p-5 md:mx-10 md:py-14">
                <div className="space-y-5">
                    <h1 className="text-2xl font-bold md:text-4xl">El libro</h1>
                    <p className="text-sm text-yellow-600 dark:text-yellow-400 md:text-base">
                        En <span className='italic font-bold'>La casa de los espejos</span> hay atrapadas diez historias que desbaratan toda certeza. El número perfecto para abrir un abismo psicológico, político e íntimo, donde el cuerpo, el amor, el miedo y la justicia se mezclan sin salida fácil. Una sola casa en la que se espejan y deforman voces, estructuras narrativas, personajes. Y nada es lo que parece. Un manual para asesinos. Un antiproceso que nunca ocurrió. Una no-cita tan fallida como inolvidable. Teorías conspirativas, listas negras, espectros del pasado. Un superhéroe marginal, una hija que regresa desde el olvido, una casa donde la identidad se quiebra en pedazos. Los ausentes, los muy presentes. Las sombras paranoicas, las preguntas que insisten. En el número perfecto, se cruzan el realismo, el delirio y la memoria. Ya nada es lo que parece. No hay salida. Solo espejos. E infinitas formas de que se rompan.                    
                    </p>
                    <p className="text-sm text-yellow-600 dark:text-yellow-400 md:text-base text-right font-bold">
                        María José Bovi
                    </p>
                    <span className='flex'>
                        <a 
                        className='flex dark:hover:bg-amber-700 hover:bg-amber-700 hover:text-yellow-50 rounded pr-1' href='https://www.instagram.com/stories/highlights/17861493372518846/' target='_blank'>
                            <BiLogoInstagramAlt className='text-2xl' />reels promocionales</a>
                    </span>
                   <main style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>Mis Últimos Reels</h1>
      
      {/* Llamada al componente pasándole la lista por props */}
      <CarruselReels reels={misReels} />
    </main>
                </div>
                <div className="space-y-10">
                    <h2 className="text-1xl font-bold md:text-3xl">Los cuentos</h2>
                    <div className="flex flex-col lg:flex-row lg:gap-20">
                        <ul>
                            <ArtisticLiDot
                                field='Perfectxs Desconocidxs'
                                place='Casa Cultural Dardo Orqueda'
                                year='2025'
                                detail='Colaborador. Colectivo de artistas que buscan intervenir poéticamente los espacios y activar la palabra como herramienta de transformación personal y colectiva.'
                            />
                            <ArtisticLiDot
                                field='Festival Intergaláctico de Escritores Oficial (FIDEO)'
                                place='Casa de la Cultura de Tucumán, Museo de la Universidad Nacional de Tucumán (MUNT), Casa del Bicentenario'
                                year='2017 - 2019'
                                detail='Colaborador. Parte del Colectivo Cultural Escuchara. Espacio de presentación de trabajos de artistas de distinta índole, mesa de debate, feria de libros e intervenciones artísticas.'
                            />
                            <ArtisticLiDot
                                field='Silent Reading'
                                place='Museo Timoteo Navarro'
                                year='2018'
                                detail='Colaborador. Parte del Colectivo Cultural Escuchara. Espacio de lectura silenciosa dentro de las instalaciones del museo acompañado de música.'
                            />
                            <ArtisticLiDot
                                field='La Huella de los Escritores'
                                place='Varios espacios de la provincia de Tucumán'
                                year='2018'
                                detail='Colaborador. Parte del Colectivo Cultural Escuchara. Repaso por la historia y los espacios que habitaron escritores tucumanos dentro de la capital de la provincia.'
                            />
                        </ul>
                        <ul>
                            <ArtisticLiDot
                                field='Música y Letras'
                                place='Museo de la Universidad Nacional de Tucumán (MUNT)'
                                year='2016 - 2019'
                                detail='Colaborador. Parte del Colectivo Cultural Escuchara. Espacio de presentación textos literarios, música en vivo, feria de libros e intervenciones artísticas.'
                            />
                            <ArtisticLiDot
                                field='Letras al Fondo'
                                place='360 Restó y La Cafetería'
                                year='2016 - 2019'
                                detail='Colaborador. Parte del Colectivo Cultural Escuchara. Café literario y cultural.'
                            />
                            <ArtisticLiDot
                                field='Arriba el Literario'
                                place='Hurlingham Bar House'
                                year='2012'
                                detail='Colaborador. Café literario abierto pensado como un "Bacanal de escritos y escuchas".'
                            />
                            <ArtisticLiDot
                                field='Jueves Café Literario'
                                place='Pangea Bar - Cooperativa'
                                year='2007 - 2010'
                                detail='Participante. Espacio abierto ideado para socializar textos literarios.'
                            />

                        </ul>

                    </div>
                </div>
                <div className='max-w-3xl space-y-8'>
                    <h2 className="text-1xl font-bold md:text-3xl">Presentaciones</h2>
                    <CertificateCard
                        title='Carrera Intensiva de Guion y Dirección Audiovisual'
                        text='Escuela Profesional de Cine y Artes Audiovisuales de Eliseo Subiela (2021)'
                    />
                </div>
                {/** 
                <div className='space-y-10'>
                    <h2 className="text-2xl font-bold md:text-4xl">Referencias</h2>                    
                    <div className='flex flex-wrap gap-10'>
                        <ReferenceCard 
                            job='Banco Macro'
                            reference='Jorge Cruz'
                            phone='3816350741'
                            email='jorgearnaldocruz@macro.com.ar'
                        />
                        <ReferenceCard 
                            job='Atento Argentina S.A.'
                            reference='Irene Mata'
                            phone='3815214649'
                            email='matairene087@gmail.com'
                        />
                        <ReferenceCard 
                            job='Teleperformance'
                            reference='Gonzalo Berenguel'
                            phone='3815865843'
                            email='gonzalo.berenguel@gmail.com'
                        />
                        <ReferenceCard 
                            job='S.I. Servicios Informáticos'
                            reference='Darío Perez'
                            phone='3814098162'
                            email='perezdario@gmail.com'
                        />
                    </div>
                </div>
                */}
            </main>
        </div>
    )
}