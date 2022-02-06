export interface IHistoryCases {
  cases: number;
  date: Date;
}

export interface IHistoryIncidence {
  weekIncidence: number;
  date: Date;
}

export interface FormattedHistoryCase {
  cases: number;
  date: string;
}

export interface FormattedHistoryIncidence {
  weekIncidence: number;
  date: string;
}
