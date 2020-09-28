import React from "react";
import { HomeContainer } from "./Home";
import { UsersContainer } from "./Users";
import { ProfileContainer } from "./Profile";
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import History from "@material-ui/icons/History";
import Settings from "@material-ui/icons/Settings";

const routes = [
  {
    path: "/profile",
    name: "Profile",
    component: ProfileContainer,
    layout: "/cabinet",
    icon: Person,
    rtlName: "",
  },
  {
    path: "/history",
    name: "History",
    component: () => (<>History</>),
    layout: "/cabinet",
    icon: History,
    rtlName: "",
  },
  {
    path: "/settigns",
    name: "Settings",
    component: () => (<>Settings</>),
    layout: "/cabinet",
    icon: Settings,
    rtlName: "",
  },
];

export default routes;