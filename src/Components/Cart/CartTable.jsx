import React from 'react';
import DataTable from 'react-data-table-component';
import p1 from "../../assets/prod1.jpg"
import p2 from "../../assets/prod2.jpg"
import p3 from "../../assets/prod3.jpg"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';


const CartTable = () => {
  const data = [
    {
      id: 1,
      remove: <Link to=""><FontAwesomeIcon icon={faTimesCircle}/></Link>,
      image: <img src={p1} alt="" style={{width:'70px', height:'70px'}} />,
      product: 'Cartoon Astronaut T-Shirts',
      price: '$118.19',
      quantity: <input type="number" value="1" style={{width: '70px', padding:' 10px 5px 10px 15px'}}/>,
      subtotal: '$118.19',
    },
    {
      id: 2,
      remove: <Link to=""><FontAwesomeIcon icon={faTimesCircle}/></Link>,
      image: <img src={p2} alt="" style={{width:'70px', height:'70px'}}/>,
      product: 'Cartoon Astronaut T-Shirts',
      price: '$118.19',
      quantity: <input type="number" value="1" style={{width: '70px', padding:' 10px 5px 10px 15px'}} />,
      subtotal: '$118.19',
    },
    {
      id: 3,
      remove: <Link to=""><FontAwesomeIcon icon={faTimesCircle}/></Link>,
      image: <img src={p3} alt="" style={{width:'70px', height:'70px'}}/>,
      product: 'Cartoon Astronaut T-Shirts',
      price: '$118.19',
      quantity: <input type="number" value="1" style={{width: '70px', padding:' 10px 5px 10px 15px'}}/>,
      subtotal: '$118.19',
    },
  ];

  const columns = [
    {
      name: 'Remove',
      selector: 'remove',
    },
    {
      name: 'Image',
      selector: 'image',
    },
    {
      name: 'Product',
      selector: 'product',
    },
    {
      name: 'Price',
      selector: 'price',
    },
    {
      name: 'Quantity',
      selector: 'quantity',
    },
    {
      name: 'Subtotal',
      selector: 'subtotal',
    },
  ];

  const customStyles = {
    table: {
        style: {
          width: '100%',
          borderCollapse: 'collapse',
          tableLayout: 'fixed',
          whiteSpace: 'nowrap',
        },
      },
      cells: {
        style: {
          width: '100px',
          textAlign: 'center',
        },
      },
      rows: {
        style: {
          justifyContent: 'center',
          padding:'10px'
        },
      },
      headCells: {
        style: {
          border: '1px solid #e2e9e1',
          borderRightWidth: '1px',
          borderRightStyle: 'solid',
          borderRightColor: 'rgb(226, 233, 225)',
          borderLeftWidth: '1px',
          borderLeftStyle: 'solid',
          borderLeftColor: 'rgb(226, 233, 225)',
          borderLeft: 'none',
          borderRight: 'none',
        },
      },
      input: {
        style: {
        width: '150px',
        textAlign: 'center',
        width: '70px',
        padding: '10px 5px 10px 15px',
        },
      },
  };

  return (
    <DataTable
        title="Cart"
        columns={columns}
        data={data}
        pagination
        highlightOnHovernHover
        customStyles={customStyles}
        responsive
    />
  );
};

export default CartTable;
