import {
  FetchPageQuery,
  RowType,
  useFetchPageQuery,
} from '@sovtech-swapi/data-access';
import { Box, ColumnConfig, DataTable, KeyPress, MouseClick } from 'grommet';
import { MouseEvent } from 'react';

export interface PeopleGridUiProps {
  columns: ColumnConfig<RowType>[];
  handleClicks: (event: MouseClick<RowType> | KeyPress<RowType>) => void;
  DATA(data: FetchPageQuery | undefined): RowType[] | undefined;
  curPage: number;
}

export const PeopleGridUi = (props: PeopleGridUiProps) => {
  const { data, loading, error } = useFetchPageQuery({
    variables: {
      fetchPagePage: props.curPage.toString(),
    },
  });

  if (loading) return <p>loading...</p>;
  if (error) return <p>Error - please try again later</p>;
  const tableData: RowType[] | undefined = props.DATA(data);

  return (
    <Box align="center" pad="large">
      <DataTable
        columns={props.columns}
        data={tableData}
        step={10}
        sortable
        paginate
        onClickRow={(event) => props.handleClicks(event)}
      />
    </Box>
  );
};
