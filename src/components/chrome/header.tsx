import {Navbar, NavbarBrand, Nav,NavItem, NavLink} from "reactstrap"
import React, {ReactElement, useState} from 'react'
import logo from '../../logo.svg';
import { useNavigate } from "react-router";





const TABS = [
    {
        "title": "Jobs",
        "href": "/jobs"
    },
    {
        "title": "Reports",
        "href": "/"
    },
    {
        "title": "Admin",
        "href": "/"
    }
]



export default function Header() {
    const [activeTab, setActiveTab] = useState(0);
    const navigate = useNavigate()

    function tabSelect(event:any, url: string, idx: number){
        navigate(url)
        setActiveTab(idx)
    }

    const createNavLinks = (): ReactElement[] => (
        TABS.map((tabItem:any, idx:number) => (
            <NavItem key={idx}>
                <NavLink 
                        onClick={(target) => tabSelect(target, tabItem['href'], idx)} 
                        className={idx === activeTab ? "active" : ""}>
                    {tabItem['title']}
                </NavLink>
            </NavItem>
        ))
    );
  return (
    <>
        <Navbar
                color="dark"
                dark 
                fixed="left">
            <NavbarBrand href="/">
                <img alt="logo" src={logo} style={{height: 40, width:40}}/>
            </NavbarBrand>
            <Nav tabs fill className="me-auto" >
                {createNavLinks()}
            </Nav>
        </Navbar>
    </>
  )
}