import React, { useContext } from 'react';
import CompC from './CompC';
import { ImgVal1 } from './App';

function CompB() {
//We are going to use useContext Hook. As it is a Hook, it needs to pbe present at the top level of a functional component.

const img1 = useContext(ImgVal1)

    return (
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nisi pariatur veniam culpa, atque harum architecto consequuntur ipsam blanditiis quas temporibus ut et. Ad maiores explicabo, corrupti incidunt inventore velit.</p>
          <div>
            <img src={img1} alt="Mr.Joey Tribbiani" />
           </div>
            <CompC/>
        </div>
    )
}

export default CompB
