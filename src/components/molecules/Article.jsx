

export const Article = ({variant, children}) => {
    return (
        <article $variant={variant}>
            {children}
        </article>
    )
}
