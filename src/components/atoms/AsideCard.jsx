

// eslint-disable-next-line react/prop-types
export default function AsideCard({title, children}) {
    return (
        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
            {title && (<h2 className='text-base font-semibold md:text-2xl'>{title}</h2>)}            
            {children}
        </div>
    )
}
