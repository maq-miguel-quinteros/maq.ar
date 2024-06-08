

export const Image = ({src, alt, variant, children}) => {
    return (
        <figure>
            <img  src={src} alt={alt} $variant={variant}/>
            {children && 
                <figcaption>{children}</figcaption>}
        </figure>
    )
}
