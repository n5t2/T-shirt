import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as HiIcons from "react-icons/hi";
import * as MdIcons from "react-icons/md";
import * as ImIcons from "react-icons/im";
import * as GiIcons from "react-icons/gi";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiOutlineHome />,
    cName: "nav-text",
  },
  {
    title: "Offers",
    path: "/Offers",
    icon: <MdIcons.MdOutlineLocalOffer />,
    cName: "nav-text",
  },
  {
    title: "Men",
    path: "/Men",
    icon: <ImIcons.ImMan  />,
    cName: "nav-text",
  },
  {
    title: "AboutUs",
    path: "/AboutUs",
    icon: <FaIcons.FaBirthdayCake />,
    cName: "nav-text",
  },
  {
    title: "FootballTops",
    path: "/FootballTops",
    icon: <HiIcons.HiAcademicCap />,
    cName: "nav-text",
  },
  {
    title: "Women",
    path: "/Women ",
    icon: <ImIcons.ImWoman />,
    cName: "nav-text",
  },
  {
    title: "Kids",
    path: "/Kids ",
    icon: <ImIcons.ImMan />,
    cName: "nav-text",
  },
  {
    title: "Contact",
    path: "/Contact",
    icon: <IoIcons.IoIosContact />,
    cName: "nav-text",
  },
];





