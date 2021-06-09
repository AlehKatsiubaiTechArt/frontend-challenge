import styled from 'styled-components'

interface RectSkeletonProps {
  width: string;
  height: string;
}

export const RectSkeleton = styled.div<RectSkeletonProps>`
  animation: MuiSkeleton-keyframes-pulse 1.5s ease-in-out 0.5s infinite;
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  transform: scale(1, 0.6);
  margin-top: 0;
  border-radius: 4px;
  margin-bottom: 0;
  transform-origin: 0 60%;
  background-color: rgb(0 0 0 / 20%);;
`;

interface CircleSkeletonProps {
  size: string;
}

export const CircleSkeleton = styled.div<CircleSkeletonProps>`
  animation: MuiSkeleton-keyframes-pulse 1.5s ease-in-out 0.5s infinite;
  border-radius: 50%;
  width: ${props => props.size || 'auto'};
  height: ${props => props.size || 'auto'};
  margin-top: 0;
  margin-bottom: 0;
  transform-origin: 0 60%;
  background-color: rgb(0 0 0 / 20%);;
`;
