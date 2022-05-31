  import React from "react";
import PageTemplate from "../components/login";



export default {
  title: "Extra/login",
  component: PageTemplate,
};

export const Basic = () => { return <PageTemplate isAuthenticated={false} location={{ state: { pathname: "/" } }}/>;};


Basic.storyName = "Default";


  
