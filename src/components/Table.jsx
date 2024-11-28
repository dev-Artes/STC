import React from 'react'

// Components
import { ActionButtons } from './'

const Table = ({ data = [], onEditClick }) => {

  const convertTimestamp = ( timestamp ) => {
    let date = timestamp.toDate()
    let dd = date.getDate()
    let mm = date.getMonth() + 1
    let yyyy = date.getFullYear()
    date = dd + '/' + mm + '/' + yyyy

    return date;
  }

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2"></th>
            <th className="px-4 py-2">Etiqueta</th>
            <th className="px-4 py-2">Ti responsable</th>
            <th className="px-4 py-2">Fecha</th>
            <th className="px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-b border-gray-200">
              <td className="px-4 py-2">
                <div
                  className={`w-4 h-4 rounded-full ${
                    item.isActive ? 'bg-green-500' : 'bg-gray-400'
                  }`}
                />
              </td>
              <td className="px-4 py-2">{item.tag}</td>
              <td className="px-4 py-2">{item.created_by.name}</td>
              <td className="px-4 py-2">{convertTimestamp(item.created_at)}</td>
              <td className="px-4 py-2">
                <ActionButtons 
                  item = { item }
                  onEditClick =  { onEditClick }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
