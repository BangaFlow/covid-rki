import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  FormattedHistoryCase,
  FormattedHistoryIncidence,
} from "../../interfaces";

type ChartProps = {
  data: FormattedHistoryCase[] | FormattedHistoryIncidence[];
  axisXKEY: string;
  areaKey: string;
  areaName: string;
  color?: string;
};

const AreaChartSynched: React.FC<ChartProps> = ({
  data,
  axisXKEY,
  areaName,
  areaKey,
  color,
}) => {
  return (
    <div
      data-testid="chart-element"
      className="w-full h-64 mb-5 text-sm lg:h-80"
    >
      <ResponsiveContainer>
        <AreaChart
          syncId="synched"
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={axisXKEY} />
          <YAxis />
          <Tooltip wrapperStyle={{ wordSpacing: "-2px" }} />
          <Legend
            verticalAlign="bottom"
            iconSize={18}
            wrapperStyle={{ fontSize: 15, fontWeight: "bold" }}
          />
          <Area
            name={areaName}
            type="monotone"
            dataKey={areaKey}
            stroke={color}
            fill={color}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaChartSynched;
