import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:5000/anti-heroes", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: "4893hfwuig",
          firstName: "Eddy",
          lastName: "Brock",
          house: "Marvel",
          knownAs: "Venom",
        },
        {
          id: "9greg7t767g",
          firstName: "Wade",
          lastName: "Wilson",
          house: "Marvel",
          knownAs: "Deadpool",
        },
        {
          id: "89g6d5i6e45ud",
          firstName: "Jason",
          lastName: "Blood",
          house: "DC",
          knownAs: "Etrigan",
        },
        {
          id: "hvhj89gg8pt67",
          firstName: "Harley",
          lastName: "Quinn",
          house: "DC",
          knownAs: "Harley",
        },
        {
          id: "v7xSZAV",
          firstName: "Selina",
          lastName: "Kyle",
          house: "DC",
          knownAs: "Catwoman",
        },
        {
          id: "Nmla4EH",
          firstName: "Max",
          lastName: "Eisenhardt",
          house: "Marvel",
          knownAs: "Magneto",
        },
      ])
    );
  }),
  rest.get("http://localhost:5000/heroes", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: "7ggew732dw",
          firstName: "Barry",
          lastName: "Allen",
          house: "DC",
          knownAs: "Flash",
        },
        {
          id: "1ggew732dw",
          firstName: "Scott",
          lastName: "Summer",
          house: "Marvel",
          knownAs: "Cyclopes",
        },
        {
          id: "dfw7g2",
          firstName: "Peter",
          lastName: "Parker",
          house: "Marvel",
          knownAs: "Spiderman",
        },
        {
          id: "9gfw9gde",
          firstName: "Bruce",
          lastName: "Wayne",
          house: "DC",
          knownAs: "Batman",
        },
        {
          firstName: "Devlin",
          lastName: "D.",
          house: "Starks",
          knownAs: "Wolf",
          id: "gjcM7z8",
        },
        {
          firstName: "John",
          lastName: "Wick",
          house: "League of assassins ",
          knownAs: "Mr. Wick",
          id: "IE_sLcI",
        },
      ])
    );
  }),
  rest.get("http://localhost:5000/villains", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          firstName: "Lex",
          lastName: "Luther",
          house: "DC",
          knownAs: "Lex",
          id: "3290fhe",
        },
        {
          firstName: "Max",
          lastName: "Eisenhardt",
          house: "Marvel",
          knownAs: "Magneto",
          id: "6r8finlfy",
        },
        {
          firstName: "Darkseid",
          lastName: "none",
          house: "DC",
          knownAs: "The ruler of Apokolops",
          id: "87rfyvivlf78",
        },
        {
          firstName: "Victor",
          lastName: "Von Doom",
          house: "Marvel",
          knownAs: "Doctor Doom",
          id: "97fyiyif",
        },
      ])
    );
  }),
];