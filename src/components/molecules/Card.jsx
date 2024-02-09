import { Icon } from "../atoms/Icon"
import { Text } from "../atoms/Text"
import { Title } from "../atoms/Title"

export const Card = ({ compData }) => {

    return (
        
            <div>
                <Icon 
                    type={compData.icon.type} />
                <Title 
                    variant={compData.title.variant}
                    level={compData.title.level} 
                    text={compData.title.text} />                    
                <Text 
                    variant={compData.text.variant} 
                    text={compData.text.text} />
            </div>
        
    )
}
