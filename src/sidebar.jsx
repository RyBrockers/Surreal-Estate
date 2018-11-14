/* eslint-disable babel/quotes */
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/sidebar.css';

const Sidebar = () => {
  return (
    <div>
      <Link to={`/?query={"city": "Manchester"}`}><button className="searchbutton">Manchester</button></Link>
      <Link to={`/?query={"city": "Leeds"}`}><button className="searchbutton">Leeds</button></Link>
      <Link to={`/?query={"city": "Sheffield"}`}><button className="searchbutton">Sheffield</button></Link>
      <Link to={`/?query={"city": "Liverpool"}`}><button className="searchbutton">Liverpool</button></Link>
      <Link to={`/?query={"city": "Wigan"}`}><button className="searchbutton">Wigan</button></Link>

    </div>
  );
};

export default Sidebar;
