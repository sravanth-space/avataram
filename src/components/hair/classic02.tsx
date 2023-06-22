import React from "react";
import { HAIR_COLORS, HairColor } from "../../types";

export default function Classic02(props: { hairColor: HairColor }) {
  const { hairColor } = props;
  return (
    <>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M28.1177 27.4657C35.9142 28.6079 49.5988 30.6128 51 18.0019C52 9.00189 38.5 -1.49811 24 8.00188C14.8908 9.35139 12.611 16.2798 12.0917 22.2557C11.4149 22.9721 11 23.9386 11 25.0019C11 25.5323 11.1033 26.0387 11.2908 26.5019C11.1033 26.9651 11 27.4714 11 28.0019C11 29.1075 11.4486 30.1084 12.1737 30.8324C12.0608 31.2023 12 31.595 12 32.0019C12 34.211 13.7909 36.0019 16 36.0019C18.2091 36.0019 20 34.211 20 32.0019C22.2091 32.0019 24 30.211 24 28.0019C24 27.6571 23.9564 27.3225 23.8744 27.0033C23.9163 27.0024 23.9582 27.0019 24 27.0019C24.9517 27.0019 26.3901 27.2126 28.1177 27.4657Z"
        fill={HAIR_COLORS[hairColor]}
      />
      <defs>
        <clipPath id="clip3_274_4378">
          <rect width="64" height="64" fill="white" />
        </clipPath>
      </defs>
    </>
  );
}
