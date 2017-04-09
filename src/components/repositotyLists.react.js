import React from 'react'
import RepositoryListItem from './repositotyListItem.react'

class RepositoryLists extends React.Component {
    render() {
        return (
            <div className="section">
                <RepositoryListItem repoName="facebook/react"/>
                <RepositoryListItem repoName="vuejs/vue"/>
                <RepositoryListItem repoName="angular/angular"/>
            </div>
        )
    }
}

export default RepositoryLists