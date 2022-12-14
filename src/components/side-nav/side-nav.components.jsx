import React from "react";
import "./side-nav.styles.css";
import SideNavLeft from "../side-nav-left/side-nav-left.components";
import SideNavRight from "../side-nav-right/side-nav-right.components";








const SideNav = ({Leftside, Rightside, leagueNames, AccordionHash}) => {

    return (
        <aside id='side-nav' className={`${Leftside ? "left-side" : 'right-side'}`}>
            <div className="wrap">
                {
                Leftside 
                ? 
                <SideNavLeft leagueNames={leagueNames} AccordionHash={AccordionHash}/>
                : 
                <SideNavRight />
                }
            </div>
        </aside>
    )
}

 export default SideNav;



































 