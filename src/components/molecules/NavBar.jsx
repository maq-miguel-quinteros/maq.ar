
import { Anchor } from "../atoms/Anchor";

export const NavBar = ({cd}) => {

    return (
        <nav>
            {cd.map((data) => {
                <Anchor
                    key={data.href} 
                    href={data.href} 
                    text={data.text} 
                    variant={data.variant} />
            })}
        </nav>
    );
}