import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
export default function ArtisticBookItem({ children, path, isActive }) {
    return (
        <Link to={isActive?path:'#'}>
            {children}
        </Link>
    )
}