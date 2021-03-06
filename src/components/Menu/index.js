/* @flow */

import * as React from 'react';
import styled from 'styled-components';
import PreloadLink from 'components/PreloadLink';
import { sizes, colors } from 'styles/variables';
import { endpoint } from 'config/url';

const MenuUI = styled.div`
  position: absolute;
  top: ${sizes.height.header}px;
  right: 0;
  max-width: 320px;
  width: 100%;
  padding: 12px;
  border: 1px ${colors.superLightGray} solid;
  background-color: ${colors.white};
`;
const MenuLink = styled.a`
  display: block;
  color: ${colors.link};
  &.active {
    color: ${colors.accent};
  }
  &:not(:first-child) {
    margin-top: 12px;
  }
  &:hover {
    text-decoration: underline;
  }
`;
const MenuLinkList = [
  {
    to: '/fxUser',
    text: 'To FxUser',
  },
  {
    to: '/fxData',
    text: 'To FxData',
  },
];

type Props = {
  isOpenMenu: boolean,
};

export default function Menu(props: Props) {
  const { isOpenMenu } = props;

  return isOpenMenu ? (
    <MenuUI>
      {MenuLinkList.map((item, i) => (
        <PreloadLink href={item.to} key={i}>
          <MenuLink>{item.text}</MenuLink>
        </PreloadLink>
      ))}
    </MenuUI>
  ) : null;
}
