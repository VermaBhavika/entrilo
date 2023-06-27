import Avatar1 from '../../assests/img/avatars/1.png'

export const Skeleton = (props) => {
    return (
        <>
            <div className="container loading-skeleton">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <img src={Avatar1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{props.title}</h5>
                                <p className="card-text">{props.description}</p>
                                <a href="#" className="btn btn-primary">{props.button}</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={Avatar1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{props.title}</h5>
                                <p className="card-text">{props.description}</p>
                                <a href="#" className="btn btn-primary">{props.button}</a>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
          
        </>
    )
}