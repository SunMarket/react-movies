function Movie(props) {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster
    } = props;
    return  (
    <div id={id}  className="row movie">
        <div className="col">
            <div className="card">
                <div className="card-image">
                    {
                        poster === 'N/A' ? 
                        <img src={`https://via.placeholder.com/300x450?text={title}`} alt={title} />
                        :
                        <img src={poster} alt={title} />
                    }
                </div>
                <div className="card-content">
                <span className="card-title">{title}</span>
                    <p>Year: {year}, Type: <span>{type}</span></p>
                </div>
            </div>
        </div>
    </div>)
}

export {Movie};

