

// eslint-disable-next-line react/prop-types
export default function CertificateCard({title, text}) {
    return (
        <div className='text-baseline space-y-3'>
            <h3 className="text-sm font-semibold md:text-lg">{title}</h3>
            <p className='text-sm text-zinc-600 dark:text-zinc-400 md:text-base'>{text}</p>
        </div>
    )
}
