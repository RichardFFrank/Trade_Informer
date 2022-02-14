import React from "react";

function about() {
    return (
        <div className="App">
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <h1> Welcome to Trade Informer </h1>
                            <p>We’re here to help you take control of your financial future by letting you consolidate your portfolio in one place. 
                            No more trying to view all of your investments across multiple platforms/brokers. 
                            We also provide up-to-date information across brokers to help you decided who will give you the best value for your hard earned money.</p>
                    </div>
                    <div className="col-sm">
                        <img className="img-fluid" src="https://previews.123rf.com/images/nicedream/nicedream1802/nicedream180200015/96748768-stock-market-or-forex-trading-graph-in-graphic-concept-suitable-for-financial-investment-or-economic.jpg" alt="Stock Chart Placeholder"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default about;