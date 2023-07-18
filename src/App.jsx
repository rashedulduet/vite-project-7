

export default function App() {
  return (
    <div className="container text-primary shadow">
      <h1>heading 1</h1>
      <h1>heading 2</h1>
      <h1>{new Date().getDate()}</h1>
      <button onClick={()=>alert('rashedul')} style={{color:'red', fontSize:'20px'}}>onclick</button>
    </div>
  )
}
