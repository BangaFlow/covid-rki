import React from "react";
import { useFetch } from "usehooks-ts";
import AreaChartSynched from "../../components/Chart/AreaChartSynched";
import { CASES_URL, INCIDENCE_URL } from "../../constants";
import { formatCase, formatIncidence } from "../../helpers";
import {
  IHistoryCases,
  IHistoryIncidence,
  FormattedHistoryCase,
  FormattedHistoryIncidence,
} from "../../interfaces";

const Dashboard: React.FC = () => {
  const { data: cases, error: caseError } = useFetch<any>(CASES_URL);
  const { data: incidences, error: incidenceError } = useFetch<any>(
    cases ? INCIDENCE_URL : undefined
  );

  if (caseError || incidenceError)
    return (
      <p>
        There was a problem while requesting the data. Please, try again later!
      </p>
    );
  if (!cases || !incidences) return <p>Loading...</p>;

  const formatedCases: FormattedHistoryCase[] = cases.data["09162"].history.map(
    (item: IHistoryCases) => formatCase(item)
  );

  const formatedIncidences: FormattedHistoryIncidence[] = incidences.data["09162"].history.map(
    (item: IHistoryIncidence) => formatIncidence(item)
  );

  return (
    <>
      <AreaChartSynched
        data={formatedCases}
        axisXKEY="date"
        areaKey="cases"
        areaName="New cases per Day 🤧"
        color="#82ca9d"
      ></AreaChartSynched>
      <AreaChartSynched
        data={formatedIncidences}
        axisXKEY="date"
        areaKey="weekIncidence"
        areaName="Week incidence per Day 📅"
        color="#8884d8"
      ></AreaChartSynched>
    </>
  );
};

export default Dashboard;
