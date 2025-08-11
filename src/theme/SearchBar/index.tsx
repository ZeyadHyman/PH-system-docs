import React, { type ReactNode } from "react";
import SearchBar from "@theme-original/SearchBar";
import type SearchBarType from "@theme/SearchBar";
import type { WrapperProps } from "@docusaurus/types";

type Props = WrapperProps<typeof SearchBarType>;

export default function SearchBarWrapper(props: Props): ReactNode {
  return (
    <SearchBar
      {...props}
      style={{
        color: "red",
        padding: "0.5rem 1rem",
        borderRadius: "8px",
        border: "1px solid #ccc",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        backgroundColor: "#ff1414ff",
      }}
    />
  );
}
