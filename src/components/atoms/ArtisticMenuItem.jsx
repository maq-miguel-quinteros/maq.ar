import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
export default function ArtisticMenuItem({ name, path }) {
    return (
        <Link to={path}>
            <span className='rounded-xl text-center px-3
            bg-yellow-950 text-yellow-50
            dark:bg-yellow-50 dark:text-yellow-950'>{name}</span>
        </Link>
    )
}