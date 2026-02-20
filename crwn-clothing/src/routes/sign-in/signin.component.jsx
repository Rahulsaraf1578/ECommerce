import SignUpForm from "../../Components/sign-up-form/sign-up-form.componenet";
import {
  signInWithGooglePopup,
  createUserDocFromUser,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromUser(user);
  };
  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}>Sign in with google Popup</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
