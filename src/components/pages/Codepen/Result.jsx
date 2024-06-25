import React from 'react'

const Result = ({srcCode}) => {
    return (
        <div>
            <div className="p-4 shadow mt-4 rounded-lg" style={{backgroundColor: "#6295A2"}}>
                <h2
                    className="text-lg mb-2 text-white">
                    Result
                </h2>
                <iframe
                    className="w-full border rounded-md"
                    srcDoc={srcCode}
                    title="output"
                    sandbox="allow-scripts"
                    width="100%"
                    height="100%"
                >
                </iframe>
            </div>
        </div>
    )
}

export default Result