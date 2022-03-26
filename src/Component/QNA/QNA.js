import React from 'react'
import './QNA.css'

const QNA = () => {
    return (
        <div className='qna'>
            <div>
            <h3>How react works?</h3>
            <p>React is a js library which works via declarative code.First in the react we make Component by jsx.And what declarative code does is it connects those Components with app(js).Which is the final result we see in the ui.</p>
            </div>
            <div>
                <h3>Props vs UseState </h3>
                <p>Props is short from of property which we use to send data via declarative code and function.which means we can use data of a Component from another. Whereas useState is react hook that we use to set a initial value of a item and also a function that can set or change value of the initial value.And also we cant use a useState of a Component to another it has to be specific only to that component</p>
            </div>
        </div>
    );
};

export default QNA;