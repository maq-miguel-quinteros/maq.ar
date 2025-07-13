
// eslint-disable-next-line react/prop-types
export default function ArtisticLiDot({field, place, year, detail}) {
    return (
        <li className='relative flex flex-col gap-1 border-l p-6 
                        before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:translate-y-1/2 before:rounded-full before:bg-yellow-950 dark:before:bg-yellow-50 before:transform'>
                            <span className='font-semibold md:text-lg'>{field}</span>
                            <span className='font-light'>{place}</span>
                            <span className=''>{year}</span>
                            <span className="text-sm text-yellow-600 dark:text-yellow-400">{detail}</span>
                        </li>
    )
}
