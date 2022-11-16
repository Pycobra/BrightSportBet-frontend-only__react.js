import React from 'react';
import "./bottom-pallete.styles.css"


const BottomPallete = ({}) => {
    const HandleClick = e => {
        const newElement = document.createElement('div')
        const imageHolder = document.createElement('span')
        imageHolder.className = "bottom-img-holder"
        imageHolder.onclick = () =>{
            newElement.style.display = 'none'
        }
        // imageHolder.innerHTML = `<div>${<FontAwesomeIcon icon={faCaretDown} className="icon"/></div>}`
        imageHolder.innerHTML = `<span>&#10005;</span>`
        newElement.className = 'new-element'
        const SideNav = document.querySelector('#side-nav-right')
        SideNav.querySelector('.s-nav__item:nth-child(5)').style.display = 'none'
        SideNav.querySelector('.s-nav__item:nth-child(6)').style.display = 'none'
        SideNav.style.display = 'grid'
        const wrap = document.querySelector('#bottom-pallete')
        
        newElement.insertAdjacentElement('afterbegin', SideNav)
        newElement.insertAdjacentElement('afterbegin', imageHolder)
        // const clonedSideNav = React.cloneElement(SideNav)
        console.log(SideNav)
        console.log(wrap)
        console.log(newElement)
        wrap.insertAdjacentElement('afterbegin', newElement)


    }
    return (
        <div id="bottom-pallete">
            <div className='b-p__wrap'>
                <ul className='b-p__list'>
                    <li className='b-p__list-item'><span className='b-p__img-holder'>&#9833;</span><span>A-Z Menu</span></li>
                    <li className='b-p__list-item'><span className='b-p__img-holder'>&#9997;</span><span>Casino</span></li>
                    <li onClick={e => HandleClick(e)} className='b-p__list-item'>
                        <div className='wrap'>
                            <span>156.2</span>
                            <span>1</span>
                            <span>Betslip</span>
                        </div>
                    </li>
                    <li className='b-p__list-item'><span className='b-p__img-holder'>&#10041;</span><span>Check Bet</span></li>
                    <li className='b-p__list-item'><span className='b-p__img-holder'>&#9783;</span><span>Login</span></li>
                </ul>
            </div>
        </div>
    )
 };

 export default BottomPallete;
