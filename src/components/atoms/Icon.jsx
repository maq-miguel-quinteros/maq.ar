import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg'
/* import { ReactComponent as Instagram } from '../../assets/icons/instagram.svg';
import { ReactComponent as Twitter_x } from '../../assets/icons/twitter-x.svg'; */

export const Icon = ({type}) => {

    return(
        <>
            {type === 'facebook' && <Facebook />}
            {type === 'instagram' && <Instagram />}
            {type === 'twitter-x' && <Twitter_x />}
        </>
    );
}