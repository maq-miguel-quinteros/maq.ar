
import Facebook from '../../assets/icons/facebook.svg?react';
import Instagram from '../../assets/icons/instagram.svg?react';
import Twitter_x from '../../assets/icons/twitter-x.svg?react';


export const Icon = ({type}) => {

    return(
        <>
            {type === 'facebook' && <Facebook />}
            {type === 'instagram' && <Instagram />}
            {type === 'twitter-x' && <Twitter_x />}
        </>
    );
}