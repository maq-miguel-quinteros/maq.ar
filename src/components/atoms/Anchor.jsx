
export const Anchor = ({href, variant, children}) => {
    return (
        <a href={href} $variant={variant}>
            {children}
        </a>
    )
}