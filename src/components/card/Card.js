import './Card.css';
import CustomLink from '../customLink/CustomLink';

function Card({name, title, image, description}){
    let data={
        name,
        title,
        description,
        image
    };

    return(
        <div className="Card">
            <h1>{name}</h1>
            <img src={image} width='200' height='228'/>
            <p>{title}</p>
            <CustomLink className="CustomLink" to="/details" label="Details" data={data} />
        </div>
    )
}

export default Card;