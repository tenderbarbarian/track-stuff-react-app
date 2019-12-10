import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) =>(
    <div>
        <h1>Info </h1>
        <p>the info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) =>{
    return (props)=>(
        <div>
            {props.isAdmin && <p>This is private. Do not share!</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) =>{
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props} />: <p>Please log in.</p>}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info='details, some details'/>, document.getElementById('app'));
//ReactDOM.render(<AuthInfo isAuthenticated={false} info='details, some details'/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info='details, some details'/>, document.getElementById('app'));