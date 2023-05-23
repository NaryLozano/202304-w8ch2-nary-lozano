import { useState } from "react";

const App = (): React.ReactElement => {
  const [personalData, setPersonalData] = useState({
    name: "",
    lastname: "",
    birthdate: new Date(),
    email: "",
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
          <>
            <form onSubmit={handleSubmit}>
              <h1>Step 1</h1>
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
          </>
        );
    }
  };
  return <div>{renderForms()}</div>;
};
export default App;
