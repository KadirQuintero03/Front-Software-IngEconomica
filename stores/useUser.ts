interface User {
  idUser: string;
  name: string;
  lastName: string;
  phoneNumber: string;
  password: string;
  balance: string;
}

let user: User = {
  idUser: "",
  name: "",
  lastName: "",
  phoneNumber: "",
  password: "",
  balance: "",
};

export const getBalance = () => user.balance;

export const setCredentials = (pn: string, ps: string) => {
  user.phoneNumber = pn;
  user.password = ps;
};

export const getCredentials = () => {
  return { phoneNumber: user.phoneNumber, password: user.password };
};

export const getUser = () => {
  return user;
};

export const setUser = ({ name, lastName, phoneNumber, idUser, balance }) => {
  user = {
    ...user,
    name: name,
    lastName: lastName,
    phoneNumber: phoneNumber,
    idUser: idUser,
    balance: balance,
  };
};
