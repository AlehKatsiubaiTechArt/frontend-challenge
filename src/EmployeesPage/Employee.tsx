import React from 'react';
import styled from 'styled-components';
import Breadcrumb from '../components/Breadcrumb';
import { Card, CardInfo } from '../components/Card';
import { CircleSkeleton, RectSkeleton } from '../components/Skeleton';

export const EMPLOYEE_STATUSES = [
  "ADDED",
  "IN - CHECK",
  "APPROVED",
  "ACTIVE",
  "INACTIVE",
];

interface EmployeeProps {
  className: string;
  name: {
    first: string,
    last: string
  };
  email: string;
  phone: string;
  picture: { 
    large: string
  };
  status: string;
  isLoading?: boolean;
  onStatusChange?: (status: string) => {}
}

function Employee ({
  className,
  name,
  email,
  phone,
  picture,
  status,
  isLoading,
  onStatusChange
}: EmployeeProps) {
  const activeIndex = EMPLOYEE_STATUSES.findIndex(employeeStatus => employeeStatus === status);

  const handleBreadcrumbChange = (index: number) => {
    onStatusChange?.(EMPLOYEE_STATUSES[index]);
  };

  return (
    <Card className={className}>
      <CardInfo 
        title={isLoading ? <RectSkeleton width="250px" height="30px" /> : name.first}
        subtitle={
          <div>
            <div>{isLoading ? <RectSkeleton width="300px" height="22px" /> : `Email: ${email}`}</div>
            <div>{isLoading ? <RectSkeleton width="200px" height="22px" /> : `Phone: ${phone}`}</div>
          </div>
        }
        image={isLoading ? <CircleSkeleton size="100px" /> : picture.large} />
      <Breadcrumb
          items={EMPLOYEE_STATUSES}
          activeIndex={activeIndex}
          onChange={isLoading ? undefined : handleBreadcrumbChange}
        />
    </Card>
  )
};

export default styled(Employee)`
  margin: 10px;
  max-width: 800px;
`;
