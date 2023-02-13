import React from "react";
import s from "./header.module.sass"
import {logoutUser} from "../../../store/REDUX-TOOLKIT/features/app/appThunk";
import {useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";
import club from "../../../club.png";
import {AppDispatch} from "../../../store/reduxToolkit";
import {Button, Input} from "antd";

function Header() {
    const dispatch = useDispatch<AppDispatch>()
    return (
        <>
            <header className={s.header}>
                <div className={s.headerLogo}>
                    <div className={s.logo}>
                        <img src={club}
                             alt="club"
                        />
                        <svg
                            fill="none"
                            height="20"
                            viewBox="0 0 20 20"
                            width="20"
                            xmlns="http://www.w3.org/2000/svg">
                            <g fill="currentColor">
                                <path d="M10.8 6.05a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0zm3.65 2.15a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM4.3 9.45a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0zM7.85 4.8a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z"></path>
                                <path clipRule="evenodd"
                                      d="M14.18 14.04c2.14.23 4.32-.75 4.32-4.04A8.47 8.47 0 0 0 10 1.5 8.47 8.47 0 0 0 1.5 10a8.47 8.47 0 0 0 8.5 8.5c1.13 0 2.25-1 1.98-2.43l-.17-.68c-.25-.94-.43-1.6 1.08-1.49l1.29.14zm.16-1.5-.25-.02-1.1-.12a3.34 3.34 0 0 0-1.74.27 2 2 0 0 0-1.1 1.68 3.8 3.8 0 0 0 .22 1.47l.14.54c.02.13 0 .22 0 .28a.44.44 0 0 1-.1.17.57.57 0 0 1-.41.19 6.97 6.97 0 0 1-7-7 6.97 6.97 0 0 1 7-7 6.97 6.97 0 0 1 7 7c0 1.3-.41 1.87-.77 2.15-.42.32-1.07.48-1.9.4z"
                                      fillRule="evenodd"></path>
                            </g>
                        </svg>
                    </div>
                </div>

                <div className={s.searchInputWrapper}>
                    <div className={s.searchSvg}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             fill="none"
                             viewBox="0 0 24 24"
                             stroke="currentColor">
                        <path strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z">
                        </path>
                    </svg>
                    </div>
                    <Input placeholder="Search..."
                           bordered={false}
                    />
                    <Button >Upload</Button>
                </div>
                <div className={s.elementHover}>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             width="24"
                             height="24"
                             fill="currentColor"
                             viewBox="0 0 24 24">
                            <path d="M12 2.1c4.02 0 6.9 3.28 6.9 7.53v1.6c0 .23.2.53.72 1.08l.27.27c1.08 1.1 1.51 1.73 1.51 2.75 0 .44-.05.79-.27 1.2-.45.88-1.42 1.37-2.87 1.37h-1.9c-.64 2.33-2.14 3.6-4.36 3.6-2.25 0-3.75-1.3-4.37-3.67l.02.07H5.74c-1.5 0-2.47-.5-2.9-1.41-.2-.4-.24-.72-.24-1.16 0-1.02.43-1.65 1.51-2.75l.27-.27c.53-.55.72-.85.72-1.08v-1.6C5.1 5.38 7.99 2.1 12 2.1Zm2.47 15.8H9.53c.46 1.25 1.25 1.8 2.47 1.8 1.22 0 2.01-.55 2.47-1.8ZM12 3.9c-2.96 0-5.1 2.43-5.1 5.73v1.6c0 .85-.39 1.46-1.23 2.33l-.28.29c-.75.75-.99 1.11-.99 1.48 0 .19.01.29.06.38.1.22.43.39 1.28.39h12.52c.82 0 1.16-.17 1.28-.4.05-.1.06-.2.06-.37 0-.37-.24-.73-.99-1.48l-.28-.29c-.84-.87-1.23-1.48-1.23-2.33v-1.6c0-3.3-2.13-5.73-5.1-5.73Z">
                            </path>
                        </svg>
                    </div>
                    <div className={s.elementHover}>
                        <svg fill="none"
                             height="20"
                             viewBox="0 0 20 20"
                             width="20"
                             xmlns="http://www.w3.org/2000/svg">
                            <g fill="currentColor">
                                <path d="M10 6.25c-.58 0-1.07.4-1.21.94a.75.75 0 0 1-1.45-.38 2.75 2.75 0 0 1 5.41.69c0 1.21-.65 1.84-1.14 2.3h-.01c-.48.45-.77.73-.86 1.3a.75.75 0 0 1-1.48-.2c.16-1.12.8-1.71 1.25-2.14l.07-.06c.45-.42.67-.66.67-1.2 0-.69-.56-1.25-1.25-1.25zM10 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2z">
                                </path>
                                <path clipRule="evenodd"
                                      d="M10 1.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17zM3 10a7 7 0 1 0 14 0 7 7 0 0 0-14 0z"
                                      fillRule="evenodd">

                                </path>
                            </g>
                        </svg>
                    </div>

                    <div className={s.elementHover}
                         onClick={() => dispatch(logoutUser())}
                    >
                        <NavLink to="/login">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 width="20"
                                 height="20"
                                 fill="currentColor"
                                 viewBox="0 0 20 20">
                                <path fillRule="evenodd"
                                      d="M8.32 2h.93a.75.75 0 1 1 0 1.5h-.9c-1 0-1.7 0-2.24.04a2.9 2.9 0 0 0-1.1.26A2.75 2.75 0 0 0 3.8 5c-.13.25-.21.57-.26 1.11-.04.55-.04 1.25-.04 2.24v3.3c0 1 0 1.7.04 2.24.05.53.13.86.26 1.1A2.75 2.75 0 0 0 5 16.2c.25.13.57.21 1.11.26.55.04 1.25.04 2.24.04h.9a.75.75 0 0 1 0 1.5h-.93c-.96 0-1.72 0-2.33-.05a4.39 4.39 0 0 1-1.67-.41 4.25 4.25 0 0 1-1.86-1.86A4.38 4.38 0 0 1 2.05 14C2 13.4 2 12.64 2 11.68V8.32c0-.96 0-1.72.05-2.33.05-.63.16-1.17.41-1.67a4.25 4.25 0 0 1 1.86-1.86c.5-.25 1.04-.36 1.67-.41C6.6 2 7.36 2 8.32 2Zm5.9 4.97a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 1 1-1.06-1.06l1.22-1.22H8.75a.75.75 0 0 1 0-1.5h6.69l-1.22-1.22a.75.75 0 0 1 0-1.06Z"
                                      clipRule="evenodd"></path>
                            </svg>
                        </NavLink>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
