import React from "react";
import { VideoCall } from "../VideoCall";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("VideoCall renders  ", () => {
  const component = render(<VideoCall />);
});
