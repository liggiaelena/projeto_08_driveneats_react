import ReactDOM from 'react-dom';
import Top from "./components/Top/Top";
import Page from './components/Page/Page';
import Bottom from './components/Boottom/Bottom';
import "./CSS/reset.css";
import "./CSS/styles.css";

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

