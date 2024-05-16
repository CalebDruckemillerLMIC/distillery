import {Navbar, NavbarBrand, Nav,NavItem, NavLink} from "reactstrap"
import React, {ReactElement, useState} from 'react'
import logo from '../../logo.svg';
import { useNavigate } from "react-router";

type Props = {}




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



export default function Header({}: Props) {
    const [activeTab, setActiveTab] = useState(0);
    const navigate = useNavigate()


    function tabSelect(event:any, url: string, idx: number){
        navigate(url)
        setActiveTab(idx)
    }

    const createNavLinks = (): ReactElement[] => (
        TABS.map((tabItem:any, idx:number) => (
            <NavItem key={idx}>
                <NavLink onClick={(target) => tabSelect(target, tabItem['href'], idx)} className={idx === activeTab ? "active" : ""}>{tabItem['title']}</NavLink>
            </NavItem>
        ))
    );
  return (
    <>
        <Navbar
                color="dark"
                dark 
                fixed="bottom">
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