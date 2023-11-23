import React from 'react'

const DateUpdate = () =>{

    // Function to update the date
    function updateDate() {
      const currentDateElement = document.getElementById('currentDate');
      const now = new Date();
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      const formattedDate = now.toLocaleDateString(undefined, options);

      currentDateElement.textContent = formattedDate;
    }

    // Call the function to initially set the date and update it every second
    updateDate();
    // setInterv
    return (
       <div>
            <div className="bg-gray-300 text-center py-3">
                <div className="font-mono text-gray-800  font-semibold">
                    <span>Today's date is </span>
                    <span id="currentDate" />
                </div>
            </div>
        </div>
    )
}

export default DateUpdate