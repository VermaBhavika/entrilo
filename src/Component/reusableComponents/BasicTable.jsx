import avatar5 from '../../assests/img/avatars/5.png'
import avatar6 from '../../assests/img/avatars/6.png'
import avatar7 from '../../assests/img/avatars/7.png'
export const BasicTable = () => {
    const data = [
        {
            project: 'Angular Project',
            client: 'Albert Cook',
            status: 'active',
            edit: 'edit',
            delete: 'delete',
            img1: avatar5,
            img2: avatar6,
            img3: avatar7

        },
        {
            project: 'React Project',
            client: 'Barry Hunter',
            status: 'Completed',
            edit: 'edit',
            delete: 'delete',
            img3: avatar5,
            img2: avatar6,
            img1: avatar7
        },
        {
            project: 'VueJs Project',
            client: 'Trevor Baker',
            status: 'Scheduled',
            edit: 'edit',
            delete: 'delete',
            img3: avatar7,
            img2: avatar5,
            img1: avatar6
        },
        {
            project: 'Bootstrap Project',
            client: 'Jerry Milton',
            status: 'Pending',
            edit: 'edit',
            delete: 'delete',
            img3: avatar7,
            img2: avatar5,
            img1: avatar6
        },
    ]
    return (
        <div className="container-xxl">
            <div className="card">
                <h5 className="card-header">Hoverable rows</h5>
                <div className="table-responsive text-nowrap">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Project</th>
                                <th>Client</th>
                                <th>Users</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className="table-border-bottom-0">
                            {data?.map((item) => (
                                <tr>
                                    <td><i className="fab fa-angular fa-lg text-danger me-3"></i> <strong>{item?.project}</strong></td>
                                    <td>{item.client}</td>
                                    <td>
                                        <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                            <li
                                                data-bs-toggle="tooltip"
                                                data-popup="tooltip-custom"
                                                data-bs-placement="top"
                                                className="avatar avatar-xs pull-up"
                                                title="Lilian Fuller"
                                            >
                                                <img src={item?.img1} alt="Avatar" className="rounded-circle" />
                                            </li>
                                            <li
                                                data-bs-toggle="tooltip"
                                                data-popup="tooltip-custom"
                                                data-bs-placement="top"
                                                className="avatar avatar-xs pull-up"
                                                title="Sophia Wilkerson"
                                            >
                                                <img src={item?.img2} alt="Avatar" className="rounded-circle" />
                                            </li>
                                            <li
                                                data-bs-toggle="tooltip"
                                                data-popup="tooltip-custom"
                                                data-bs-placement="top"
                                                className="avatar avatar-xs pull-up"
                                                title="Christina Parker"
                                            >
                                                <img src={item?.img3} alt="Avatar" className="rounded-circle" />
                                            </li>
                                        </ul>
                                    </td>
                                    <td><span className={`badge ${item?.status == 'active' ? 'bg-label-primary' : ''} ${item?.status == 'completed' ? 'bg-label-success' : ''} ${item?.status == 'Scheduled' ? 'bg-label-info' : ''} ${item?.status == 'Pending' ? 'bg-label-warning' : ''}  me-1`}>{item?.status}</span></td>
                                    <td>
                                        <div className="dropdown">
                                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                <i className="bx bx-dots-vertical-rounded"></i>
                                            </button>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="javascript:void(0);"
                                                ><i className="bx bx-edit-alt me-1"></i> {item?.edit}</a
                                                >
                                                <a className="dropdown-item" href="javascript:void(0);"
                                                ><i className="bx bx-trash me-1"></i> {item?.delete}</a
                                                >
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}