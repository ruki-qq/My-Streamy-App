import React from "react";
import { connect } from "react-redux";
import { googleLogin, googleLogout } from "../actions";
import { Button } from "@mui/material";
import { GoogleLogin, GoogleLogout } from "react-google-login";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

const GoogleAuth = ({ auth, googleLogin, googleLogout }) => {
  const responseGoogle = (res) => {
    console.log(res);
  };
  return (
    <>
      {!auth.isLoggedIn ? (
        <GoogleLogin
          clientId={CLIENT_ID}
          render={(renderProps) => (
            <Button
              onClick={renderProps.onClick}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Login
            </Button>
          )}
          buttonText="Login"
          onSuccess={googleLogin}
          onFailure={responseGoogle}
          isSignedIn={true}
          cookiePolicy={"single_host_origin"}
        />
      ) : (
        <GoogleLogout
          buttonText="Logout"
          render={(renderProps) => (
            <>
              <Button
                onClick={renderProps.onClick}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Logout
              </Button>
            </>
          )}
          onLogoutSuccess={googleLogout}
        />
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { googleLogin, googleLogout })(
  GoogleAuth
);
