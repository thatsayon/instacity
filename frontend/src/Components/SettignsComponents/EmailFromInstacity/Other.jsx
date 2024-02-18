import React from 'react'

function Other() {
  return (
    <div>
            <p className='text-base text-[#737373] font-normal tracking-wide'>

            Other emails from Instacity in the last 14 days that aren't about security or login will appear here. You can use it to verify which emails are real and which are fake.
                <span
                    onClick={() => navigate("/NotFound")}
                    className="text-[#0095f6] cursor-pointer text-base hover:underline"
                >
                    Learn more
                </span>
            </p>
        </div>
  )
}

export default Other