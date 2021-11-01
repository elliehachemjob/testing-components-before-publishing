import React from "react";
import { SidebarExpansion } from "../SidebarExpansion";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("ClientWidget render  ", () => {
  const component = render(<SidebarExpansion />);
});
