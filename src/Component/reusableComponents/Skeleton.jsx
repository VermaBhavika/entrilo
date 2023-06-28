export const Skeleton = (props) => {
    return (
        <>
            <div className="container loading-skeleton">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            {props?.image && <img src={props.image} className="card-img-top" alt="..." />}
                            <div className="card-body">
                            {props?.title && <h5 className="card-title">{props.title}</h5>}
                            {props?.description &&   <p className="card-text">{props.description}</p>}
                            {props?.button &&     <a href="#" className="btn btn-primary">{props.button}</a>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
        </>
    )
}