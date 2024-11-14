

// eslint-disable-next-line react/prop-types
export default function ReferenceCard({job, reference, phone, email}) {
    return (
        <div className='text-baseline space-y-1'>
            <h4 className='text-lg font-light'>{job}</h4>
            <h3 className='text-base font-semibold  md:text-2xl'>{reference}</h3>
            {phone && <p className='text-zinc-600 dark:text-zinc-400'>Phone: {phone}</p>}
            {email && <p className=''>Email: {email}</p>}
        </div>
    )
}
