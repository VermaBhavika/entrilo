export const Login=()=>{
    return(
        <>
           
            <div className="container-xxl">
      <div className="authentication-wrapper authentication-basic container-p-y">
        <div className="authentication-inner">
         
          <div className="card">
            <div className="card-body">
            
              <div className="app-brand justify-content-center">
                <a href="index.html" className="app-brand-link gap-2">
                  <span className="app-brand-logo demo app-brand-text demo text-body fw-bolder">
                  Entrilo
                  </span>
                
                </a>
              </div>
             
              <h4 className="mb-2">Welcome to Entrilo! 👋</h4>
              <p className="mb-4">Please sign-in to your account and start the adventure</p>

              <form id="formAuthentication" className="mb-3" action="index.html" method="POST">
                <div className="mb-3">
                  <label for="email" className="form-label">Email or Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email-username"
                    placeholder="Enter your email or username"
                  />
                </div>
                <div className="mb-3 form-password-toggle">
                  <div className="d-flex justify-content-between">
                    <label className="form-label" for="password">Password</label>
                    <a href="javascript:void(0);">
                      <small>Forgot Password?</small>
                    </a>
                  </div>
                  <div className="input-group input-group-merge">
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      name="password"
                      placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                      aria-describedby="password"
                    />
                    <span className="input-group-text cursor-pointer"><i className="bx bx-hide"></i></span>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="remember-me" />
                    <label className="form-check-label" for="remember-me"> Remember Me </label>
                  </div>
                </div>
                <div className="mb-3">
                  <button className="btn btn-primary d-grid w-100" type="submit">Sign in</button>
                </div>
              </form>

              <p className="text-center">
                <span>New on our platform?</span> 
                  <a href="javascript:void(0);">
                  <span> Create an account</span>
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

