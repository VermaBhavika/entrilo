export const Images = (props) => {
    return (
        <>
             <div className="container-xxl flex-grow-1 container-p-y">
             {props?.mainheading && <h5 className="card-header">{props.mainheading}</h5>}
             {props?.Image &&<img src={props.Image} alt="image" lazyloading />}
             </div>
            
        </>
    );
    
    };