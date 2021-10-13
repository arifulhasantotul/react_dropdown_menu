import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(Link)`
   display: flex;
   color: #e1e9fc;
   justify-content: space-between;
   align-items: center;
   height: 60px;
   list-style: none;
   height: 60px;
   text-decoration: none;
   font-size: 18px;
   transition: all 0.3s ease;

   &:hover {
      background: #252831;
      border-left: 4px solid #632ce4;
      cursor: pointer;
   }
`;
const SidebarLabel = styled.span`
   margin-left: 16px;
`;

const DropdownLink = styled(Link)`
   background: #414757;
   height; 60px;
   padding-left: 3rem;
   display: flex;
   align-items: center;
   text-decoration: none;
   color: #f5f5f5;
   font-size: 18px;
   padding: 1rem;
   transition: all 0.3s ease;

   &:hover{
      background: #632ce4;
      cursor: pointer;
   }
`;

const SubMenu = ({ item }) => {
   const [openSubNav, setOpenSubNav] = useState(false);

   const showSubNav = () => setOpenSubNav(!openSubNav);
   return (
      <div>
         <SidebarLink to={item.path} onClick={item.subNav && showSubNav}>
            <div>
               {item.icon}
               <SidebarLabel>{item.title}</SidebarLabel>
            </div>
            <div>
               {item.subNav && openSubNav
                  ? item.iconOpened
                  : item.subNav
                  ? item.iconClosed
                  : null}
            </div>
         </SidebarLink>
         {openSubNav &&
            item.subNav.map((item, index) => (
               <DropdownLink to={item.path} key={index}>
                  {item.icon}
                  <SidebarLabel>{item.title}</SidebarLabel>
               </DropdownLink>
            ))}
      </div>
   );
};

export default SubMenu;
