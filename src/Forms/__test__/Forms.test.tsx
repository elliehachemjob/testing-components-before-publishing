import React from "react";
import { LoginForm, SignUpForm } from "../Forms";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("LoginForm Form renders  ", () => {
  const component = render(<LoginForm />);
});

test("SignUp Form  renders  ", () => {
  const component = render(<SignUpForm />);
});
