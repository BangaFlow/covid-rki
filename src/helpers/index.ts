import { FormattedHistoryCase, FormattedHistoryIncidence, IHistoryCases, IHistoryIncidence } from "../interfaces";

export const formatDate = (date: Date): string => {
  return new Date(date).toLocaleDateString("de-DE");
};

export const round = (x: number): number => {
  return Math.round((x + Number.EPSILON) * 100) / 100;
};

export const formatCase = (item: IHistoryCases): FormattedHistoryCase => {
  const formatedDate = formatDate(item.date);
  return { cases: item.cases, date: formatedDate };
};

export const formatIncidence = (item: IHistoryIncidence): FormattedHistoryIncidence => {
  const formatedDate = formatDate(item.date);
  return { weekIncidence: round(item.weekIncidence), date: formatedDate };
}

export function setupFetchStub(data: any) {
  return function fetchStub(_url: any): Promise<any> {
    return new Promise((resolve) => {
      resolve({
        json: () =>
          Promise.resolve(data),
      });
  })
}}