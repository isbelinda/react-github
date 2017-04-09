import React from 'react'
import RepositoryListItem from './repositotyListItem.react'

class RepositoryLists extends React.Component {
    render() {
        return (
            <div className="section">
                <RepositoryListItem/>
                <RepositoryListItem/>
                <RepositoryListItem/>
            </div>
        )
    }
}

export default RepositoryLists