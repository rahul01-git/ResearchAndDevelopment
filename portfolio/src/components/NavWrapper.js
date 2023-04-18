import React, { Component } from 'react'

export default class Nav extends Component {
    render() {
        return (
            <>
                <nav className="header__nav">
                    <ul>
                        <li>HOME</li>
                        <li>/</li>
                        <li>PORTFOLIO</li>
                        <li>/</li>
                        <li>SKILL</li>
                        <li>/</li>
                        <li>EDUCATION</li>
                        <li>/</li>
                        <li>CONTACT</li>
                        <li>/</li>
                        <li>BLOG</li>
                    </ul>
                </nav>
            </>
        )
    }
}
