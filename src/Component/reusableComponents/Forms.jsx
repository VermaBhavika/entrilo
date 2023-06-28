const Form_data = [
  { label: 'FULL NAME', type: 'text', icon: <i classNameName="bx bx-user"></i> },
  { label: 'COMPANY', type: 'text', icon: <i classNameName="bx bx-buildings"></i> },
  { label: 'EMAIL', type: 'email', icon: <i classNameName="bx bx-envelope"></i> },
  { label: 'PHONE NO', type: 'text', icon: <i classNameName="bx bx-phone"></i> },
];

export const Forms = () => {
  return (
    Form_data?.length > 0 && 
    <>

      <div classNameName="content-wrapper">

        <div classNameName="container-xxl flex-grow-1 container-p-y">
          <h4 classNameName="fw-bold py-3 mb-4"><span classNameName="text-muted fw-light">Forms/</span> Vertical Layouts</h4>
          <div classNameName="row">
            <div classNameName="col-xl">
              <div classNameName="card mb-4">
                <div classNameName="card-body">
                  <form>

                    {Form_data.map((item) => (
                      <>
                        <div classNameName="mb-3">
                          <label classNameName="form-label" for="basic-icon-default-company">{item.label}</label>
                          <div classNameName="input-group input-group-merge">
                            <span id="basic-icon-default-company2" classNameName="input-group-text">
                              {item.icon}
                            </span>
                            <input
                              type={item.type}
                              classNameName="form-control"
                              placeholder={item.label}
                              aria-label={item.label}
                            />
                          </div>
                        </div>
                      </>
                    ))}
                    <div classNameName="mb-3">
                      <label className="form-label" for="basic-icon-default-message">Message</label>
                      <div className="input-group input-group-merge">
                        <span id="basic-icon-default-message2" className="input-group-text"
                        ><i className="bx bx-comment"></i
                        ></span>
                        <textarea
                          id="basic-icon-default-message"
                          className="form-control"
                          placeholder="Hi, Do you have a moment to talk Joe?"
                          aria-label="Hi, Do you have a moment to talk Joe?"
                          aria-describedby="basic-icon-default-message2"
                        ></textarea>
                      </div>
                    </div>
                    <button type="submit" classNameName="btn btn-primary">Send</button>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </>
  );
};

