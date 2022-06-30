import React from "react";
import Dashboard from "./Dashboard";
import Farmers from "./Farmers";
import Products from "./Products";
import Transactions from "./Transactions";

function TabContent() {
    return (
        <div className="tab-content">
            <div className="tab-pane container active" id="dashboard">
                <Dashboard />
            </div>
            <div className="tab-pane container fade" id="products">
                <Products />
            </div>
            <div className="tab-pane container fade" id="farmers">
                <Farmers />
            </div>
            <div className="tab-pane container fade" id="transactions">
                <Transactions />
            </div>
            <div className="tab-pane container fade" id="payment">
                <div className="container-fluid mt-5">
                    <iframe
                        style={{ width: "100%", height: "500px" }}
                        frameBorder="10"
                        ratio="4x3"
                        allowFullScreen
                        class="cdb-iframe"
                        src="https://checkout-staging.xendit.co/web/62bd2166ebfbb3b36b61d76c"
                        title="Payment Sample"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default TabContent;
