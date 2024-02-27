import { useState, useCallback, useEffect,useRef} from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState();

  //useref hook

  const passwordRef = useRef(null); 

  const passwordGenerator = useCallback(()=> {
    let pswd = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(number) str += "0123456789";
    if(character) str += '`~!@#$%^&*()-=_+{}[]\|<>/?,.';

    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length + 1);
      pswd += str[index];
      
    }

    setPassword(pswd);
    
  },[length,number,character,setPassword])

  const copyPasswordToClipboard = useCallback( () => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator()
  },[length,number,character,passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-400 bg-gray-500'>
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input type="text" 
          value={password}
          className='outline-none w-full py-1 px-3' 
          placeholder='password'
          readOnly
          ref={passwordRef} />
          <button
          className='outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-900 text-white px-2 py-2 shrink-0' onClick={copyPasswordToClipboard}>Copy</button>
        </div>
        <di className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
             type="range"
             min={6}
             max={100}
             value={length}
             className='cursor-pointer'
             onChange={(event) => {
              setLength(event.target.value)
             }} />
             <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
             type="checkbox"
             defaultChecked= {number}
             onChange={() => {setNumber(prev => !prev)}}
             />
             <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
             type="checkbox"
             defaultChecked= {character}
             onChange={() => {setCharacter(prev => !prev)}}
             />
             <label htmlFor="characterInput">Character</label>
          </div>

        </di>
      </div>

    </>
  )
}

export default App
