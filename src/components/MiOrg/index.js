import {useState} from "react"

import "./MiOrg.css"
const MyOrg = (props) => {
    
    return (
        <section className="org_secction">
            <h3 className="title">Mi Organizacion</h3>
            <img onClick={props.changeShow} src="/img/add.png" alt="add"></img>
        </section>
    )
}

export default MyOrg;