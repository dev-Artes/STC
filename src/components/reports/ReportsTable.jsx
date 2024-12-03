
// Utils
import { convertTimestamp } from '../../utils/convertTimestamp'

const ReportsTable = ({ data = [], headers = [] }) => {
    return (
        <div className='overflow-x-auto'>
            <table className='table-auto w-full'>
                <thead className='bg-gray-100'>
                    {headers.map(( header ) => (
                        <tr key={ header.id } >
                            <th className='px-3 py-2'>{ header.numReport }</th>    
                            <th className='px-3 py-2'>{ header.brand }</th>    
                            <th className='px-3 py-2'>{ header.model }</th>    
                            <th className='px-3 py-2'>{ header.serie }</th>    
                            <th className='px-3 py-2'>{ header.assign }</th>    
                            <th className='px-3 py-2'>{ header.user }</th>    
                            <th className='px-3 py-2'>{ header.observation }</th>    
                            <th className='px-3 py-2'>{ header.recommendation }</th>    
                            <th className='px-3 py-2'>{ header.date }</th>    
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {data.map(( item ) => (
                        <tr key={ item.id } className='border-b border-gray-200'>
                            <td className='px-3 py-2'>{ item.numReport }</td>
                            <td className='px-3 py-2'>{ item.brand }</td>
                            <td className='px-3 py-2'>{ item.model }</td>
                            <td className='px-3 py-2'>{ item.serie }</td>
                            <td className='px-3 py-2'>{ item.assign }</td>
                            <td className='px-3 py-2'>{ item.user }</td>
                            <td className='px-3 py-2'>{ item.observation ? item.observation : 'N/A' } </td>
                            <td className='px-3 py-2'>{ item.recommendation }</td>
                            <td className='px-3 py-2'>{ convertTimestamp(item.date) }</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ReportsTable

