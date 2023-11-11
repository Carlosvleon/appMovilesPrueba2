export interface IUsuario {
  id: string,
  username: string,
  email: string,
  firstName: string,
  lastName: string,
  gender: "male" | "female",
  token: string,
  image: string
}
