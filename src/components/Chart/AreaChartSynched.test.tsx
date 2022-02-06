import { screen, render } from "@testing-library/react";
import { mockedData } from "../../constants";
import AreaChartSynched from "./AreaChartSynched";

describe("AreaChartSynched", () => {
  it("AreaChartSynched for new cases should render", () => {
    render(
      <AreaChartSynched
        data={mockedData}
        axisXKEY="date"
        areaKey="cases"
        areaName="New cases per Day 🤧"
      />
    );
    expect(screen.getByTestId('chart-element')).toBeInTheDocument();
  });
});
