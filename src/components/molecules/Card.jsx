import { Icon } from "../atoms/Icon"
import { Text } from "../atoms/Text"
import { Title } from "../atoms/Title"

export const Card = ({cd}) => {

    return (
        
            <div>
                <Icon 
                    type={cd.icon.type} />
                <Title 
                    variant={cd.title.variant}
                    level={cd.title.level} 
                    text={cd.title.text} />
                <Text 
                    variant={cd.text.variant} 
                    text={cd.text.text} />
            </div>
        
    )
}
