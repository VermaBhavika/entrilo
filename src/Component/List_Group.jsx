export const List_Group = () => {
    return (
        <>


            <div className="container-xxl flex-grow-1 container-p-y">
                <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">UI elements /</span> List groups</h4>

                <div className="card mb-4">
                    <h5 className="card-header">List groups</h5>

                    <hr className="m-0" />
                    <div className="card-body">
                        <div className="row">

                            <div className="col-lg-6 mb-4 mb-xl-0">
                                <small className="text-light fw-semibold">Flush</small>
                                <div className="demo-inline-spacing mt-3">
                                    <div className="list-group list-group-flush">
                                        <a href="javascript:void(0);" className="list-group-item list-group-item-action"
                                        >Bear claw cake biscuit</a
                                        >
                                        <a href="javascript:void(0);" className="list-group-item list-group-item-action"
                                        >Soufflé pastry pie ice</a
                                        >
                                        <a href="javascript:void(0);" className="list-group-item list-group-item-action"
                                        >Tart tiramisu cake</a
                                        >
                                        <a href="javascript:void(0);" className="list-group-item list-group-item-action"
                                        >Bonbon toffee muffin</a
                                        >
                                        <a href="javascript:void(0);" className="list-group-item list-group-item-action"
                                        >Dragée tootsie roll</a
                                        >
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <small className="text-light fw-semibold">With Icons</small>
                                <div className="demo-inline-spacing mt-3">
                                    <ul className="list-group">
                                        <li className="list-group-item d-flex align-items-center">
                                            <i className="bx bx-tv me-2"></i>
                                            Soufflé pastry pie ice
                                        </li>
                                        <li className="list-group-item d-flex align-items-center">
                                            <i className="bx bx-bell me-2"></i>
                                            Bear claw cake biscuit
                                        </li>
                                        <li className="list-group-item d-flex align-items-center">
                                            <i className="bx bx-support me-2"></i>
                                            Tart tiramisu cake
                                        </li>
                                        <li className="list-group-item d-flex align-items-center">
                                            <i className="bx bx-purchase-tag-alt me-2"></i>
                                            Bonbon toffee muffin
                                        </li>
                                        <li className="list-group-item d-flex align-items-center">
                                            <i className="bx bx-closet me-2"></i>
                                            Dragée tootsie roll
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                    <hr className="m-0" />
                    <div className="card-body">
                        <div className="row">

                            <div className="col-lg-6 mb-4 mb-xl-0">
                                <small className="text-light fw-semibold">Numbered</small>
                                <div className="demo-inline-spacing mt-3">
                                    <ol className="list-group list-group-numbered">
                                        <li className="list-group-item">Bear claw cake biscuit</li>
                                        <li className="list-group-item">Soufflé pastry pie ice</li>
                                        <li className="list-group-item">Tart tiramisu cake</li>
                                        <li className="list-group-item">Bonbon toffee muffin</li>
                                        <li className="list-group-item">Dragée tootsie roll</li>
                                    </ol>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <small className="text-light fw-semibold">List Group With Checkbox</small>
                                <div className="demo-inline-spacing mt-3">
                                    <div className="list-group">
                                        <label className="list-group-item">
                                            <input className="form-check-input me-1" type="checkbox" value="" />
                                            Soufflé pastry pie ice
                                        </label>
                                        <label className="list-group-item">
                                            <input className="form-check-input me-1" type="checkbox" value="" />
                                            Bear claw cake biscuit
                                        </label>
                                        <label className="list-group-item">
                                            <input className="form-check-input me-1" type="checkbox" value="" />
                                            Tart tiramisu cake
                                        </label>
                                        <label className="list-group-item">
                                            <input className="form-check-input me-1" type="checkbox" value="" />
                                            Bonbon toffee muffin
                                        </label>
                                        <label className="list-group-item">
                                            <input className="form-check-input me-1" type="checkbox" value="" />
                                            Dragée tootsie roll
                                        </label>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <hr className="m-0" />
                   
                </div>


            </div>

        </>
    )
};
