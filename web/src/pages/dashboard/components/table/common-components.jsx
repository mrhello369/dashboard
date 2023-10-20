// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from "react";
import {
  BreadcrumbGroup,
  Button,
  HelpPanel,
  Icon,
  SpaceBetween,
} from "@cloudscape-design/components";
import { resourcesBreadcrumbs } from "../../../../common/breadcrumbs";
import {
  ExternalLinkItem,
  TableHeader,
} from "../../../commons/common-components";

export const Breadcrumbs = () => (
  <BreadcrumbGroup
    items={resourcesBreadcrumbs}
    expandAriaLabel="Show path"
    ariaLabel="Breadcrumbs"
  />
);

export const FullPageHeader = ({
  resourceName = "Workload Cost Analysis",
  ...props
}) => {

  return (
    <TableHeader
      variant="awsui-h1-sticky"
      title={resourceName}
      {...props}
    />
  );
};

export const ToolsContent = () => (
  <HelpPanel
    header={<h2>Distributions</h2>}
    footer={
      <>
        <h3>
          Learn more{" "}
          <span role="img" aria-label="Icon external Link">
            <Icon name="external" />
          </span>
        </h3>
        <ul>
          <li>
            <ExternalLinkItem
              href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-working-with.html"
              text="Working with distributions"
            />
          </li>
          <li>
            <ExternalLinkItem
              href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-returned.html"
              text="Values that CloudFront displays on the console"
            />
          </li>
        </ul>
      </>
    }
  >
    <p>
      View your current distributions and related information such as the
      associated domain names, delivery methods, SSL certificates, and more. To
      drill down even further into the details, choose the name of an individual
      distribution.
    </p>
  </HelpPanel>
);

export const WorkloadCostToolsContent = () => (
  <HelpPanel header={<h2>Workload Cost</h2>}>
    <p>
      Workloads report uses the same underlying data as the cluster Cost report.
      This report allows you to view your cluster costs broken down by workload.
      Additional information includes controller type, namespace, and
      information about replicas, CPU requests, and costs.
    </p>
    <ul>
      <li>Replica: Average hourly replica count (rounded to integer).</li>
      <li>CPU: Average hourly CPU requests (rounded to 3 decimal numbers).</li>
      <li>Total cost: Sum of all pod costs per workload.</li>
    </ul>
  </HelpPanel>
);

export const InstanceHeader = ({ ...props }) => {
  const isOnlyOneSelected = props.selectedItems.length === 1;

  return (
    <TableHeader
      {...props}
      title="Instances"
      actionButtons={
        <SpaceBetween size="xs" direction="horizontal">
          <Button disabled={!isOnlyOneSelected}>View details</Button>
          <Button disabled={!isOnlyOneSelected}>Edit</Button>
          <Button disabled={props.selectedItems.length === 0}>Delete</Button>
        </SpaceBetween>
      }
    />
  );
};

export const ClustersHeader = ({ ...props }) => {
  return <TableHeader {...props} title="K8s clusters" />;
};

export const ClusterComputeSpendTableHeader = ({ ...props }) => {
  return <TableHeader {...props} title="Daily spend details" />;
};
export const NSCostTableHeader = ({ ...props }) => {
  return <TableHeader {...props} title="Namespace spend details" />;
};