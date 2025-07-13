import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
export default function MenuItem({ name, path }) {
    return (
        <Link to={path}>
            <span className='rounded-xl bg-zinc-950 text-zinc-50 px-3 text-center dark:bg-zinc-50 dark:text-zinc-950'>{name}</span>
        </Link>
    )
}