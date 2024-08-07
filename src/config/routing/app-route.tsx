import { Icons } from "@/components/Icons/Icons";
import { SideNavItem } from "@/util/types";

export const appRoute: SideNavItem[] = [
  {
    name: "Home",
    routePath: "home",
    icon: <Icons.home />,
  },
  {
    name: "Settings",
    routePath: "settings",
    icon: <Icons.settings />,
    isDisabled: true,
  },
];
