import React from 'react';
import {Link} from "react-router-dom";

class PageNotFound extends React.Component {
    render(){
        return(
            <div>
                <p>404-PageNotFound</p>
                <p>
                    <Link to="/">Voltar para Home page</Link>
                </p>
            </div>
        )
    }
}
export default PageNotFound;