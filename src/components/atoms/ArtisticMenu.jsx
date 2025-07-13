// eslint-disable-next-line react/prop-types
export default function ArtisticMenu({children}){
    return (
        <div className="flex justify-center gap-5 p-5 dark:border-yellow-700 border-yellow-700">                       
            {children}
        </div>
    )
}