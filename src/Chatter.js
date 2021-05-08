
import React from 'react';
import Chat from './Chat';
import './Chatter.css'
import Sidebar from './Sidebar';
function chatter(props) {
    return (
        <div className="chatter">
            {/*sidebar*/}
            <Sidebar/>
             {/*Chat*/}
             <Chat />
        </div>
    );
}

export default chatter;