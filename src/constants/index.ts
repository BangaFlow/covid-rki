export const LAST_X_DAYS: number = 90;
export const DISTRICT_CODE: string = "09162";

export const CASES_URL = `https://api.corona-zahlen.org/districts/${DISTRICT_CODE}/history/cases/${LAST_X_DAYS}`;
export const INCIDENCE_URL = `https://api.corona-zahlen.org/districts/${DISTRICT_CODE}/history/incidence/${LAST_X_DAYS}`;

export const mockResponse = {
  data: {
    "09162": {
      ags: "09162",
      name: "München",
      history: [
        {
          weekIncidence: 2340.139309045412,
          date: "2022-02-04T00:00:00.000Z",
        },
        {
          weekIncidence: 2360.499448327579,
          date: "2022-02-05T00:00:00.000Z",
        },
      ],
    },
  },
  meta: {
    source: "Robert Koch-Institut",
    contact: "Marlon Lueckert (m.lueckert@me.com)",
    info: "https://github.com/marlon360/rki-covid-api",
    lastUpdate: "2022-02-05T00:00:00.000Z",
    lastCheckedForUpdate: "2022-02-06T14:58:38.540Z",
  },
};

export const mockedData = [
  {
    "cases": 5870,
    "date": "2022-02-04T00:00:00.000Z"
  },
  {
    "cases": 2492,
    "date": "2022-02-05T00:00:00.000Z"
  }
];