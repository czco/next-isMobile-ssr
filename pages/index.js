import React from "react";
import { render } from "react-dom";
import Head from "next/head";
import { isMobile as rddIsMobile} from 'react-device-detect'
const Index = props => (
    <div>
        <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
);

Index.getInitialProps = ({ req }) => {
    let userAgent;
    if (req) {
        // if you are on the server and you get a 'req' property from your context
        userAgent = req.headers["user-agent"]; // get the user-agent from the headers
    } else {
        userAgent = navigator.userAgent; // if you are on the client you can access the navigator from the window object
    }
    let nativeIsMobile = Boolean(
        userAgent.match(
            /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
        )
    );

    return { 
        isSSR:req ? true : false,
        nativeIsMobile,
        rddIsMobile
     };
};

export default Index