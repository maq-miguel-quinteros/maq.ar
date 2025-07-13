// eslint-disable-next-line react/prop-types
export default function Menu({children}){
    return (
        <div className="flex justify-center gap-5 p-5 dark:border-gray-700">                       
            {children}
        </div>
    )
}
