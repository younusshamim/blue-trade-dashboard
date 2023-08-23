import {
  dashboard,
  markets,
  transactions,
  user,
  setting,
} from "../assets/icons";
import { FiLogOut } from "react-icons/fi";
import { TfiHelpAlt } from "react-icons/tfi";

const list1 = [
  {
    id: 1,
    name: "Dashboard",
    link: "/",
    svg: dashboard,
  },
  {
    id: 2,
    name: "Markets",
    link: "/markets",
    svg: markets,
  },
  {
    id: 3,
    name: "Transactions",
    link: "/transactions",
    svg: transactions,
  },
  {
    id: 4,
    name: "Profile",
    link: "/profile",
    svg: user,
  },
  {
    id: 5,
    name: "Setting",
    link: "/setting",
    svg: setting,
  },
];

const list2 = [
  {
    id: 6,
    name: "Help",
    link: "/help",
    svg: TfiHelpAlt,
  },
  {
    id: 7,
    name: "Log Out",
    link: "/logout",
    svg: FiLogOut,
  },
];

export { list1, list2 };
