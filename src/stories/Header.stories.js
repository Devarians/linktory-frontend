import React from "react";

import Header from "../blocks/header/Header";

export default {
  title: "Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const DefaultHeader = Template.bind({});
DefaultHeader.args = {
  user: { name: "Shayan" },
};
/*
export const LoggedOut = Template.bind({});
LoggedOut.args = {}; */
