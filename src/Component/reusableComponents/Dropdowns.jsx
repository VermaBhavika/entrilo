export const Dropdowns = () => {
    const data = [
        {
            buttonTitle: 'Primary',
            buttonType: 'primary',
            buttonDrops:[
                {
                    buttonDrop: 'Action',
                },
                {
                    buttonDrop: 'Another action',
                },
                {
                    buttonDrop: 'Seperated link'
                }
            ]
        },
        {
            buttonTitle: 'Secondary',
            buttonType: 'secondary',
            buttonDrops:[
                {
                    buttonDrop: 'Action',
                },
                {
                    buttonDrop: 'Another action',
                },
                {
                    buttonDrop: 'Seperated link'
                }
            ]
        },
        {
            buttonTitle: 'Success',
            buttonType: 'success',
            buttonDrops:[
                {
                    buttonDrop: 'Action',
                },
                {
                    buttonDrop: 'Another action',
                },
                {
                    buttonDrop: 'Seperated link'
                }
            ]
        },
        {
            buttonTitle: 'Danger',
            buttonType: 'danger',
            buttonDrops:[
                {
                    buttonDrop: 'Action',
                },
                {
                    buttonDrop: 'Another action',
                },
                {
                    buttonDrop: 'Seperated link'
                }
            ]
        },
        {
            buttonTitle: 'warning',
            buttonType: 'warning',
            buttonDrops:[
                {
                    buttonDrop: 'Action',
                },
                {
                    buttonDrop: 'Another action',
                },
                {
                    buttonDrop: 'Seperated link'
                }
            ]
        },
        {
            buttonTitle: 'info',
            buttonType: 'info',
            buttonDrops:[
                {
                    buttonDrop: 'Action',
                },
                {
                    buttonDrop: 'Another action',
                },
                {
                    buttonDrop: 'Seperated link'
                }
            ]
        },
    ]
    return (
        data?.length > 0 &&
        <div className="container-xxl">
            <div className="card mb-4" id="btn-dropdown-demo">
                <h5 className="card-header">Dropdowns</h5>
                <div className="card-body">
                    <small className="text-light fw-semibold">Basic</small>
                    <div className="demo-inline-spacing">
                        
                            {data?.map((item) => (
                                <>
                                    <div className="btn-group">
                                {item?.buttonType && <button
                                type="button"
                                className={`btn btn-${item?.buttonType} dropdown-toggle`}
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                {item?.buttonTitle}
                                </button>}
                                <ul className="dropdown-menu">
                                    {item?.buttonDrops?.map((buttonItem) => (
                                        buttonItem?.buttonDrop && <li><a className="dropdown-item" href="javascript:void(0);">{buttonItem?.buttonDrop}</a></li>
                                    ))}
                                </ul>
                                </div>
                                </>
                            ))}                         
                        

                    </div>
                </div>
            </div>
        </div>
    )
}