import React from "react";
import styled from 'styled-components';
import { greyColor, lightGreyColor } from "../styledConstants";
import { Image } from './Image';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 275px;
  min-width: 275px;
  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
  border-radius: 4px;
  background-color: white;
  overflow: hidden;
  user-select: none;
  hr {
    border: 0;
    border-top: 1px solid #ccc;
  }
`;

interface StyledCardInfoProps {
  fontColor?: string;
  backgroundColor?: string;
}

const StyledCardInfo = styled.div<StyledCardInfoProps>`
  display: flex;
  box-sizing: border-box;
  padding: 10px 15px;
  align-items: center;
  color: ${props => props.fontColor || 'black'};
  background-color: ${props => props.backgroundColor || 'white'};
  text-align: start;
  .image {
    margin-right: 25px;
  }
  .title {
    font-size: 26px;
    margin-bottom: 5px;
  }
  .subtitle {
    color: ${props => props.fontColor || greyColor};
    font-size: 20px;
  }
  .value {
    font-size: 24px;
    flex: 1 0;
    text-align: end;
    margin-left: 15px;
  }
`;

interface CardInfoProps {
  title?: any;
  subtitle?: any;
  value?: any;
  image?: any;
}

export function CardInfo({ title = '', subtitle, value = '', image = '', ...rest }: CardInfoProps) {
  let imageNode;
  if (typeof image === 'string') {
    imageNode = <Image
      width="100px"
      height="100px"
      imageUrl={image}
      circle
    />
  } else {
    imageNode = image;
  }
  return (
    <StyledCardInfo {...rest}>
      <div className="image">
        {imageNode}
      </div>
      <div>
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
      </div>
      {value && <div className="value">
        {value}
      </div>}
    </StyledCardInfo>
  );
}

export const CardList = styled.div`
  overflow: hidden;
  & > :not(:first-child) {
    border-top: 1px solid ${lightGreyColor};
  }
`;

export const CardDescription = styled.p`
  padding: 15px;
`;

export const CardFooter = styled.div`
  padding: 15px;
  flex: 1 0 20px;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
`;

export const CardSubstrate = styled.div`
  background-color: ${lightGreyColor};
  padding: 1px;
  ${CardList} {
    border-radius: 4px;
  }
`;

export const CardProperty = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 15px;
`;
