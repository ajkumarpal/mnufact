
const Table = ({tableHeaders, actionToBePerformed, results}) => {
    return (
        <>
          <table>
            <thead >
              <tr>
                <th>Measure</th>
                {
                  tableHeaders?.map((tableHeader, index) => {
                    return <th key={index}>{tableHeader}</th>
                  })
                }
              </tr>
            </thead>
            <tbody>
              {
                actionToBePerformed?.map((actionName, actionIndex) => {
                    return <>
                      <tr key={actionIndex}>
                        <th>{actionName}</th>
                        {
                          Object.keys(results)?.map((key) => (
                            (key.endsWith(actionName)) ?
                            <td key={key}>{results[key]}</td> : null
                          ))
                        }
                      </tr>
                    </>;
                })
              }
            </tbody>
          </table>
        </>
    );
}

export default Table;