import LoginView from "../components/auth/Login";
import { Helmet } from "react-helmet";

function Login() {
  return (
    <div>
      <Helmet>
        <title>Login | chocboy!</title>
        <meta name="description" content="chocboy Login" />
        <meta name="keyword" content="chocboy! chocolate nigeria order" />
        <link rel="canonical" href="/login" />
      </Helmet>
      <LoginView />
    </div>
  );
}

export default Login;
