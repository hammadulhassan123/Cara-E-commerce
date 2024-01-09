import React from 'react';
import DataTable from 'react-data-table-component';
import { Button, Container, Row, Col } from 'react-bootstrap';
import "./cart.css";

const data = [
  { item: 'Cart Subtotals', amount: '$ 335' },
  { item: 'Shipping', amount: 'Free' },
  { item: 'Total', amount: '$ 335' },
];

const columns = [
  {
    name: 'Item',
    selector: 'item',
  },
  {
    name: 'Amount',
    selector: 'amount',
  },
];

const customStyles = {
  headCells: {
    style: {
      fontWeight: 'bold',
      textTransform: 'uppercase',
      border: '1px solid black',
    },
  },
  rows: {
    style: {
      backgroundColor: '#E5E4E2',
      justifyContent: 'center',
    },
  },
  table: {
    style: {
      borderCollapse: 'collapse',
      border: '1px solid black',
      width: '100%',
      boxShadow: '3px 3px 2px 3px slategrey',
    },
  },
  cells: {
    style: {
      border: '1px solid black',
      padding: '8px',
      justifyContent: 'center',
    },
  },
};

function CartTotal() {
  return (
    <Col md={6}>
      <div id="subtotal">
        <h3>Cart Totals</h3>
        <DataTable
          title=""
          columns={columns}
          data={data}
          customStyles={customStyles}
          pagination={false}
          noHeader
        />
        <Button className="simple mt-3">
          Proceed to checkout
        </Button>
      </div>
    </Col>
  );
}

export default CartTotal;
