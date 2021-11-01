import React from "react";
import { SidebarAdminPanel } from "../SidebarAdminPanel";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("SidebarAdminPanel render  ", () => {
  const component = render(<SidebarAdminPanel />);
});
