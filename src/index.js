import ReactDOM from 'react-dom';

import Top from "./Html/Top";
import Page from './Html/Page';
import Bottom from './Html/Bottom';

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

