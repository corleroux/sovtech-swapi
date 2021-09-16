import { RowType } from '@sovtech-swapi/data-access';
import { Box, ColumnConfig, DataTable, KeyPress, MouseClick } from 'grommet';
import { MouseEvent } from 'react';
export interface PeopleGridUiProps {
  columns: ColumnConfig<RowType>[];
  tableData: RowType[] | undefined;
  handleClicks: (event: MouseClick<RowType> | KeyPress<RowType>) => void;
}
export const PeopleGridUi = (props: PeopleGridUiProps) => {
  return (
    <Box align="center" pad="large">
      <DataTable
        columns={props.columns}
        data={props.tableData}
        step={10}
        sortable
        paginate
        onClickRow={(event) => props.handleClicks(event)}
      />
    </Box>
  );
};
