
// eslint-disable-next-line react/prop-types
export default function LiDot({field, place, year, detail}) {
    return (
        <li className='relative flex flex-col gap-1 border-l p-6 
                        before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:translate-y-1/2 before:rounded-full before:bg-zinc-950 dark:before:bg-zinc-50 before:transform'>
                            <span className='font-semibold md:text-lg'>{field}</span>
                            <span className='font-light'>{place}</span>
                            <span className='font-gray-400'>{year}</span>
                            <span className="text-sm text-gray-600 dark:text-gray-400">{detail}</span>
                        </li>
    )
}
