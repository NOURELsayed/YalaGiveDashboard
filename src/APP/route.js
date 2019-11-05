import React from "react"
import { Switch, Route } from "react-router-dom"

import Layout from "../components/layout"
import Dashboard from "../Pages/Dashboard/dashboard"
import Investments from "../Pages/Dashboard/Investment"
import Userprofile from "../Pages/Dashboard/userProfile"
import Tokens from "../Pages/Dashboard/buytoken"
import KYCform from "../Pages/Dashboard/KYC-form"

function DrewerRouters (props) {
  const title = "Yalla Give"
  const menuItems = [
    { path:"", title: "Dashboard", icon: "dashboard" },
    { path:"investments", title: "Investments", icon: "monetization_on"},
    { path:"userprofile", title: "Userprofile", icon: "person"},
    { path:"tokens", title: "Tokens", icon: "device_hub"},
    { path:"kycform", title: "KYC", icon: "note"},
  ];

  return (
      <Layout title={title} menuItems={menuItems} logOut={props.logOut}>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/dashboard/investments" component={Investments} />
          <Route exact path="/dashboard/userprofile" component={Userprofile} />
          <Route exact path="/dashboard/tokens" component={Tokens} />
          <Route exact path="/dashboard/kycform" component={KYCform} />
        </Switch>
      </Layout>
  )
}

export default DrewerRouters ;
