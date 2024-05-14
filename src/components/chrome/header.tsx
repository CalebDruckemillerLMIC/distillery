import {Navbar, NavbarBrand, Nav,NavItem, NavLink} from "reactstrap"
import React, {ReactElement, useState} from 'react'
import logo from '../../logo.svg';


type Props = {}




const TABS = [
    {
        "title": "Jobs",
        "href": "/"
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

    function toggleActiveTab(event: any, tab: number): void {
        console.log(tab);
        
        setActiveTab(tab)
    }
    const createNavLinks = (): ReactElement[] => (
        TABS.map((tabItem:any, idx:number) => (
            <NavItem key={idx}>
                <NavLink onClick={(target) => toggleActiveTab(target, idx)} className={idx === activeTab ? "active" : ""}>{tabItem['title']}</NavLink>
            </NavItem>
        ))
    );
  return (
    <>
        <Navbar
                color="dark"
                dark 
                fixed="top">
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