import React from 'react';
import {Link} from 'react-router-dom';
import { Header, Segment } from 'semantic-ui-react';
import './Header.css';


export default function PageHeader({user, handleLogout}){
    return (
        <Segment vetical='true' style={{ color: 'grey' }} className="page-header" clearing>
            <Header as='h2' floated='right'>
                <Link style={{ color: 'black' }} to="">Hi, {user.firstname}!</Link>
            </Header>
            <Header as='h2' floated='right'>
                <Link style={{ color: 'black' }} to="" onClick={handleLogout}>Logout</Link>
            </Header>
            <Header floated='left' className='site-name' as='h1'>
                Sheet Music Maker
            </Header>
        </Segment>
    )
}