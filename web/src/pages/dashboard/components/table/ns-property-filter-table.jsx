// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from 'react';
import { useCollection } from '@cloudscape-design/collection-hooks';
import {
  PropertyFilter,
  Table,
  Pagination,
} from "@cloudscape-design/components";
import { getFilterCounterText } from '../../../../common/tableCounterStrings';
import { NSCostTableHeader } from './common-components';
import { TableNoMatchState, TableEmptyState } from '../../../commons/common-components';
import { paginationLabels, distributionSelectionLabels } from '../../../../common/labels';
import { PROPERTY_FILTERING_I18N_CONSTANTS } from './table-property-filter-config';

import '../../../../styles/base.scss';

export function NSPropertyFilterTable({
  data,
  columnDefinitions,
  saveWidths,
  filteringProperties,
}) {
  const { items, actions, filteredItemsCount, collectionProps, paginationProps, propertyFilterProps } = useCollection(
    data,
    {
      propertyFiltering: {
        filteringProperties,
        empty: <TableEmptyState resourceName="Distribution" />,
        noMatch: (
          <TableNoMatchState
            onClearFilter={() => {
              actions.setPropertyFiltering({ tokens: [], operation: 'and' });
            }}
          />
        ),
      },
      pagination: { pageSize: 20 },
      sorting: { defaultState: { sortingColumn: columnDefinitions[0] } },
      selection: {},
    }
  );

  return (
    <Table
      {...collectionProps}
      items={items}
      columnDefinitions={columnDefinitions}
      ariaLabels={distributionSelectionLabels}
      stickyHeader={true}
      resizableColumns={true}
      onColumnWidthsChange={saveWidths}
      header={
        <NSCostTableHeader
          serverSide={false}
        />
      }
      loadingText="Loading distributions"
      filter={
        <PropertyFilter
          i18nStrings={PROPERTY_FILTERING_I18N_CONSTANTS}
          {...propertyFilterProps}
          countText={getFilterCounterText(filteredItemsCount)}
          expandToViewport={true}
        />
      }
      pagination={<Pagination {...paginationProps} ariaLabels={paginationLabels} />}
    />
  );
}
