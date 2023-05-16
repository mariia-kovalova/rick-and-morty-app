import { EpisodeCard } from "./EpisodeCard.styled"; 

const Card = ({children}) => {
    return (
        <EpisodeCard >
            {children}
        </EpisodeCard>
    )
}

export default Card;