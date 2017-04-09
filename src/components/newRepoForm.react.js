import React from 'react'

class NewRepoForm extends React.Component {
    render() {
        return (
            <div className="section">
                <form>
                    <div className="field">
                        <label className="label">Add Repository</label>
                        <p className="control">
                            <input className="input" type="text" placeholder="Text input" />
                        </p>
                    </div>
                </form>
            </div>
        )
    }
}

export default NewRepoForm