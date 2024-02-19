import '../App.css';
import React from 'react';
import { ProcessInfo } from '../interfaces/ProcessInfo';


const ProcessesTable: React.FC<{ processInfo: ProcessInfo[] }> = ({ processInfo }) => {
    return (
        <div>
            <h1>Processos em Execução</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID do Processo</th>
                        <th>Nome do Processo</th>
                        <th>Data de Criação</th>
                    </tr>
                </thead>
                <tbody>
                    {processInfo.map((process, index) => (
                        <tr key={`${process.processId}-${index}`}>
                            <td>{process.processId}</td>
                            <td>{process.processName}</td>
                            <td>{process.creationDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ProcessesTable;
