import React from 'react';
import {Link} from 'react-router-dom';
import { Header, Segment } from 'semantic-ui-react';
import './Header.css';


export default function PageHeader({user, handleLogout}){
    return (
        <Segment className="page-header" clearing>
            <Header as='h2' floated='left'>
                <Link to="">Hi, {user.username}!</Link>
            </Header>
            <Header as='h2' floated='right'>
                <Link to="" onClick={handleLogout}>Logout</Link>
            </Header>
        </Segment>
    )
}