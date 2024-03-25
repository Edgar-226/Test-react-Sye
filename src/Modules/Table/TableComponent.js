import BootstrapTable from 'fad-react-bootstrap-table-next';



export default function TableComponent({data,columns}) {


    return (
        <BootstrapTable keyField='id' data={data} columns={columns} />
    )
}
