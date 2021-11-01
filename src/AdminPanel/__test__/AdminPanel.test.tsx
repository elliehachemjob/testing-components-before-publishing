import React from "react";
import { AdminPanel } from "../AdminPanel";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("AdminPanel renders  ", () => {
  const component = render(<AdminPanel />);
});
