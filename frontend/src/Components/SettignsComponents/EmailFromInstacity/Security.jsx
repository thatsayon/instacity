import React from 'react'

function Security() {
    return (
        <div>
            <p className='text-base text-[#737373] font-normal tracking-wide'>

                Security and login emails from Instagram in the last 14 days will appear here. You can use it to verify which emails are real and which are fake.
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

export default Security