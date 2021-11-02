import React from 'react';
import './SideNavigation.css';
import sunSvg from './../../img/sun.svg'

enum Tabs {
    PROFIL,
    SKILLS,
    EXPERIENCES,
    FORMATIONS,
    CONTACT,
    HOBBIES,
    CLEAR
}

export default function SideNavigation(props: any) {

    function handleTabClick(tab: number) {
        props.tabClickHandler();
    }

    function handleThemeClick(theme: string) {
        props.themeClickHandler();
    }

    return (
        <div className="sideNavigation-root">
            <div className="sideNavigation-decoContainer">
                <div className="sideNavigation-deco">

                </div>
            </div>
            <div className="sideNavigation-titleContainer">
                <h1 className="sideNavigation-title">
                    /sornin
                    <span className="sideNavigation-titleShadow">
                        /sornin
                    </span>
                </h1>
            </div>
            <div className="sideNavigation-tabContainer">
                <Tab clickHandler={() => handleTabClick(Tabs.PROFIL)} text="/profil"/>
                <Tab clickHandler={() => handleTabClick(Tabs.SKILLS)} text="/skills"/>
                <Tab clickHandler={() => handleTabClick(Tabs.EXPERIENCES)} text="/experiences"/>
                <Tab clickHandler={() => handleTabClick(Tabs.FORMATIONS)} text="/formations"/>
                <Tab clickHandler={() => handleTabClick(Tabs.HOBBIES)} text="/hobbies"/>
                <Tab clickHandler={() => handleTabClick(Tabs.CONTACT)} text="/contact"/>
            </div>
            <div className="sideNavigation-footer">
                <Tab clickHandler={() => handleTabClick(Tabs.CLEAR)} text="/clear"/>
                <ThemeToggle clickHandler={(theme: string) => handleThemeClick(theme)}/>
            </div>
        </div>
    )
}

function Tab(props: any) {

    function handleClick() {
        props.clickHandler();
    }

    return (
        <div className="tab-root">
            <h2 className="sideNavigation-tab" onClick={() => handleClick()}>
                {props.text}
                <span className="sideNavigation-tabShadow">
                        {props.text}
                </span>
            </h2>
        </div>
    )
}

function ThemeToggle(props: any) {

    function handleClick() {
        props.clickHandler();
    }

    return (
        <div className="themeToggle-root" onClick={() => handleClick()}>
            <img className="themeToggle-img" src={sunSvg} alt="Dark mode"/>
        </div>
    )
}

export {SideNavigation, Tabs}