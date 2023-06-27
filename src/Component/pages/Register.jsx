export const Register = ()=>{
  const data = [
    {
      title: 'Adventure starts here 🚀',
      label: 'Make your app management easy and fun!',
      formData :[
        {
          label: 'Username',
          type: 'text',
          name: 'username',
          placeholder : 'enter your username'
        },
        {
          label: 'email',
          type: 'text',
          name: 'email',
          placeholder: 'enter your email'
        },
        {
          label: 'Password',
          type: 'password',
          name: 'Password',
          placeholder: 'password'
        },
      ],
      privacy: 'I agree to privacy policy & terms',
      buttonTitle: 'Sign up'
    }
    
  ]
    return(
        <>
            <div className="container-xxl">
      <div className="authentication-wrapper authentication-basic container-p-y">
        <div className="authentication-inner">
       
          <div className="card">
            <div className="card-body">
           
              <div className="app-brand justify-content-center">
                <a href="index.html" className="app-brand-link gap-2">
                 
                  <span className="app-brand-text demo text-body fw-bolder">entrilo</span>
                </a>
              </div>
            {data?.map((item) => (
              <>
                <h4 className="mb-2">{item.title}</h4>
                <p className="mb-4">{item.label}</p>
                <form id="formAuthentication" className="mb-3" action="index.html" method="POST">
                  {item.formData.map((formItem) => (
                    <div className={`mb-3 ${formItem.type == 'password' ? 'form-password-toggle' : ''}`}>
                      <label for={formItem.name} className="form-label">{formItem.label}</label>
                      <input
                        type={formItem.type}
                        className="form-control"
                        id={formItem.name}
                        name={formItem.name}
                        placeholder={formItem.placeholder}
                      />
                    </div>
                  ))}
                  <div className="mb-3">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="terms-conditions" name="terms" />
                      <label className="form-check-label" for="terms-conditions">
                        {item.privacy}
                      </label>
                    </div>
                  </div>
                  <button className="btn btn-primary d-grid w-100">{item.buttonTitle}</button>
                </form>
              </>
            ))}
              <p className="text-center">
                <span>Already have an account? </span>
                <a href="javascript:void(0);">
                  <span>Sign in instead</span>
                </a>
              </p>
            </div>
          </div>
        
        </div>
      </div>
    </div>
        </>
    );
};