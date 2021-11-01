import React from "react";
import { VoiceCall } from "../VoiceCall";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("VoiceCall renders  ", () => {
  const component = render(<VoiceCall />);
});
