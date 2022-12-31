import React from 'react'
import Box from '@mui/material/Box'
import {
  DataGrid,
  GridToolbarQuickFilter,
  GridToolbarContainer,
} from '@mui/x-data-grid'

const columns = [
  { field: 'firstName', headerName: 'firstName' },
  { field: 'lastName', headerName: 'lastName' },
  { field: 'startDate', headerName: 'startDate' },
  { field: 'department', headerName: 'department' },
  { field: 'birthDate', headerName: 'birthDate' },
  { field: 'street', headerName: 'street' },
  { field: 'city', headerName: 'city' },
  { field: 'state', headerName: 'state' },
  { field: 'zipCode', headerName: 'zipCode' },
]

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarQuickFilter />
    </GridToolbarContainer>
  )
}

export default function gridData({ employeeList }) {
  return (
    <Box sx={{ height: 600, width: '90%' }}>
      <DataGrid
        rows={employeeList}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        components={{ Toolbar: CustomToolbar }}
        componentsProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
      />
    </Box>
  )
}
