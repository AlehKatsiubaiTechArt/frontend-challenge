import React from 'react';
import styled from 'styled-components';

interface BreadcrumbProps {
  className?: string;
  items: string[];
  activeIndex?: number;
  onChange?: (index: number) => void | null
}

function Breadcrumb({ className, items = [], activeIndex = 0, onChange }: BreadcrumbProps) {
  const handleClick = (index: number) => {
    if (index === activeIndex) {
      return;
    }
    onChange?.(index);
  };

  return (
    <ul className={className}>
      {items.map((item, i) => (
        <li
          key={item}
          className={i === activeIndex ? 'active' : ''}
          onClick={() => handleClick(i)}
        >
            {item}
        </li>
      ))}
    </ul>
  )
}

export default styled(Breadcrumb)`
  list-style: none; 
  overflow: hidden; 
  font: 16px Helvetica, Arial, Sans-Serif;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  li {
    color: gray;
    text-decoration: none; 
    padding: 10px 10px 10px 45px;
    background: white;
    position: relative;
    display: block;
    white-space: nowrap;
    &:hover {
      color: white;
      background: #3b84f9;
      &:after {
        color: white;
        border-left-color: #3b84f9;
      }
    }
    &.active {
      color: white;
      background: #0556d9;;
      &:after {
        color: white;
        border-left-color: #0556d9;;
      }
    }
    &:after { 
      content: ""; 
      display: block; 
      width: 0; 
      height: 0;
      border-top: 25px solid transparent;
      border-bottom: 25px solid transparent;
      border-left: 20px solid white;
      position: absolute;
      top: 50%;
      margin-top: -25px; 
      left: 100%;
      z-index: 2;
    }	
    &:before { 
      content: " "; 
      display: block; 
      width: 0; 
      height: 0;
        border-top: 25px solid transparent;
        border-bottom: 25px solid transparent;
      border-left: 20px solid rgb(214, 214, 214);
      position: absolute;
      top: 50%;
      margin-top: -25px; 
      margin-left: 2px;
      left: 100%;
      z-index: 1; 
    }	
    &:first-child {
      padding-left: 25px;
    }
    &:last-child {
      margin-right: 25px;
    }
  }
  @media (max-width: 800px) { 
    display: flex;
    flex-direction: column;
    li:after {
      border: none
    }
    li:before {
      border: none
    }
    li:last-child {
      margin-right: 0;
    }
  }
`;
