import React from "react";
import { AdminPanelFilled } from "../AdminPanelFilled";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("AdminPanelFilled renders   ", () => {
  const component = render(<AdminPanelFilled />);
});
