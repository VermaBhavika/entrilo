export const ForgotPassword = ()=>{
  const data = [
    {
      title: 'Forgot Password? 🔒',
      label: "Enter your email and we'll send you instructions to reset your password",
      formData: [
        {
          label: 'Email',
          type: 'text',
          name: 'email',
          placeholder: 'enter your email'
        },
        
      ], 
      privacy: 'I agree to privacy policy & terms',
      buttonTitle: 'Sign up'
    }

  ]
    return(
      data?.length > 0 &&
        <>
              <div className="container-xxl">
      <div className="authentication-wrapper authentication-basic container-p-y">
        <div className="authentication-inner py-4">
    
          <div className="card">
            <div className="card-body">
            
              <div className="app-brand justify-content-center">
                <a href="index.html" className="app-brand-link gap-2">
                  
                  <span className="app-brand-text demo text-body fw-bolder">entrilo</span>
                </a>
              </div>
                  {data?.map((item) => (
                    <>
                      {item?.title && <h4 className="mb-2">{item?.title}</h4>}
                      {item?.label && <p className="mb-4">{item?.label}</p>}
                      <form id="formAuthentication" className="mb-3" action="index.html" method="POST">
                        {item.formData.map((formItem) => (
                          <div className={`mb-3 ${formItem.type == 'password' ? 'form-password-toggle' : ''}`}>
                            {formItem?.name && <label for={formItem?.name} className="form-label">{formItem?.label}</label>}
                            {formItem?.type && <input
                              type={formItem?.type}
                              className="form-control"
                              id={formItem?.name}
                              name={formItem?.name}
                              placeholder={formItem?.placeholder}
                            />}
                          </div>
                        ))}
                        {item?.privacy &&
                        <div className="mb-3">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="terms-conditions" name="terms" />
                            <label className="form-check-label" for="terms-conditions">
                             {item.privacy}
                            </label>
                          </div>
                        </div>}
                        {item?.buttonTitle && <button className="btn btn-primary d-grid w-100">{item.buttonTitle}</button>}
                      </form>
                    </>
                  ))}
              
              <div className="text-center">
                <a href="javascript:void(0);" className="d-flex align-items-center justify-content-center">
                  <i className="bx bx-chevron-left scaleX-n1-rtl bx-sm"></i>
                  Back to login
                </a>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
        </>
    );
};