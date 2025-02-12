import React from 'react'

export function nextArrow(props) {
    return(
        <>
            <div className={props.className} style={{color: "red", padding: "10px"}} onClick={props.onClick}></div>
        </>
    )
}

export function prevArrow(props) {
    <>
        <div className={props.className} style={{...props.style}} onClick={props.onClick}></div>
    </>
}