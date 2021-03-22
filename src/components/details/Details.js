import CustomLink from "../customLink/CustomLink";
import "./Details.css";

export default function Details(props) {
    const details = props.location.state.data;
    console.log(details.image);
return (
    <div className="DetailsPage">
         <CustomLink to="/" label="Home" className="GoBack" />
         <div className="DetailsCard">
            <h1>{details.name}</h1>
            <div className="Description">
                <img src={details.image}/>
                <p>{details.description}</p>
            </div>
            
         </div>
        
    </div>
    
)
}