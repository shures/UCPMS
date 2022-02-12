import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

const columns = [{
    dataField: 'id',
    text: 'Product ID',
}, {
    dataField: 'name',
    text: 'Product Name',
    filter: textFilter()
}, {
    dataField: 'price',
    text: 'Product Price',
    filter: textFilter()
}];

<BootstrapTable keyField='id' data={ products } columns={ columns } filter={ filterFactory() } />