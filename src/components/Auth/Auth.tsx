import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import CreateIcon from "@material-ui/icons/Create";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import style from "./style.module.css";

const iconStyle = {
  fontSize: "2rem",
  color: "#EFD3D7",
};

const iconStyleSubmitteble = {
  fontSize: "2rem",
  color: "#FEEAFA",
};

const iconVisibleOn = {
  fontSize: "2rem",
  color: "#EFD3D7",
};

const iconVisibleOff = {
  fontSize: "2rem",
  color: "#EFD3D7",
};

interface FormPropsI {
  switchFunction: () => any;
  setSubmitteble: any;
  setLogin: any;
  setPassword: any;
  setRepeatedPassword: any;
  hasAccount: boolean;
  isSubmitteble: boolean;
  login: string;
  password: string;
  repeatedPassword: string;
}

const onChange = (id: string, setValue: any, setWarning: any) => {
  let inputValue = (document.getElementById(id) as HTMLInputElement).value;
  if (inputValue.length > 20) {
    setWarning(true);
  } else {
    setWarning(false);
    setValue(inputValue);
  }
};

const isFilledChecker = (
  hasAccount: boolean,
  login: string,
  password: string,
  repeatedPassword: string,
  setSubmitteble: any
) => {
  if (hasAccount) {
    if (login && password) {
      setSubmitteble(true);
    } else {
      setSubmitteble(false);
    }
  } else {
    if (login && password && repeatedPassword) {
      setSubmitteble(true);
    } else {
      setSubmitteble(false);
    }
  }
};

const isFilledCheckerWithRepeat = (
  hasAccount: boolean,
  login: string,
  password: string,
  repeatedPassword: string,
  setSubmitteble: any,
  setWarning: any
) => {
  if (hasAccount) {
    if (login && password) {
      setSubmitteble(true);
    } else {
      setSubmitteble(false);
    }
  } else {
    if (login && password && repeatedPassword) {
      if (password === repeatedPassword) {
        setSubmitteble(true);
      } else {
        setWarning(true);
      }
    } else {
      setSubmitteble(false);
    }
  }
};

const Login: React.FC<FormPropsI> = ({
  switchFunction,
  setSubmitteble,
  setLogin,
  setPassword,
  setRepeatedPassword,
  hasAccount,
  isSubmitteble,
  login,
  password,
  repeatedPassword,
}) => {
  const [isVisiblePass, setVisiblePass] = useState(false);
  const [loginWarning, setLoginWarning] = useState(false);
  const [passwordWarning, setPasswordWarning] = useState(false);
  let history = useHistory();
  return (
    <div className={style.formLogin}>
      <div className={style.logo}>
        <p className={style.text_logo}>IMGnation</p>
      </div>
      <div className={style.label}>
        <p className={style.text}>Авторизация</p>
      </div>
      <div className={style.login}>
        {!loginWarning ? (
          <p className={style.loginLable}>Логин</p>
        ) : (
          <p className={style.loginLable__warning}>Что-то не так</p>
        )}
        <input
          className={
            !loginWarning ? style.loginInput : style.loginInput__warning
          }
          id="login"
          onChange={() => onChange("login", setLogin, setLoginWarning)}
          onMouseLeave={() =>
            isFilledChecker(
              hasAccount,
              login,
              password,
              repeatedPassword,
              setSubmitteble
            )
          }
        />
      </div>
      <div className={style.password}>
        {!passwordWarning ? (
          <p className={style.loginLable}>Пароль</p>
        ) : (
          <p className={style.loginLable__warning}>Что-то не так</p>
        )}
        <input
          className={
            !passwordWarning
              ? style.passwordInput
              : style.passwordInput__warning
          }
          type={isVisiblePass ? "text" : "password"}
          id="password"
          onChange={() => onChange("password", setPassword, setPasswordWarning)}
          onMouseLeave={() =>
            isFilledChecker(
              hasAccount,
              login,
              password,
              repeatedPassword,
              setSubmitteble
            )
          }
        />
        <div
          className={style.padding__top}
          onClick={() => setVisiblePass(!isVisiblePass)}
        >
          {isVisiblePass ? (
            <VisibilityOffIcon style={iconVisibleOff} />
          ) : (
            <VisibilityIcon style={iconVisibleOn} />
          )}
        </div>
      </div>
      <div className={style.submit}>
        <button
          className={
            isSubmitteble ? style.submitButton__submitteble : style.submitButton
          }
          disabled={!isSubmitteble}
          onSubmit={() => {
           
            history.push("/feed");
          }}
        >
          <VpnKeyIcon
            style={isSubmitteble ? iconStyleSubmitteble : iconStyle}
          />
        </button>
      </div>
      <div className={style.switchMode} onClick={switchFunction}>
        <p className={style.text__small}>У меня нет учетной записи</p>
      </div>
    </div>
  );
};

