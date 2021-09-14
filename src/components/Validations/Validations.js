import * as yup from "yup";

export const formSchema = yup.object().shape({
  username: yup
    .string()
    .required("Usuário obrigatório.")
    .matches(/^[a-zA-Z0-9]+$/, "Usuário inválido"),
  name: yup
    .string()
    .required("Nome obrigatório.")
    .matches(/^[a-zA-Z ]{18,30}$/, "Por favor preencha seu nome completo."),
  email: yup
    .string()
    .required("Email obrigatório")
    .email("Email invalido.")
    .matches(
      /^(([^<>()[\],;:\s@"]+(\.[^<>()[\],;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
    ),
  confirmEmail: yup
    .string()
    .oneOf([yup.ref("email"), null], "Email incorreto."),
  password: yup
    .string()
    .required("Senha obrigatória.")
    .matches(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/,
      "Senha inválida."
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Senha incorreta."),
});
