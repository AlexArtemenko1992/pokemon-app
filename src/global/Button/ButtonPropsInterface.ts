import { ReactNode } from "react";

export interface ButtonPropsInterface {
  children: ReactNode;
  onClick: () => void;
  className: string;
}
