import CertificateCard from '../atoms/CertificateCard'
import ArtisticLiDot from '../atoms/ArtisticLiDot'
import ReferenceCard from '../atoms/ReferenceCard'

export default function ArtisticBody() {
    return (
        <div className="min-h-screen flex-[3] transition-all duration-500
        bg-yellow-50 text-yellow-950 dark:bg-yellow-950 dark:text-yellow-50">
            <main className="flex max-w-[1000px] flex-col gap-10 p-5 md:mx-10 md:py-14">
                <div className="space-y-5">
                    <h1 className="text-2xl font-bold md:text-4xl">Sobre mí</h1>
                    <p className="text-sm text-yellow-600 dark:text-yellow-400 md:text-base">ESTO TENGO QUE ARMAR TODAVÍA Estoy interesando en varios aspectos de la cultura como la historia, la música y el cine, así como también en los cambios de los medios comunicación y la tecnología de la información, que me gustan a conocer y estudiar, muchas veces por mi cuenta y otras mediante cursos de formación. También estoy particularmente interesado en la programación para la web, en lo relacionado al manejo de bases de datos desde el backend y la lógica para la presentación de esos datos en el frontend. Busco aprender más sobre los lenguajes de programación que ya conozco, en lo relacionado a estructura de proyectos, frameworks o librerías de uso en la actualidad. Soy proactivo y busco actualizarme constantemente.</p>
                </div>
                <div className="space-y-10">
                    <h2 className="text-1xl font-bold md:text-3xl">Experiencias</h2>
                    <div className="flex flex-col lg:flex-row lg:gap-20">
                        <ul>
                            <ArtisticLiDot 
                                field='Festival Intergaláctico de Escritores Oficial (FIDEO)'
                                place='Museo de la Universidad Nacional de Tucumán (MUNT)'
                                year='2017 - 2019'
                                detail='Colaborador. Parte del Colectivo Cultural Escuchara. Espacio de presentación de trabajos de artistas de distinta índole, mesa de debate, feria de libros e intervenciones artísticas.'
                            />
                            <ArtisticLiDot 
                                field='El Camino de los Escritores'
                                place='Varios espacios de la provincia de Tucumán'
                                year='2018'
                                detail='Colaborador. Parte del Colectivo Cultural Escuchara. Repaso por la historia y los espacios que habitaron escritores tucumanos dentro de la capital de la provincia.'
                            />
                            <ArtisticLiDot 
                                field='Silent Reading'
                                place='Museo Timoteo Navarro'
                                year='2018'
                                detail='Colaborador. Parte del Colectivo Cultural Escuchara. Espacio de lectura silenciosa dentro de las instalaciones del museo acompañado de música.'
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
                {/** 
                <div className='max-w-3xl space-y-8'>
                    <h2 className="text-1xl font-bold md:text-3xl">Educación</h2>
                    <CertificateCard 
                        title='Licenciatura en Historia (tesis pendiente)'
                        text='Universidad Nacional de Santiago del Estero'
                    />
                    <CertificateCard 
                        title='Licenciatura en Tecnología Educativa (tesis pendiente)'
                        text='U.T.N. Facultad Regional Tucumán'/>
                    <CertificateCard 
                        title='Profesorado de Historia'
                        text='I.E.S. Prof. Manuel Marchetti'/>
                    <CertificateCard 
                        title='Ingeniería en Sistemas de Información (cursado hasta 3er año)'
                        text='U.T.N. Facultad Regional Tucumán'/>                   
                </div>
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