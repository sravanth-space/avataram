import React from "react";
import { HAIR_COLORS, HairColor } from "../../types";

export default function Classic01(props: { hairColor: HairColor }) {
  const { hairColor } = props;
  return (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.9649 26.2011C34.576 28.064 42.3537 30.6462 50.5 22.5C54.5 18.5 36.5 1.5 22 11C10.6667 12.679 11.3144 19.4698 11.8143 24.7106C11.9099 25.7126 12 26.6579 12 27.5C12 28.0329 12.0697 28.4317 12.2003 28.7182C12.0396 29.9513 12 31.1852 12 32C12 34.2091 13.7909 36 16 36C18.2091 36 20 34.2091 20 32C22.2091 32 24 30.2091 24 28C24 27.654 23.9561 27.3182 23.8735 26.998C23.9155 26.9993 23.9577 27 24 27C25.2237 27 26.3191 26.4505 27.0528 25.5847C27.6574 25.767 28.2957 25.979 28.9649 26.2011Z"
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
