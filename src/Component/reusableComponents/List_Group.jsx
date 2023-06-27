const list = ["Bear claw cake biscuit", "Soufflé pastry pie ice", "Tart tiramisu cake", "Bonbon toffee muffin", "Dragée tootsie roll"];

export const List_Group = () => {
    return (
        <>
            <div className="container-xxl flex-grow-1 container-p-y">
                <div className="card mb-4">
                    <hr className="m-0" />
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-6 mb-4 mb-xl-0">
                                <small className="text-light fw-semibold">Flush</small>
                                <div className="demo-inline-spacing mt-3">
                                    <div className="list-group list-group-flush">
                                        {list.map((item)=>
                                            <a href="javascript:void(0);" className="list-group-item list-group-item-action"
                                            > {item}</a>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <small className="text-light fw-semibold">With Icons</small>
                                <div className="demo-inline-spacing mt-3">
                                    <ul className="list-group">
                                    {list.map((item)=>
                                        <li className="list-group-item d-flex align-items-center">
                                            <i className="bx bx-tv me-2"></i>
                                            {item}
                                        </li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-6 mb-4 mb-xl-0">
                                <small className="text-light fw-semibold">Numbered</small>
                                <div className="demo-inline-spacing mt-3">
                                    <ol className="list-group list-group-numbered">
                                        
                                        {list.map((item)=>
                                        <li className="list-group-item">{item}</li>
                                        )}
                                    </ol>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <small className="text-light fw-semibold">List Group With Checkbox</small>
                                <div className="demo-inline-spacing mt-3">
                                    <div className="list-group">
                                        {list.map((item)=>
                                         <label className="list-group-item">
                                         <input className="form-check-input me-1" type="checkbox" value="" />
                                             {item}
                                         </label>
                                        )}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
