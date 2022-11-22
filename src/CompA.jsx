import React, { createContext,useContext } from 'react';
import CompB from './CompB';
import {ImgVal1} from './App'


let ImgVal=createContext();

function CompA() {
    const img_app = useContext(ImgVal1)
    
    return (
        <div>
            <h1>Hello There! I'm Joey!!🚀</h1>

            <ImgVal.Provider value={'https://m.media-amazon.com/images/I/61CMdmBUSoL._AC_SL1000_.jpg'}><CompB/></ImgVal.Provider>
            <div><img src={img_app} alt="Joey again!" /></div>
        </div>
    )
}

export default CompA
export {ImgVal}
