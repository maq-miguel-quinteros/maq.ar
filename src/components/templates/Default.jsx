import { NavBar } from "../molecules/NavBar";
import { Header } from "../organism/Header";


export const Default = ({cd}) => {
    
    return (
        <>
            <Header cd={cd.header} />
            <NavBar cd={cd.navbar} />
        </>
    );
}