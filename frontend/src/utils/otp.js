import { auth } from "../firebase.js";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

let confirmationResult;

// Setup Recaptcha

const setupRecaptcha = () => {
  if (!window.recaptchaVerifier) {
    // Correct Order: auth goes FIRST
    window.recaptchaVerifier = new RecaptchaVerifier(
      auth, 
      "recaptcha-container",
      {
        size: "invisible",
        callback: () => {
          console.log("Recaptcha verified");
        },
      }
    );

    window.recaptchaVerifier.render();
  }
}; 

//  SEND OTP
export const sendOTP = async (phone) => {
  try {
    setupRecaptcha();

    const appVerifier = window.recaptchaVerifier;

    confirmationResult = await signInWithPhoneNumber(
      auth,
      phone,
      appVerifier
    );

    alert("Use OTP: 123456");

    return true;
  } catch (err) {
    console.error(err);
    alert(err.message);
    return false;
  }
};

// VERIFY OTP
export const verifyOTP = async (otp) => {
  try {
    if (!confirmationResult) {
      alert("Send OTP first!");
      return null;
    }

    const result = await confirmationResult.confirm(otp);
    return result.user;
  } catch (err) {
    console.error(err);
    alert("Invalid OTP");
    return null;
  }
};