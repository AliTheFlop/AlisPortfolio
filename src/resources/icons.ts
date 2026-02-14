import { IconType } from "react-icons";

import {
  HiOutlineRocketLaunch,
  HiOutlineUser,
  HiOutlineBanknotes,
  HiOutlineClock,
} from "react-icons/hi2";


export const iconLibrary: Record<string, IconType> = {
  rocket: HiOutlineRocketLaunch,
  person: HiOutlineUser,
  cash: HiOutlineBanknotes,
  clock: HiOutlineClock,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;