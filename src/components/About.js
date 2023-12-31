// import React, {useState} from "react";
import React from "react";

export default function About(props) {


//     const [myStyle, setmyStyle] = useState(
//         {
//             color: 'white',
//             backgroundColor: 'black'
//         }

//     ) 


    // const [btnText, setBtnText] = useState("Enable Light Mode")

    // const toggleStyle = ()=>{
    //     if(myStyle.color === 'white'){
    //         setmyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    //     else{
    //         setmyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '.5px solid blue'
    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    // }

    let myStyle = {
        color : props.mode === 'dark'? 'white' : 'black',
        backgroundColor : props.mode === 'dark'? 'rgb(19 85 138)' : 'white',
        border : '1px solid',
        borderColor : props.mode === 'dark'? 'white' : 'black'
    }
    

    return (
        <div className="container" style ={{color : props.mode === 'dark'? 'white' : 'black'}}>
            <h1 className="my-3">About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item mb-2">
                    <h2 className="accordion-header" id="headingOne">
                        <button
                            className="accordion-button collapsed"
                            style ={myStyle}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            <strong>Analyze your text</strong>
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body" style ={myStyle}>
                           TextUtils gives you a ay to analyze your text quickly  and efficiently. Be it word count, character count or....
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button
                            className="accordion-button collapsed"
                            style ={myStyle}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                        >
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body" style ={myStyle}>
                           TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text.
                        </div>
                    </div>
                </div>
                <div className="accordion-item my-2">
                    <h2 className="accordion-header" id="headingThree">
                        <button
                            className="accordion-button collapsed"
                            style ={myStyle}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                        >
                            <strong>Browser compatible</strong>
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body" style ={myStyle}>
                            This word counter software works in any brouser.
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="container">
                <button onClick = {toggleStyle} type="button" class="btn btn-primary my-2">{btnText}</button>
            </div> */}
        </div>

    );
}
