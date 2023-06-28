export const Modal = () =>{
    const data = [
        {     
            modalButton: 'launch modal',
            modalTitle: 'Modal title',
            modalID: 'basicModal3',
            modalForm : [
                {
                    type: 'text',
                    label: 'name',
                    placeholder: 'Enter Name wsf',
                    forLabel: 'nameBasic'
                },
                {
                    type: 'text',
                    label: 'Email',
                    placeholder: 'xxxx@xxx.xx',
                    forLabel: 'emailBasic'
                },
                {
                    type: 'text',
                    label: 'DOB',
                    placeholder: 'DD / MM / YY',
                    forLabel: 'dobBasic'
                },
            ]
        }
    ]
    return(
        data?.length > 0 && 
        <div className="container-xxl flex-grow-1 container-p-y">
            <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">UI elements /</span> Modals</h4>

            <div className="card mb-4">
                <h5 className="card-header">Bootstrap modals</h5>
                <div className="card-body">
                    <div className="row gy-3">
                        <div className="col-lg-4 col-md-6">
                            <small className="text-light fw-semibold">Default</small>
                            {data?.map((item) => (
                                <div className="mt-3">
                                    {item?.modalButton && <button
                                        type="button"
                                        className="btn btn-primary"
                                        data-bs-toggle="modal"
                                        data-bs-target={`#${item?.modalID}`}
                                    >
                                        {item?.modalButton}
                                    </button>}

                                    <div className="modal fade" id={item?.modalID} tabIndex="-1" aria-hidden="true">
                                        <div className="modal-dialog" role="document">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    {item?.modalTitle && <h5 className="modal-title" id="exampleModalLabel1">{item?.modalTitle}</h5>}
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
                                                            {item?.modalForm?.map((formItem) => (
                                                                <>
                                                                {formItem?.label && <label for={formItem?.forLabel} className="form-label">{formItem?.label}</label>}
                                                                    {formItem?.placeholder && <input type={formItem?.type} id={formItem.forLabel} className="form-control" placeholder={formItem?.placeholder} />}
                                                                </>
                                                            ))}                                                           
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
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}