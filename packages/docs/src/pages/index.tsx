import React from "react";

import "@pathiri/tokens/dist/css/_variables.css";

import { css } from "@emotion/css";

import * as Tokens from "@pathiri/tokens/dist/json/variables.json";

import Sidebar from '../../src/sidebar.mdx'

type IndexProps = {
  data: {
    site: {
      siteMetadata: {
        homeLabel: string;
        title: string;
        description: string;
      };
    };
    allMdx: {
      nodes: Array<MdxPageType>;
    };
  };
};

interface MdxPageType {
  slug: string;
  frontmatter: {
    title: string;
    description: string;
  };
}

const color = "darkgreen";

/**
 * Color Block
 * @param props
 * @returns
 */

interface ColorBlockProps {
  name: string;
  value: string;
}
const ColorBlock = ({ name, value }: ColorBlockProps) => {
  return (
    <div
      className={css`
        padding: 1rem;
        background-color: ${name};
      `}
    >
      {value}
    </div>
  );
};

export default function IndexPage(props: IndexProps): React.ReactElement {
  const primaryColors = Tokens.colors.primary;
  const primaryKeys = Object.keys(primaryColors);

  const allColors = Tokens.colors;
  const allKeys = Object.keys(allColors);

  return (
    <div
      className={css`
        font-family: Avenir, sans-serif;
      `}
    >

        <Sidebar/>
      <div>
        <h5>@pathiri</h5>
        v0.0.1
      </div>
      <h1>Pathiri Design System</h1>
      <p>`Delightful` Design System Starter</p>
      {allKeys.map((ky: any) => (
        <div
          className={css`
            width: 200px;
            float: left;
            margin-right: 2.5rem;
          `}
        >
          <span
            className={css`
              font-size: 13px;
              font-weight: normal;              
              text-transform: capitalize;
          }
            `}
          >
            <h3>{ky}</h3>

            {Object.keys(allColors[ky]).map((x: any) => (
              <ColorBlock
                name={allColors[ky][x]["value"]}
                value={allColors[ky][x]["value"]}
              />
            ))}
          </span>
        </div>
      ))}
    </div>
  );
}
