import { ReactNode } from "react";
import { Models } from "../enums";

export type SideNavItem = {
  routePath: string;
  name: string;
  icon: React.ReactElement;
  isDisabled?: boolean;
};

export interface CreateData {
  image: File;
  question: string;
  model: Models.VILT | Models.RETINA;
}
interface results {
  answer: string;
  score: string;
}

export interface CreateDataResponseType {
  result: results[];
}
export interface CreateDataResponseTypeRetina {
  result: string;
}
export type ModelType = Models.VILT | Models.RETINA;
