import React from 'react'

const Sent_message = () => {
    return (
        <>
            <div className="col-start-6 col-end-13 p-3 rounded-lg">
                <div className="flex items-center justify-start flex-row-reverse">
                    <div
                        className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                    >
                        AD
                    </div>
                    <div
                        className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl"
                    >
                        <div>
                            hello my name is Anurag Dahal
                        </div>
                        <div
                            className="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500"
                        >
                            unseen
                        </div>
                    </div>
                </div>
            {/* </> */}
        </>
    )
}

export default Sent_message