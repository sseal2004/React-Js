import { StrictMode } from 'react'
// import ReactDom from 'react-dom/client'
import ReactDom from 'react-dom/client'
// initialize react here
import React from 'react'

import App from './App.jsx'

function MyApp () {
    return (
        <>
            <h1>Custom App !</h1>
        </>
    )
}

//Method of react element 
// const ReactElement = {
//     type : 'a',
//     props :{
//        href:'https://google.com' ,
//       target:'_blank'   
//     },
//     children: 'Click this link to open Google'
// }
const AnotherElement = (
    <a href="https://google.com" target="_blank">
        Click this link to open Google
    </a>
)
const anotherUser = "Soumyadipta 2"

const reactElement = React.createElement(
    'a',
    { href: "https://google.com", target: '_blank' },
    'click me to visit Google'+
    anotherUser
)

ReactDom.createRoot(document.getElementById('root')).render(
    reactElement
    // <App/>
)
