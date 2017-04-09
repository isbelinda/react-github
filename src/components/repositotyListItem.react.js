import React from 'react'
import { fetchRepository } from 'api'

class RepositoryListItem extends React.Component {
    state = {
        repository: {}
    }

    componentDidMount() {
        fetchRepository(this.props.repoName)
        .then(repo => {
            this.setState({
                repository: repo
            })
        })
    }

    render() {
        const style = {
            marginTop: '16px'
        }
        const { 
            full_name = "Loading...",
            description,
            stargazers_count,
            forks_count,
            open_issues_count,
            watchers_count,
            organization = {}
         } = this.state.repository
        return (
            <div className="card" style={style}>
                <div className="card-content">
                    <div className="media">
                    <div className="media-left">
                        <figure className="image is-48x48">
                        <img src={organization.avatar_url} alt="Image"/>
                        </figure>
                    </div>
                    <div className="media-content">
                        <p className="title is-4">{ full_name }</p>
                        <p className="subtitle is-6">{ description }</p>
                    </div>
                    </div>
                    <hr/>
                    <nav className="level">
                        <div className="level-item has-text-centered">
                            <div>
                            <p className="heading">Stars</p>
                            <p className="title">{ stargazers_count }</p>
                            </div>
                        </div>
                        <div className="level-item has-text-centered">
                            <div>
                            <p className="heading">Open Issue</p>
                            <p className="title">{ open_issues_count }</p>
                            </div>
                        </div>
                        <div className="level-item has-text-centered">
                            <div>
                            <p className="heading">Forks</p>
                            <p className="title">{ forks_count }</p>
                            </div>
                        </div>
                        <div className="level-item has-text-centered">
                            <div>
                            <p className="heading">Watchers</p>
                            <p className="title">{ watchers_count }</p>
                            </div>
                        </div>
                        </nav>
                </div>
            </div>
            
        )
    }
}


export default RepositoryListItem