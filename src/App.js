import "./App.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { formSchema } from "./components/Validations/Validations";

function App() {
  const [isChecked, setIsChecked] = useState(false);
  const [showError, setShowError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const handleClick = () => setIsChecked(!isChecked);

  const registerUser = () => {
    if (isChecked) {
      return;
    } else {
      return setShowError(true);
    }
  };

  const onSubmitFunction = (data) => console.log(data);

  return (
    <div className="App">
      <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
        <input
          className="user-data"
          placeholder="Nome de usuário*"
          {...register("username")}
        />
        {errors.username?.message && <p>{errors.username?.message}</p>}
        <input
          className="user-data"
          placeholder="Nome completo*"
          {...register("name")}
        />
        {errors.name?.message && <p>{errors.name?.message}</p>}
        <input
          className="user-data"
          placeholder="Endereço de Email*"
          {...register("email")}
        />
        {errors.email?.message && <p>{errors.email?.message}</p>}
        <input
          className="user-data"
          placeholder="Confirme seu Email*"
          {...register("confirmEmail")}
        />
        {errors.confirmEmail?.message && <p>{errors.confirmEmail?.message}</p>}
        <input
          className="password"
          placeholder="Senha*"
          {...register("password")}
        />
        {errors.password?.message && <p>{errors.password?.message}</p>}
        <input
          className="confirm-password"
          placeholder="Confirme sua senha*"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword?.message && (
          <p>{errors.confirmPassword?.message}</p>
        )}
        <div className="check-box">
          <input
            className="check-box-input"
            type="checkbox"
            name="check"
            onClick={handleClick}
          />
          <label>Eu aceito os termos de uso da aplicação.</label>
        </div>
        <button type="submit" onClick={registerUser}>
          Cadastrar
        </button>
        {showError && (
          <p>Você precisa aceitar os termos de uso da aplicação.</p>
        )}
      </form>
    </div>
  );
}

export default App;
