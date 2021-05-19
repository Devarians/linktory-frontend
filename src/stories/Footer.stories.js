import React from "react";

import Footer from "../blocks/footer/Footer";

export default {
  title: "Footer",
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const DefaultFooter = Template.bind({});
DefaultFooter.args = {
  user: {
    name: "Shayan",
  },
};