const Registration: React.FC<FormPropsI> = ({
  switchFunction,
  setSubmitteble,
  setLogin,
  setPassword,
  setRepeatedPassword,
  hasAccount,
  isSubmitteble,
  login,
  password,
  repeatedPassword,
}) => {
  const [loginWarning, setLoginWarning] = useState(false);
  const [passwordWarning, setPasswordWarning] = useState(false);
  const [repeatPasswordWarning, setRepeatPasswordWarning] = useState(false);
  let history = useHistory();
  return (
    <div className={style.formRegistration}>
      <div className={style.logo}>
        <p className={style.text_logo}>IMGnation</p>
      </div>
      <div className={style.label}>
        <p className={style.text}>Регистрация</p>
      </div>
      <div className={style.login}>
        {!loginWarning ? (
          <p className={style.loginLable}>Логин</p>
        ) : (
          <p className={style.loginLable__warning}>Что-то не так</p>
        )}
        <input
          className={
            !loginWarning ? style.loginInput : style.loginInput__warning
          }
          id="login"
          onChange={() => onChange("login", setLogin, setLoginWarning)}
          onMouseLeave={() =>
            isFilledChecker(
              hasAccount,
              login,
              password,
              repeatedPassword,
              setSubmitteble
            )
          }
        />
      </div>
      <div className={style.password}>
        {!passwordWarning ? (
          <p className={style.loginLable}>Пароль</p>
        ) : (
          <p className={style.loginLable__warning}>Что-то не так</p>
        )}
        <input
          className={
            !passwordWarning
              ? style.passwordInput
              : style.passwordInput__warning
          }
          id="password"
          onChange={() => onChange("password", setPassword, setPasswordWarning)}
          onMouseLeave={() =>
            isFilledChecker(
              hasAccount,
              login,
              password,
              repeatedPassword,
              setSubmitteble
            )
          }
        />
      </div>
      <div className={style.password}>
        {!repeatPasswordWarning ? (
          <p className={style.loginLable}>Повторите пароль</p>
        ) : (
          <p className={style.loginLable__warning}>Че-то не то</p>
        )}
        <input
          className={
            !repeatPasswordWarning
              ? style.repeatPasswordInput
              : style.repeatPasswordInput__warning
          }
          id="repeatpassword"
          onChange={() =>
            onChange(
              "repeatpassword",
              setRepeatedPassword,
              setRepeatPasswordWarning
            )
          }
          onMouseLeave={() =>
            isFilledCheckerWithRepeat(
              hasAccount,
              login,
              password,
              repeatedPassword,
              setSubmitteble,
              setRepeatPasswordWarning
            )
          }
        />
      </div>
      <div className={style.submit}>
        <button
          className={
            isSubmitteble ? style.submitButton__submitteble : style.submitButton
          }
          disabled={!isSubmitteble}
          onSubmit={() => {
          
            history.push("/feed");
          }}
        >
          <CreateIcon
            style={isSubmitteble ? iconStyleSubmitteble : iconStyle}
          />
        </button>
      </div>
      <div className={style.switchMode} onClick={switchFunction}>
        {" "}
        <p className={style.text__small}>У меня есть учетная запись</p>
      </div>
    </div>
  );
};

const Auth = () => {
  const [hasAccount, setHasAccount] = useState(true);
  const [isSubmitteble, setSubmitteble] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");

  return (
    <div className={style.auth}>
      <div className={style.form}>
        {hasAccount ? (
          <Login
            switchFunction={() => {
              setHasAccount(false);
              setSubmitteble(false);
            }}
            setSubmitteble={setSubmitteble}
            setLogin={setLogin}
            setPassword={setPassword}
            setRepeatedPassword={setRepeatedPassword}
            hasAccount={hasAccount}
            isSubmitteble={isSubmitteble}
            login={login}
            password={password}
            repeatedPassword={repeatedPassword}
          />
        ) : (
          <Registration
            switchFunction={() => {
              setHasAccount(false);
              setSubmitteble(false);
            }}
            setSubmitteble={setSubmitteble}
            setLogin={setLogin}
            setPassword={setPassword}
            setRepeatedPassword={setRepeatedPassword}
            hasAccount={hasAccount}
            isSubmitteble={isSubmitteble}
            login={login}
            password={password}
            repeatedPassword={repeatedPassword}
          />
        )}
      </div>
    </div>
  );
};

export default Auth;
