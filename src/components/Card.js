function Card(props) {
    return (
        <>
            <li className="card-item">
                <a className="card-item-link" href={props.url}>
                    <figure className="card-img-holder">
                        <img src={props.imgDir} alt="" className="card-item-img"/>
                    </figure>
                    <div className="card-item-info">
                        <h3>{props.subtitle}</h3>
                        <p>{props.content}</p>
                    </div>
                </a>
            </li>  
        </>
    )
}

export default Card
