import { ReactDOM, useState } from "react";
import './App.css'

function App() {
    
    const [count,setcount] = useState(0)
    const [b,setb] = useState(["","","","","","","","","",""])
    const [lock,setlock] = useState(0)
    const [winner,setwinner] = useState("")
    const [color,setcolor] = useState()
    const [titledisplay,settitledisplay] = useState({display:'flex'})
    const [winnerdisplay,setwinnerdisplay] = useState({display:'none'})
    const [won,setwon] = useState("Won!")
    
    const One = () => {
      if (lock == 0 && b[1] == "") {
        if (count == 0 || count%2 == 0) {
            setcount(count+1)
            b[1] = {value:"X", color: {color:'red'}}
            setb(b)
            if (b[1].value == b[2].value && b[1].value == b[3].value || b[1].value == b[4].value && b[1].value == b[7].value || b[1].value == b[5].value && b[1].value == b[9].value) {
              setlock(1)
              settitledisplay({display:'none'})
              setwinnerdisplay({display:'flex'})
              setwinner("X")
              setcolor({color:'red'})
            }
            else {
              if (count == 8) {
                settitledisplay({display:'none'})
                setwinnerdisplay({display:'flex'})
                setwon("Draw!")
              }
            }
           }
        else {
            setcount(count+1)
            b[1] = {value:"O", color: {color:'rgb(8, 199, 135)'}}
            setb(b)
            if (b[1].value == b[2].value && b[1].value == b[3].value || b[1].value == b[4].value && b[1].value == b[7].value || b[1].value == b[5].value && b[1].value == b[9].value) {
              setlock(3)
              settitledisplay({display:'none'})
              setwinnerdisplay({display:'flex'})
              setwinner("O")
              setcolor({color:'rgb(8, 199, 135)'})
            }
        }
      }
    }  
    
    const Two = () => {
      if (lock == 0 && b[2] == "") {
        if (count == 0 || count%2 == 0) {
            setcount(count+1)
            b[2] = {value:"X", color: {color:'red'}}
            setb(b)
            if (b[2].value == b[5].value && b[2].value == b[8].value || b[1].value == b[2].value && b[1].value == b[3].value) {
              setlock(1)
              settitledisplay({display:'none'})
              setwinnerdisplay({display:'flex'})
              setwinner("X")
              setcolor({color:'red'})
            }
            else {
              if (count == 8) {
                settitledisplay({display:'none'})
                setwinnerdisplay({display:'flex'})
                setwon("Draw!")
              }
            }
          }
        else {
            setcount(count+1)
            b[2] = {value:"O", color: {color:'rgb(8, 199, 135)'}}
            setb(b)
            if (b[2].value == b[5].value && b[2].value == b[8].value || b[1].value == b[2].value && b[1].value == b[3].value) {
              setlock(1)
              settitledisplay({display:'none'})
              setwinnerdisplay({display:'flex'})
              setwinner("O")
              setcolor({color:'rgb(8, 199, 135)'})
            }
        }
      }
    }

    const Three = () => {
      if (lock == 0 && b[3] == "") {
        if (count == 0 || count%2 == 0) {
           setcount(count+1)
            b[3] = {value:"X", color: {color:'red'}}
            setb(b)
            if (b[1].value == b[2].value && b[1].value == b[3].value || b[3].value == b[6].value && b[3].value == b[9].value || b[3].value == b[5].value && b[3].value == b[7].value){
              setlock(1)
              settitledisplay({display:'none'})
              setwinnerdisplay({display:'flex'})
              setwinner("X")
              setcolor({color:'red'})
            }
            else {
              if (count == 8) {
                settitledisplay({display:'none'})
                setwinnerdisplay({display:'flex'})
                setwon("Draw!")
              }
            }
        }
        else {
            setcount(count+1)
            b[3] = {value:"O", color: {color:'rgb(8, 199, 135)'}}
            setb(b)
            if (b[1].value == b[2].value && b[1].value == b[3].value || b[3].value == b[6].value && b[3].value == b[9].value || b[3].value == b[5].value && b[3].value == b[7].value){
              setlock(1)
              settitledisplay({display:'none'})
              setwinnerdisplay({display:'flex'})
              setwinner("O")
              setcolor({color:'rgb(8, 199, 135)'})
            }
        }
      }
    }

    const Four = () => {
      if (lock == 0 && b[4] == "") {
        if (count == 0 || count%2 == 0) {
            setcount(count+1)
            b[4] = {value:"X", color: {color:'red'}}
            setb(b)
            if (b[1].value == b[4].value && b[1].value == b[7].value || b[4].value == b[5].value && b[4].value == b[6].value) {
              setlock(1)
              settitledisplay({display:'none'})
              setwinnerdisplay({display:'flex'})
              setwinner("X")
              setcolor({color:'red'})
            }
            else {
              if (count == 8) {
                settitledisplay({display:'none'})
                setwinnerdisplay({display:'flex'})
                setwon("Draw!")
              }
            }
        }
        else {
           
            setcount(count+1)
            b[4] = {value:"O", color: {color:'rgb(8, 199, 135)'}}
            setb(b)
            if (b[1].value == b[4].value && b[1].value == b[7].value || b[4].value == b[5].value && b[4].value == b[6].value) {
              setlock(1)
              settitledisplay({display:'none'})
              setwinnerdisplay({display:'flex'})
              setwinner("O")
              setcolor({color:'rgb(8, 199, 135)'})
            }
        }
      }
    }

    const Five = () => {
      if (lock == 0 && b[5] == "") {
        if (count == 0 || count%2 == 0) {
            setcount(count+1)
            b[5] = {value:"X", color: {color:'red'}}
            setb(b)
            if (b[1].value == b[5].value && b[1].value == b[9].value || b[3].value == b[5].value && b[3].value == b[7].value || b[2].value == b[5].value && b[2].value == b[8].value || b[4].value == b[5].value && b[4].value == b[6].value) {
              setlock(1)
              settitledisplay({display:'none'})
              setwinnerdisplay({display:'flex'})
              setwinner("X")
              setcolor({color:'red'})
            }
            else {
              if (count == 8) {
                settitledisplay({display:'none'})
                setwinnerdisplay({display:'flex'})
                setwon("Draw!")
              }
            }
        }
        else {
            setcount(count+1)
            b[5] = {value:"O", color: {color:'rgb(8, 199, 135)'}}
            setb(b)
            if (b[1].value == b[5].value && b[1].value == b[9].value || b[3].value == b[5].value && b[3].value == b[7].value || b[2].value == b[5].value && b[2].value == b[8].value || b[4].value == b[5].value && b[4].value == b[6].value) {
              setlock(1)
              settitledisplay({display:'none'})
              setwinnerdisplay({display:'flex'})
              setwinner("O")
              setcolor({color:'rgb(8, 199, 135)'})
            }
        }
      }
    }

    const Six = () => {
      if (lock == 0 && b[6] == "") {
        if (count == 0 || count%2 == 0) {
            setcount(count+1)
            b[6] = {value:"X", color: {color:'red'}}
            setb(b)
            if (b[4].value == b[5].value && b[4].value == b[6].value || b[3].value == b[6].value && b[3].value == b[9].value) {
              setlock(1)
              settitledisplay({display:'none'})
              setwinnerdisplay({display:'flex'})
              setwinner("X")
              setcolor({color:'red'})
            }
            else {
              if (count == 8) {
                settitledisplay({display:'none'})
                setwinnerdisplay({display:'flex'})
                setwon("Draw!")
              }
            }
        }
        else {
            setcount(count+1)
            b[6] = {value:"O", color: {color:'rgb(8, 199, 135)'}}
            setb(b)
            if (b[4].value == b[5].value && b[4].value == b[6].value || b[3].value == b[6].value && b[3].value == b[9].value) {
              setlock(1)
              settitledisplay({display:'none'})
              setwinnerdisplay({display:'flex'})
              setwinner("O")
              setcolor({color:'rgb(8, 199, 135)'})
            }
        }
      }
    }
     
    const Seven = () => {
      if (lock == 0 && b[7] == "") {
        if (count == 0 || count%2 == 0) {
            setcount(count+1)
            b[7] = {value:"X", color: {color:'red'}}
            setb(b)
            if (b[1].value == b[4].value && b[1].value == b[7].value || b[7].value == b[5].value && b[7].value == b[3].value || b[7].value == b[8].value && b[7].value == b[9].value) {
                setlock(1)
                settitledisplay({display:'none'})
                setwinnerdisplay({display:'flex'})
                setwinner("X")
                setcolor({color:'red'})
            }
            else {
              if (count == 8) {
                settitledisplay({display:'none'})
                setwinnerdisplay({display:'flex'})
                setwon("Draw!")
              }
            }
        }
        else {
            setcount(count+1)
            b[7] = {value:"O", color: {color:'rgb(8, 199, 135)'}}
            setb(b)
            if (b[1].value == b[4].value && b[1].value == b[7].value || b[7].value == b[5].value && b[7].value == b[3].value || b[7].value == b[8].value && b[7].value == b[9].value) {
              setlock(1)
              settitledisplay({display:'none'})
              setwinnerdisplay({display:'flex'})
              setwinner("O")
              setcolor({color:'rgb(8, 199, 135)'})
          }
        }
      } 
    }

    const Eight = () => {
      if (lock == 0 && b[8] == "") {
        if (count == 0 || count%2 == 0) {
           setcount(count+1)
            b[8] = {value:"X", color: {color:'red'}}
            setb(b)
            if (b[7].value == b[8].value && b[7].value == b[9].value || b[2].value == b[5].value && b[2].value == b[8].value) {
              setlock(1)
              settitledisplay({display:'none'})
              setwinnerdisplay({display:'flex'})
              setwinner("X")
              setcolor({color:'red'})
            }
            else {
              if (count == 8) {
                settitledisplay({display:'none'})
                setwinnerdisplay({display:'flex'})
                setwon("Draw!")
              }
            }
        }
        else {
            setcount(count+1)
            b[8] = {value:"O", color: {color:'rgb(8, 199, 135)'}}
            setb(b)
            if (b[7].value == b[8].value && b[7].value == b[9].value || b[2].value == b[5].value && b[2].value == b[8].value) {
              setlock(1)
              settitledisplay({display:'none'})
              setwinnerdisplay({display:'flex'})
              setwinner("O")
              setcolor({color:'rgb(8, 199, 135)'})
            }
        }
      }
    }

    const Nine = () => {
      if (lock == 0 && b[9] == "") {
        if (count == 0 || count%2 == 0) {
            setcount(count+1)
            b[9] = {value:"X", color: {color:'red'}}
            setb(b)
            if (b[7].value == b[8].value && b[7].value == b[9].value || b[3].value == b[6].value && b[3].value == b[9].value || b[1].value == b[5].value && b[1].value == b[9].value) {
              setlock(1)
              settitledisplay({display:'none'})
              setwinnerdisplay({display:'flex'})
              setwinner("X")
              setcolor({color:'red'})
            }
            else {
              if (count == 8) {
                settitledisplay({display:'none'})
                setwinnerdisplay({display:'flex'})
                setwon("Draw!")
              }
            }
        }
        else {
            setcount(count+1)
            b[9] = {value:"O", color: {color:'rgb(8, 199, 135)'}}
            setb(b)
            if (b[7].value == b[8].value && b[7].value == b[9].value || b[3].value == b[6].value && b[3].value == b[9].value || b[1].value == b[5].value && b[1].value == b[9].value) {
              setlock(1)
              settitledisplay({display:'none'})
              setwinnerdisplay({display:'flex'})
              setwinner("O")
              setcolor({color:'rgb(8, 199, 135)'})
            }
        }
      }
    }

    const reset = () => {
      setcount(0)
      setlock(0)
      setwinner("")
      setb(["","","","","","","","","",""])
      settitledisplay({display:'flex'})
      setwinnerdisplay({display:'none'})
    }

    return(
        <div className="container">
          
          <div className="title-box">
            <h1 className="title" style={titledisplay}>Tic Tac Toe</h1>
            <div className="win" style={winnerdisplay}><h1 className="winner" style={color}>{winner}</h1><h1 className="won">{won}</h1></div>
          </div>

          <div className="flex">
            <div className="main">
              <button className="buttons" style={b[1].color}   onClick={One}>{b[1].value}</button>
              <button className="buttons" style={b[2].color} onClick={Two}>{b[2].value}</button>
              <button className="buttons" style={b[3].color} onClick={Three}>{b[3].value}</button>
              <button className="buttons" style={b[4].color} onClick={Four}>{b[4].value}</button>
              <button className="buttons" style={b[5].color} onClick={Five}>{b[5].value}</button>
              <button className="buttons" style={b[6].color} onClick={Six}>{b[6].value}</button>
              <button className="buttons" style={b[7].color} onClick={Seven}>{b[7].value}</button>
              <button className="buttons" style={b[8].color} onClick={Eight}>{b[8].value}</button>
              <button className="buttons" style={b[9].color} onClick={Nine}>{b[9].value}</button>
            </div>
          </div>

          <button className="reset" onClick={reset}>Reset</button>

        </div>
            
)}

export default App;
