import React from 'react'
import NewRepoForm from 'components/newRepoForm.react'
import RepositoryLists from './../components/repositotyLists.react'

class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <NewRepoForm/>
                <RepositoryLists/>
            </div>
        )
    }
}

export default Dashboard