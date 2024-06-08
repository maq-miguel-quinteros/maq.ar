

export const Card = ({variant, children}) => {
    return (
        <div $variant={variant}>
            {children}
        </div>
    )
}
