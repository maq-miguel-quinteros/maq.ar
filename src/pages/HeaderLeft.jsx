import { BiMoon, BiSun } from 'react-icons/bi'
import image from '/public/profile.png'

export default function HeaderLeft({darkMode, toggleDarkMode}) {

    return (
        <div className="
        min-h-screen flex-1 relative p-10 transition-all duration-500
        sm:border-r
        dark:bg-black dark:text-white dark:border-gray-700">
            
            <div className="flex flex-col gap-5">
                <div className="flex flex-col items-center justify-center gap-5">
                    <img src={image} alt="profile" className='w-32 rounded-full' />
                    <div className='text-center space-y-1'>
                        <h2 className='text-4xl font-light '>Miguel <span className='font-semibold'>Quinteros</span></h2>
                        <h4 className='text-xl font-light'>Desarrollador FullStack</h4>
                    </div>
                    <button className='absolute right-10 top-10' onClick={toggleDarkMode}>
                        {
                            darkMode ? (
                                <BiSun className='text-2xl' />
                            ) : (
                                <BiMoon className='text-2xl' />
                            )
                        }
                    </button>
                </div>

            </div>
        </div>
    )
}
