import React, { useState } from "react"

function CreatePost() {
    const [title, setTitle] = useState('')

    const onChange = (event) => {
        setTitle(event.target.value)
        console.log(event.target.value);
    }

    const onSubmit = async (event) => {
        event.preventDefault()
        await fetch('http://localhost:4000/posts', {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
            },
            body: JSON.stringify({title: title})
        })
        setTitle('')
    }
    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="row">
                    <label>Title</label>
                    <input type='text' value={title} onChange={onChange} className="form-control" />
                </div>
                <div className="row mt-3 col-2">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </>
    )
}

export default CreatePost