export const Modal = () =>{
    return(
        <div className="container-xxl flex-grow-1 container-p-y">
            <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">UI elements /</span> Modals</h4>

            <div className="card mb-4">
                <h5 className="card-header">Bootstrap modals</h5>
                <div className="card-body">
                    <div className="row gy-3">
                        <div className="col-lg-4 col-md-6">
                            <small className="text-light fw-semibold">Default</small>
                            <div className="mt-3">
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#basicModal"
                                >
                                    Launch modal
                                </button>

                                <div className="modal fade" id="basicModal" tabIndex="-1" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel1">Modal title</h5>
                                                <button
                                                    type="button"
                                                    className="btn-close"
                                                    data-bs-dismiss="modal"
                                                    aria-label="Close"
                                                ></button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="row">
                                                    <div className="col mb-3">
                                                        <label for="nameBasic" className="form-label">Name</label>
                                                        <input type="text" id="nameBasic" className="form-control" placeholder="Enter Name" />
                                                    </div>
                                                </div>
                                                <div className="row g-2">
                                                    <div className="col mb-0">
                                                        <label for="emailBasic" className="form-label">Email</label>
                                                        <input type="text" id="emailBasic" className="form-control" placeholder="xxxx@xxx.xx" />
                                                    </div>
                                                    <div className="col mb-0">
                                                        <label for="dobBasic" className="form-label">DOB</label>
                                                        <input type="text" id="dobBasic" className="form-control" placeholder="DD / MM / YY" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">
                                                    Close
                                                </button>
                                                <button type="button" className="btn btn-primary">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}