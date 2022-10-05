import React from 'react'
import '../styles/ComponentStyles/Table.css'
type TableProps = {
    className?: string
    values?: any
}

const Table = ({className, values}:TableProps) =>{
    return(
        <div className={className || "table-container"}>
            <table className="table-style">
                
                <tr>
                    <th className="table-cell"> 
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </th>
                    <th className="table-cell">Nome</th>
                    <th className="table-cell">E-mail</th>
                    <th className="table-cell">Nascimento</th>
                    <th className="table-cell2">Telefone</th>
                </tr>
                {values ? values.map((value:any, index:number) => {
                    return(
                    <tr>
                        <td className="table-cell">{index+1}</td>
                        <td className="table-cell">{value?.nome}</td>
                        <td className="table-cell">{value?.email}</td>
                        <td className="table-cell">{value?.nascimento}</td>
                        <td className="table-cell2">{value?.telefone}</td>
                    </tr>
                    )
                })
            :
            <tr>
                <td>No Data</td>
                <td>No Data</td>
                <td>No Data</td>
                <td>No Data</td>
                <td>No Data</td>
            </tr>
            }

            </table>

        </div>
    )
}
export default Table