const Form_data = [
  { label: 'FULL NAME', type: 'text', icon: <i className="bx bx-user"></i> },
  { label: 'COMPANY', type: 'text', icon: <i className="bx bx-buildings"></i> },
  { label: 'EMAIL', type: 'email', icon: <i className="bx bx-envelope"></i> },
  { label: 'PHONE NO', type: 'text', icon: <i className="bx bx-phone"></i> },
];

export const Forms = () => {
  return (
    <>

      <div className="content-wrapper">

        <div className="container-xxl flex-grow-1 container-p-y">
          <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">Forms/</span> Vertical Layouts</h4>
          <div className="row">
            <div className="col-xl">
              <div className="card mb-4">
                <div className="card-body">
                  <form>

                    {Form_data.map((item) => (
                      <>
                        <div className="mb-3">
                          <label className="form-label" for="basic-icon-default-company">{item.label}</label>
                          <div className="input-group input-group-merge">
                            <span id="basic-icon-default-company2" className="input-group-text">
                              {item.icon}
                            </span>
                            <input
                              type={item.type}
                              className="form-control"
                              placeholder={item.label}
                              aria-label={item.label}
                            />
                          </div>
                        </div>
                      </>
                    ))}
                    <div className="mb-3">
                      <label class="form-label" for="basic-icon-default-message">Message</label>
                      <div class="input-group input-group-merge">
                        <span id="basic-icon-default-message2" class="input-group-text"
                        ><i class="bx bx-comment"></i
                        ></span>
                        <textarea
                          id="basic-icon-default-message"
                          class="form-control"
                          placeholder="Hi, Do you have a moment to talk Joe?"
                          aria-label="Hi, Do you have a moment to talk Joe?"
                          aria-describedby="basic-icon-default-message2"
                        ></textarea>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Send</button>
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

