import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { styled } from "@linaria/react";
import { SurpriseBox } from "features/surprise-box";

const TestDiv = styled.div`
  background: red;
  color: gold;
`;

const IndexPage: React.FC<PageProps> = () => {
  return <SurpriseBox />;
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
