import { css } from 'styled-components';

export const container = css`
  width: 200%;
  height: 200%;
  transform-origin: 50% 50%;
  border-radius: 50%;
  transform: ${({ skew, polar, centralAngle }) => `skew(${-skew}deg) rotate(${((polar ? 90 : centralAngle) / 2) - 90}deg)`};
  color: black;
  border: 6px solid rgba(255, 255, 255, 0);
  background: radial-gradient(transparent ${({ centerRadius }) => `${centerRadius}, rgba(0, 0, 0, 0.67) ${centerRadius}`});
  outline: none;

  &:hover {
    color: white;
    border: 6px solid #add8e6;
    background: radial-gradient(transparent ${({ centerRadius }) => `${centerRadius}, #424242 ${centerRadius}`});
  }
`;

export const contentContainer = css`
  position: absolute;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  top: ${({ radius, centralAngle, centerRadius, contentHeight }) => `calc((${centralAngle > 90 ? '50% + ' : ''}${radius} - ${centerRadius}) / 2 - ${contentHeight} / 2)`};
`;

export const content = css`
  display: inline-block;
  transform: rotate(${({ angle }) => -angle}deg);
  display: flex;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
