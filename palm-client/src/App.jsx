import { useState, useEffect } from 'react'

function App() {
  const [serverData, setServerData] = useState('')
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        setServerData(data)
        console.log(data)
      })
  }, [])

  return (
    <main style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <h1 style={{ padding: '10px', marginBottom: '0' }}>MyPrompter</h1>
      <div style={{ margin: '0', flexGrow: '1' }}>
        <div style={{ width: '100%', height: '100%' }}>
          <article style={{ margin: '0' }}>
            {serverData}
          </article>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'end', backgroundColor: '#222', padding: '10px' }}>
        <textarea style={{ margin: '0', flexGrow: '1', overflowY: 'hidden' }} placeholder='Type in Prompt...' />
        <button style={{ margin: '0', flex: '1', marginLeft: '10px' }}>Go</button>
      </div>
    </main>
  )
}

export default App
