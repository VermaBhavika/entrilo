export const Spinner = ()=>{
    return(
        <>
         <div className="container-xxl flex-grow-1 container-p-y">
             <div className="card mb-4">
                <h5 className="card-header">Spinner</h5>
                <div className="card-body">
                  <div className="row gy-3">
                  
                    <div className="col-md">
                      <div className="text-light small fw-semibold">Large</div><br></br>
                      <div className="demo-inline-spacing">
                        <div className="spinner-border spinner-border-lg text-primary" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-border spinner-border-lg text-secondary" role="status">
                          <span className="visually-hidden">Loading...</span>
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