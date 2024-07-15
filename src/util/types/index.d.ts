import { ReactNode } from "react";
import { Models } from "../enums";

export type SideNavItem = {
  routePath: string;
  name: string;
  icon: React.ReactElement;
};

export interface CreateData {
  image: File;
  question: string;
  model: Models.VILT;
}
interface results {
  answer: string;
  score: string;
}

export interface CreateDataResponseType {
  result: results[];
}

export type ModelType = Models.VILT | Models.RETINA;
