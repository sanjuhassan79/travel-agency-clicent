import React from 'react';
import Sidebar from '../Sidebar';
import MainItem from './MainItem';

const Servers = () => {
    return (
        <div className="container-fluid">
        <div className="row">
          
          <div className="col-2 bg-info">
              <Sidebar></Sidebar>
          </div>
          <div className="col-10">
              
              <MainItem></MainItem>
          </div>
        </div>
      </div>
    );
};

export default Servers;