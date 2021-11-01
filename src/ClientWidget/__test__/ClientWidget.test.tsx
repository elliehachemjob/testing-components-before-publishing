import React from "react";
import { ClientWidget } from "../ClientWidget";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("ClientWidget renders  ", () => {
  const component = render(<ClientWidget />);
});
