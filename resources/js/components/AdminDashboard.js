import React from 'react'
import Sidebar from './admin/Sidebar';
import TabContent from './admin/TabContent';

function AdminDashboard() {
  return (
      <div className="container-fluid">
          <div className="row">
              <div className="col-md-3">
                <Sidebar />
              </div>
              <div className="col-md-9">
                <TabContent />
              </div>
          </div>
      </div>
  );
}

export default AdminDashboard