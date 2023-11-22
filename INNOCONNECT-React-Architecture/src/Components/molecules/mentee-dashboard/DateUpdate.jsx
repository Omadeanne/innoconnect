import React from 'react'

const DateUpdate = () =>{
    return (
       <div>
            <div className="bg-gray-200 text-center py-3">
                <div className="font-mono text-gray-900  font-semibold">
                    <span>Today's date is</span>
                    <span id="currentDate" />
                </div>
            </div>
        </div>
    )
}

export default DateUpdate