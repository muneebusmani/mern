import './App.css'

const App  = () => {
    const date = new Date();
    let time = "00:00:00";
    const getTime = (time:string) =>{
        time   = date.toLocaleTimeString();
        return time;
    }
  return (
    <>
        <div className={"w-full mx-auto px-20 py-20 text-5xl h-screen text-center"}>
            <h1>{time||""}</h1>
            <br/>
            <input type={"button"} className={"bg-cyan-400 rounded-full px-5 py-2.5 "} onClick={() => getTime(time)} value={"Get Current Time"} />
            
        </div>
    </>
  )
};
export default App;