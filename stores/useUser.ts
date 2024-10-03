interface User {
  token: string;
  name: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
}

let user: User = {
  token: "",
  name: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  password: "",
};

export const setCredentials = (pn: string, ps: string) => {
  user.phoneNumber = pn;
  user.password = ps;
};

export const getCredentials = () => {
  return { phoneNumber: user.phoneNumber, password: user.password };
};
