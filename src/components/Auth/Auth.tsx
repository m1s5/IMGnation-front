import React, { useState } from "react";
import style from "./style.module.css";

interface FormProps {
  switchFunction: () => any;
}

const Login: React.FC<FormProps> = ({ switchFunction }) => {
  return (
    <div className={style.formLogin}>
      <div className={style.label}>
        <p className={style.text}>Авторизация</p>
      </div>
      <div className={style.login}>
        <input />
      </div>
      <div className={style.password}>
        <input />
      </div>
      <div className={style.submit}>
        <button/>
      </div>
      <div className={style.switchMode} onClick = {switchFunction}>
        {" "}
        <p className={style.text}>У меня нет учетной записи</p>
      </div>
    </div>
  );
};

const Registration: React.FC<FormProps> = ({ switchFunction }) => {
  return (
    <div className={style.formRegistration}>
      <div className={style.label}>
        <p className={style.text}>Регистрация</p>
      </div>
      <div className={style.login}>
        <input />
      </div>
      <div className={style.password}>
        <input />
      </div>
      <div className={style.password}>
        <input />
      </div>
      <div className={style.submit}>
        <button/>
      </div>
      <div className={style.switchMode} onClick = {switchFunction}>
        {" "}
        <p className={style.text}>У меня есть учетная запись</p>
      </div>
    </div>
  );
};

const Auth = () => {
  const [hasAccount, setHasAccount] = useState(true);
  return (
    <div className={style.auth}>
      <div className={style.form}>
        {hasAccount ? (
          <Login switchFunction={() => setHasAccount(false)} />
        ) : (
          <Registration switchFunction={() => setHasAccount(false)} />
        )}
      </div>
    </div>
  );
};

export default Auth;
