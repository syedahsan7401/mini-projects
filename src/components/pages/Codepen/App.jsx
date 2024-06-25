import React, { useCallback, useState } from 'react'
import Result from './Result'
import ReactCodeMirror from '@uiw/react-codemirror'
import { html } from '@codemirror/lang-html'
import { css } from '@codemirror/lang-css'
import { javascript } from '@codemirror/lang-javascript'

const App = () => {
    const [html_edit, sethtml_edit] = useState('');
    const [css_edit, setcss_edit] = useState('');
    const [js_edit, setjs_edit] = useState('');
    const onChangeHtml = useCallback((value) => {
        sethtml_edit(value)
    }, []);
    const onChangeCSS = useCallback((value) => {
        setcss_edit(value);
    }, []);
    const onChangeJS = useCallback((value) => {
        setjs_edit(value);
    }, []);
    const srcCode = `
    <html>
    <body>  ${html_edit}</body>
    <style> ${css_edit}</style>
    <script>${js_edit}</script>
    </html>
    `;
    return (
        <div>
            {/* main content  */}

            <div className="container my-5 rounded-lg">
                <div className="row my-5 " style={{ backgroundColor: "#6295A2" }}>

                    {/* Html Editor */}
                    <div className="col-4 border p-4 rounded-lg shadow">
                        <h2 className="text-lg font-semibold mb-2 text-white">HTML</h2>
                        <ReactCodeMirror
              className="text-xl border-gray-700 border"
              value={html_edit}
              height="342px"
              theme="dark"
              extensions={[html(true)]}
              onChange={onChangeHtml}
            />
                    </div>

                    {/* CSS Editor */}
                    <div className="col-4 border p-4 rounded-lg shadow">
                        <h2 className="text-lg font-semibold mb-2 text-white">CSS</h2>
                        <ReactCodeMirror
              className="text-xl border-gray-700 border"
              value={css_edit}
              height="342px"
              theme="dark"
              extensions={[css(true)]}
              onChange={onChangeCSS}
            />
                    </div>

                    {/* JS Editor */}
                    <div className="col-4 border p-4 rounded-lg shadow">
                        <h2 className="text-lg font-semibold mb-2 text-white">JavaScript</h2>
                        <ReactCodeMirror
              className="text-xl border-gray-700 border"
              value={js_edit}
              height="342px"
              theme="dark"
              extensions={[javascript(true)]}
              onChange={onChangeJS}
            />
                    </div>
                </div>
                {/* Result  */}
                <Result
                    srcCode={srcCode}
                />
            </div>
        </div>
    )
}

export default App