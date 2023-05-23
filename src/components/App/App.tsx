import { useState } from "react";

const App = (): React.ReactElement => {
  const [personalData, setPersonalData] = useState({
    name: "",
    lastname: "",
    birthdate: new Date(),
    email: "",
    username: "",
    password: "",
    repeatPassword: "",
    rememberPassword: false,
  });

  const [step, setStep] = useState(1);

  const onChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPersonalData({ ...personalData, [event.target.id]: event.target.value });
  };

  const handleNextStep = () => {
    setStep((currentStep) => currentStep + 1);
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  const renderForms = () => {
    switch (step) {
      case 1:
        return (
          <div className="form-container">
            <img
              src="./img/AccessData.svg"
              alt="Access Data title"
              className="img-title"
            />
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">
                <input
                  type="text"
                  placeholder="Name"
                  value={personalData.name}
                  id="name"
                  onChange={onChangeLogin}
                  autoComplete="off"
                />
              </label>
              <label htmlFor="lastname">
                <input
                  type="text"
                  placeholder="Lastname"
                  value={personalData.lastname}
                  id="lastname"
                  onChange={onChangeLogin}
                  autoComplete="off"
                />
              </label>
              <label htmlFor="birthdate">
                <input
                  type="date"
                  placeholder="Birthdate"
                  value={personalData.birthdate.toISOString().split("T")[0]}
                  onChange={onChangeLogin}
                  id="birthdate"
                />
              </label>
              <label htmlFor="email">
                <input
                  type="text"
                  placeholder="Email"
                  value={personalData.email}
                  id="email"
                  onChange={onChangeLogin}
                  autoComplete="off"
                />
              </label>
              <button className="login-form__button" onClick={handleNextStep}>
                Next
              </button>
            </form>
          </div>
        );
      case 2:
        return (
          <div className="form-container">
            <img
              src="./img/personalData.svg"
              alt="personal data title"
              className="img-title"
            />
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">
                <input
                  type="text"
                  placeholder="Username"
                  value={personalData.username}
                  id="username"
                  onChange={onChangeLogin}
                  autoComplete="off"
                />
              </label>
              <label htmlFor="password">
                <input
                  type="password"
                  placeholder="Password"
                  value={personalData.password}
                  id="password"
                  onChange={onChangeLogin}
                  autoComplete="off"
                />
              </label>
              <label htmlFor="birthdate">
                <input
                  type="password"
                  placeholder="Repeat password"
                  value={personalData.repeatPassword}
                  onChange={onChangeLogin}
                  id="repeatPassword"
                />
              </label>
              <button className="login-form__button" onClick={handleNextStep}>
                Next
              </button>
            </form>
          </div>
        );
      case 3:
        return (
          <div className="form-container">
            <img
              src="./img/login.svg"
              alt="login title"
              className="img-title"
            />
            <form onSubmit={handleSubmit}>
              <label htmlFor="login-username">
                <input
                  type="text"
                  placeholder="Username"
                  value={personalData.username}
                  id="login-username"
                  onChange={onChangeLogin}
                  autoComplete="off"
                />
              </label>
              <label htmlFor="login-password">
                <input
                  type="password"
                  placeholder="Password"
                  value={personalData.password}
                  id="login-password"
                  onChange={onChangeLogin}
                  autoComplete="off"
                />
              </label>
              <label htmlFor="rememberPassword">
                Remember password?
                <input
                  type="checkbox"
                  value={personalData.repeatPassword}
                  onChange={onChangeLogin}
                  id="rememberPassword"
                />
              </label>
              <button className="login-form__button" onClick={handleNextStep}>
                Login
              </button>
            </form>
          </div>
        );
    }
  };
  return (
    <div>
      <img
        src="./img/theFormulary.svg"
        alt="The formulary title"
        className="main-img"
      />
      {renderForms()}
    </div>
  );
};
export default App;
