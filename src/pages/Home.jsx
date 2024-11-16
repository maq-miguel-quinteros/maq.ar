import CertificateCard from '../components/atoms/CertificateCard'
import LiDot from '../components/atoms/LiDot'
import ReferenceCard from '../components/atoms/ReferenceCard'

export default function Home() {
    return (
        <div className="min-h-screen flex-[3] transition-all duration-500 dark:bg-zinc-950 dark:text-zinc-50">
            <main className="flex max-w-[1000px] flex-col gap-10 p-5 md:mx-10 md:py-14">
                <div className="space-y-5">
                    <h1 className="text-2xl font-bold md:text-4xl">About</h1>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 md:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis neque porro delectus cupiditate voluptatem iste magni aliquid eius vitae, autem laudantium deserunt tenetur, ab excepturi rerum veritatis qui, vel veniam? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint animi quam error ipsam adipisci, alias aspernatur sequi quidem iste neque rem ad molestiae harum aliquid, facere id vel voluptatibus earum.</p>
                </div>
                <div className="space-y-10">
                    <h2 className="text-1xl font-bold md:text-3xl">Experience</h2>
                    <div className="flex flex-col lg:flex-row lg:gap-20">
                        <ul>
                            <LiDot 
                                field='Trabajo remunerado'
                                place='Nunca jamas'
                                year='2021-2023'
                                detail='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis neque porro delectus cupiditate voluptatem iste magni aliquid eius vitae, autem laudantium deserunt tenetur, ab excepturi rerum veritatis qui, vel'
                            />
                            <LiDot 
                                field='Trabajo remunerado'
                                place='Nunca jamas'
                                year='2021-2023'
                                detail='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis neque porro delectus cupiditate voluptatem iste magni aliquid eius vitae, autem laudantium deserunt tenetur, ab excepturi rerum veritatis qui, vel'
                            />
                        </ul>
                        <ul>
                            <LiDot 
                                field='Trabajo remunerado'
                                place='Nunca jamas'
                                year='2021-2023'
                                detail='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis neque porro delectus cupiditate voluptatem iste magni aliquid eius vitae, autem laudantium deserunt tenetur, ab excepturi rerum veritatis qui, vel'
                            />
                            <LiDot 
                                field='Trabajo remunerado'
                                place='Nunca jamas'
                                year='2021-2023'
                                detail='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis neque porro delectus cupiditate voluptatem iste magni aliquid eius vitae, autem laudantium deserunt tenetur, ab excepturi rerum veritatis qui, vel'
                            />
                            
                        </ul>
                        
                        
                    </div>
                </div>
                <div className='max-w-3xl space-y-8'>
                    <h2 className="text-1xl font-bold md:text-3xl">Certificates</h2>
                    <CertificateCard 
                        title='Certificate of algo en algo'
                        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, at quis? Beatae porro dicta deleniti nam nobis aperiam, sit maxime? Veritatis quia consequatur vero labore expedita tenetur aliquid minima nulla!'/>
                    <CertificateCard 
                        title='Certificate of algo en algo'
                        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, at quis? Beatae porro dicta deleniti nam nobis aperiam, sit maxime? Veritatis quia consequatur vero labore expedita tenetur aliquid minima nulla!'/>
                    <CertificateCard 
                        title='Certificate of algo en algo'
                        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, at quis? Beatae porro dicta deleniti nam nobis aperiam, sit maxime? Veritatis quia consequatur vero labore expedita tenetur aliquid minima nulla!'/>                   
                </div>
                <div className='space-y-10'>
                    <h2 className="text-2xl font-bold md:text-4xl">References</h2>                    
                    <div className='flex flex-wrap gap-10'>
                        <ReferenceCard 
                            job='Prueba de trabajo'
                            reference='Juan carlos algo'
                            phone='321456987'
                            email='asdasd@asdasdasd'
                        />
                        <ReferenceCard 
                            job='Prueba de trabajo'
                            reference='Juan carlos algo'
                            phone='321456987'
                            email='asdasd@asdasdasd'
                        />
                        <ReferenceCard 
                            job='Prueba de trabajo'
                            reference='Juan carlos algo'
                            phone='321456987'
                            email='asdasd@asdasdasd'
                        />
                        <ReferenceCard 
                            job='Prueba de trabajo'
                            reference='Juan carlos algo'
                            phone='321456987'
                            email='asdasd@asdasdasd'
                        />
                    </div>
                </div>
            </main>
        </div>
    )
}