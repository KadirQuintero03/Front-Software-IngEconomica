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

export let refresh: boolean;

export const getBalance = () => user.balance;
export const getPhoneNumber = () => user.phoneNumber;

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
  refresh = !refresh;
  user = {
    ...user,
    name: name,
    lastName: lastName,
    phoneNumber: phoneNumber,
    idUser: idUser,
    balance: balance,
  };
};

//Transaccion
interface Transaction {
  name: string;
  lastName: string;
  description: string;
  omuntMovement: string;
  dateMovement: String;
  idMovement: String;
}

let transaction: Transaction = {
  name: "",
  lastName: "",
  description: "",
  omuntMovement: "",
  dateMovement: "",
  idMovement: "",
};

export const setTransaction = ({
  user: { name, lastName },
  description,
  omuntMovement,
  dateMovement,
  idMovement,
}) => {
  transaction = {
    ...transaction,
    name: name,
    lastName: lastName,
    description: description,
    omuntMovement: omuntMovement,
    dateMovement: dateMovement,
    idMovement: idMovement,
  };
};

export const getData = () => {
  return {
    name: transaction.name,
    lastName: transaction.lastName,
    omuntMovement: transaction.omuntMovement,
    description: transaction.description,
    dateMovement: transaction.dateMovement,
    idMovement: transaction.idMovement,
  };
};
