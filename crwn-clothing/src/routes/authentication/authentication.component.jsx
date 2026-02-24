import SignInForm from "../../Components/sign-in-form /sign-in-form.componenet";
import SignUpForm from "../../Components/sign-up-form/sign-up-form.componenet";
import "./authentication.styles.scss";

const Authentication = () => {

  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
