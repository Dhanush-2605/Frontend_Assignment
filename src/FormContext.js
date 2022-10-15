import { useState, useContext, createContext } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [country, setCountry] = useState("");

  return (
    <FormContext.Provider
      value={{
        firstName,
        lastName,
        email,
        password,
        city,
        street,
        country,
        setFirstName,
        setLastName,
        setPassword,
        setEmail,
        setCity,
        setStreet,
        setCountry,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
