import React, {useState} from 'react';
import "./Calculator.css";
/* eslint no-eval: 0 */
const Caluclator =() => {
    
    
    const [input , setInput] = useState("");
    const caluNumbers = [];
    [7 , 8 , 9 , 4 , 5 , 6 , 1 , 2 , 3 , 0 , "."].forEach((item) => {
        caluNumbers.push(
            <button className={`num${item}`}
            onClick={(event) => {setInput(input + event.target.value)}}
            value={item}
            key={item}
            >
                {""}
                {item}
            </button>
        )
    })
    return(
        <div className="wrapper">
            <div className="show-input">{input}</div>
            <div className="digits flex">{caluNumbers}</div>
            <div className="modifiers subgrid">
                <button onClick={() => setInput(input.substr(0 , input.length -1))}>
                    clear
                </button>
                <button onClick={() => setInput("")} value="">
                    AC
                </button>
                <button 
                onClick={() => {
                    try {
                        setInput(
                                String(eval(input).length > 3 &&
                                String(eval(input)).includes("." , "+" , "-" , "*" , "/")?
                                String(eval(input / 100).tofixed(7))
                                :String(eval(input / 100)) )
                        )
                    }catch {
                        console.log('error')
                    }
                }} 
                value="%"
                >
                    %
                </button>
            </div>
            <div className="operations subgrid">
                <button onClick={(event) => setInput(input + event.target.value)} value="/">
                    ÷
                </button>
                <button onClick={(event) => setInput(input + event.target.value)} value="*">
                    ×
                </button>
                <button onClick={(event) => setInput(input + event.target.value)} value="-">
                  -
                </button>
                <button onClick={(event) => setInput(input + event.target.value)} value="+">
                    +
                </button>
                <button
                    onClick={() => {
                        try {
                            setInput(
                                String(eval(input).length > 3 &&
                                String(eval(input)).includes(".")?
                                String(eval(input).tofixed(7))
                                :String(eval(input)) )
                            )
                        }catch {
                            console.log("error");
                        }
                    }}
                    value="="
                >
                    =
                </button>
            </div>
        </div>
    )
}
export default Caluclator