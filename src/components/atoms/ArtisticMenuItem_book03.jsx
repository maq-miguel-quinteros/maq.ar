import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
export default function ArtisticMenuItem_book03({ name, path, isActive }) {
    return (
        <Link to={isActive?path:'#'}>
            <span className='rounded-xl text-center px-3
            bg-sky-950 text-sky-50
            dark:bg-sky-50 dark:text-sky-950'>{name}</span>
        </Link>
    )
}