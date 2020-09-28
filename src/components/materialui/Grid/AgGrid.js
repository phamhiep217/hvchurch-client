import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import { AgGridReact } from 'ag-grid-react';
import {
  FirstPage,
  LastPage,
  ChevronLeft,
  ChevronRight,
  Autorenew
} from '@material-ui/icons';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import '../../../asset/css/home.css';

class AgGrid extends React.Component {
  render() {
    const {
      onGridReady,
      onRowDoubleClicked,
      onCellKeyDown,
      onPaginationChanged,
      onBtFirst,
      onBtPrevious,
      onBtNext,
      onBtLast,
      dataSource,
      rowClassRules,
      onSelectionChanged,
      onRefresh
    } = this.props;
    return (
      <div
        className="ag-theme-balham"
        style={{
          height: '350px'
        }}
      >
        <div>
          <IconButton aria-label="First" onClick={onBtFirst}>
            <FirstPage />
          </IconButton>
          <IconButton aria-label="Left" onClick={onBtPrevious}>
            <ChevronLeft />
          </IconButton>
          <IconButton aria-label="Right" onClick={onBtNext}>
            <ChevronRight />
          </IconButton>
          <IconButton aria-label="Last" onClick={onBtLast}>
            <LastPage />
          </IconButton>
          <IconButton aria-label="Refresh" onClick={onRefresh}>
            <Autorenew />
          </IconButton>
          <div style={{ width: '40px', float: 'right', paddingTop: '12px' }}>
            <span id="lbCurrentPage" />
            <span> / </span>
            <span id="lbTotalPages" />
          </div>
        </div>
        <AgGridReact
          columnDefs={dataSource.columnDefs}
          onGridReady={onGridReady}
          rowData={dataSource.rowData}
          rowSelection="single"
          pagination={true}
          paginationPageSize="50"
          suppressPaginationPanel={true}
          onPaginationChanged={onPaginationChanged}
          onRowDoubleClicked={onRowDoubleClicked}
          onCellKeyDown={onCellKeyDown}
          onSelectionChanged={onSelectionChanged}
          rowClassRules={rowClassRules}
        />
      </div>
    );
  }
}
AgGrid.propTypes = {
  dataSource: PropTypes.object.isRequired
};
export default AgGrid;
