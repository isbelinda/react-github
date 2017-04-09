import React from 'react'
import RepositoryListItem from './repositotyListItem.react'

class RepositoryLists extends React.Component {
    state = {
        repositoryName: [
            "facebook/react",
            "vuejs/vue",
            "angular/angular"
        ]
    }
    render() {
        const repositoryItems = this.state.repositoryName.map((name) => {
            return <RepositoryListItem repoName={name} key={name} />
        })
        return (
            <div className="section">
                { repositoryItems }
            </div>
        )
    }
}

export default RepositoryLists