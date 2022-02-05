const React = require('react')
module.exports = ({spanClassList, aHref, text}) => {
    if(!spanClassList) return (
        <li class="nav-item">
            <a class="nav-link link text-black text-primary display-4" href={aHref} target="_blank">
                {text}
            </a>
        </li>
    )
    return (
        <li class="nav-item">
            <a class="nav-link link text-black text-primary display-4" href={aHref} target="_blank">
                <span class={spanClassList}></span>
                {text}
            </a>
        </li>
    )
}