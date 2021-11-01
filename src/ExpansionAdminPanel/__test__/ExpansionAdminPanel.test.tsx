import React from "react";
import { ExpansionAdminPanel } from "../ExpansionAdminPanel";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("ExpansionAdminPanel renders  ", () => {
  const component = render(<ExpansionAdminPanel />);
});
