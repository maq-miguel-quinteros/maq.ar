import CertificateCard from '../atoms/CertificateCard'
import LiDot from '../atoms/LiDot'
import ReferenceCard from '../atoms/ReferenceCard'

export default function TechnologicalBody() {
    return (
        <div className="min-h-screen flex-[3] transition-all duration-500 dark:bg-zinc-950 dark:text-zinc-50">
            <main className="flex max-w-[1000px] flex-col gap-10 p-5 md:mx-10 md:py-14">
                <div className="space-y-5">
                    <h1 className="text-2xl font-bold md:text-4xl">Sobre mí</h1>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 md:text-base">Estoy interesando en varios aspectos de la cultura como la historia, la música y el cine, así como también en los cambios de los medios comunicación y la tecnología de la información, que me gustan a conocer y estudiar, muchas veces por mi cuenta y otras mediante cursos de formación. También estoy particularmente interesado en la programación para la web, en lo relacionado al manejo de bases de datos desde el backend y la lógica para la presentación de esos datos en el frontend. Busco aprender más sobre los lenguajes de programación que ya conozco, en lo relacionado a estructura de proyectos, frameworks o librerías de uso en la actualidad. Soy proactivo y busco actualizarme constantemente.</p>
                </div>
                <div className="space-y-10">
                    <h2 className="text-1xl font-bold md:text-3xl">Experiencia profesional</h2>
                    <div className="flex flex-col lg:flex-row lg:gap-20">
                        <ul>
                            <LiDot 
                                field='Analista de Sistemas'
                                place='Banco Macro'
                                year='2015 al presente'
                                detail='Analista de sistemas en el área de TI'
                            />
                            <LiDot 
                                field='Operador Telefónico'
                                place='Atento Argentina S.A.'
                                year='2011-2014'
                                detail='Soporte técnico de la Mesa de Ayuda de Telefónica (T-LATAM).'
                            />
                        </ul>
                        <ul>
                            <LiDot 
                                field='Operador Telefónico'
                                place='Teleperformance'
                                year='2008-2011'
                                detail='Soporte técnico de la Mesa de Ayuda de Arnet'
                            />
                            <LiDot 
                                field='Soporte técnico'
                                place='S.I. Servicios Informáticos'
                                year='2007'
                                detail="Soporte técnico general. Reparación de validadoras y ticketeras. Instalación y reparación de CPU's. Servicio de backup de datos."
                            />
                            
                        </ul>
                        
                        
                    </div>
                </div>
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
            </main>
        </div>
    )
}