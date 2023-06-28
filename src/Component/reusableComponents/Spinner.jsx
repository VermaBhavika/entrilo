export const Spinner = (props)=>{
  return(
      <>
       <div className="container-xxl flex-grow-1 container-p-y">
           <div className="card mb-4">
           {props.mainheading && <h5 className="card-header">{props.mainheading}</h5>}
              <div className="card-body">
                <div className="row gy-3">
                  <div className="col-md">
                    <div className="demo-inline-spacing">
                      <div className="spinner-border spinner-border-lg text-primary" role="status">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
      </>
  );
};