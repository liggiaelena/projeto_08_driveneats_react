import ReactDOM from 'react-dom';

import Top from "./Top";
import Page from './Page';
import Bottom from './Bottom';

function Root(){
    return(
        <div>
            <Top />
            <Page />
            <Bottom />
        </div>
        
    );
}

ReactDOM.render(<Root />, document.querySelector(".root"));

