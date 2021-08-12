import React, {useState} from 'react';
import ReactQuill from 'react-quill';
import "../../../node_modules/react-quill/dist/quill.snow.css"


const QuillEditor = () => {
    const [body, setBody] = useState("");

    const handleBody = e =>{
        setBody(e)
    }

    return (
        <div>
            <h2>Text Editor</h2>
            <ReactQuill
                modules={QuillEditor.modules}
                formats={QuillEditor.formats}
                onChange={handleBody}
                value={body}
            />
        </div>
    )
}

QuillEditor.modules ={
    toolbar: [
        [{header: "1"}, {header: "2"}, {header: [3,4,5,6]}, {font: []}],
        [{size: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{list: "ordered"}, {list: "bullet"}],
        ["link", "image", "video"],
        ["clean"],
        ["code-block"],
    ],
};
QuillEditor.formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
    "video",
    "code-block"
]
export default QuillEditor
