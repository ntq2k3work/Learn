import React, { useState } from 'react';
import "./ToggleStyle.css";

function Toggle(){
    const [on,setOn] = useState(false);
        return (
            <div className={`toggle ${on === true ? "toggle-active" : ""}`} onClick={() => setOn(!on)}>
                <div className={`spinner ${on === true ? "spinner-active" : ""}`}></div>
            </div>
        )
}
export default Toggle;