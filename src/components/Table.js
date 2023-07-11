export default function Table({ th, data, msg }) {
    let requestedBy;
    
    return (
        <>
            <div className='w-3/4 rounded-lg border border-slate-600 mt-5 mx-auto'>
                <p className='ms-4 py-2'>{msg}</p>
                <table className='w-[97%] ms-4'>
                    <thead>
                        <tr>
                            {th.map((elem, index) => {
                                requestedBy = elem === "Requested By" ? elem : null
                                
                                return <th key={index}>{elem}</th>
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((elem, index) => <tr className='text-center' key={index}>
                            {
                                elem.data && elem.data.map((elem, index) => <td key={index} className={index === 0 || requestedBy === "Requested By" ? `text-blue-400` : null} >{elem}</td>)
                            }
                            {
                                elem.buttons && elem.buttons.map((elem, index) => <td key={index}><button className='border border-slate-600 px-2 py-0 text-xs mx-1 rounded'>{elem}</button></td>)
                            }
                        </tr>

                        )}

                    </tbody>
                </table>
            </div>
        </>
    )
}
