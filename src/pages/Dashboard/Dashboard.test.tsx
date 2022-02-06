import {
  screen,
  render,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { mockResponse } from "../../constants";
import { setupFetchStub } from "../../helpers";
import Dashboard from "./Dashboard";

describe("Dashboard", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe("after application fully loads", () => {
    beforeEach(async () => {
      render(<Dashboard />);
      await waitForElementToBeRemoved(() => screen.queryByText("Loading..."));
    });

    it("renders the charts", async () => {
      jest
        .spyOn(global, "fetch")
        .mockImplementation(setupFetchStub(mockResponse));
      const res = await fetch("anyUrl");
      const json = await res.json();
      expect(json).toEqual(mockResponse);
      expect(screen.getAllByTestId('chart-element').length).toBe(2);
    });
  });
});
