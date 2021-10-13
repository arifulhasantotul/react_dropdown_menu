import React from "react";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
   {
      title: "Overview",
      path: "/overview",
      icon: <AiIcons.AiFillHome />,
      iconClosed: <BiIcons.BiChevronDown />,
      iconOpened: <BiIcons.BiChevronUp />,
      subNav: [
         {
            title: "Users 1",
            path: "/overview/users1",
            icon: <IoIcons.IoIosPeople />,
         },
         {
            title: "Users 2",
            path: "/overview/users2",
            icon: <IoIcons.IoIosPeople />,
         },
      ],
   },
   {
      title: "Reports",
      path: "/reports",
      icon: <BiIcons.BiLineChart />,
      iconClosed: <BiIcons.BiChevronDown />,
      iconOpened: <BiIcons.BiChevronUp />,
      subNav: [
         {
            title: "Reports 1",
            path: "/reports/report1",
            icon: <IoIcons.IoIosPaper />,
         },
         {
            title: "Reports 2",
            path: "/reports/report2",
            icon: <IoIcons.IoIosPaper />,
         },
         {
            title: "Reports 3",
            path: "/reports/report3",
            icon: <IoIcons.IoIosPaper />,
         },
      ],
   },
   {
      title: "Products",
      path: "/products",
      icon: <FaIcons.FaCartPlus />,
      cName: "nav_text",
   },
   {
      title: "Team",
      path: "/team",
      icon: <IoIcons.IoMdPeople />,
      cName: "nav_text",
   },
   {
      title: "Messages",
      path: "/messages",
      icon: <FaIcons.FaEnvelopeOpenText />,
      cName: "nav_text",
   },
   {
      title: "Supports",
      path: "/supports",
      icon: <IoIcons.IoMdHelpCircle />,
      cName: "nav_text",
   },
];
