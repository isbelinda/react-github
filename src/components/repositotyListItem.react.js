import React from 'react'

class RepositoryListItem extends React.Component {
    render() {
        const style = {
            marginTop: '16px'
        }
        return (
            <div className="card" style={style}>
                <div className="card-content">
                    <div className="media">
                    <div className="media-left">
                        <figure className="image is-48x48">
                        <img src="http://bulma.io/images/placeholders/96x96.png" alt="Image"/>
                        </figure>
                    </div>
                    <div className="media-content">
                        <p className="title is-4">John Smith</p>
                        <p className="subtitle is-6">@johnsmith</p>
                    </div>
                    </div>
                    <hr/>
                    <nav className="level">
                        <div className="level-item has-text-centered">
                            <div>
                            <p className="heading">Stars</p>
                            <p className="title">3,456</p>
                            </div>
                        </div>
                        <div className="level-item has-text-centered">
                            <div>
                            <p className="heading">Open Issue</p>
                            <p className="title">123</p>
                            </div>
                        </div>
                        <div className="level-item has-text-centered">
                            <div>
                            <p className="heading">Forks</p>
                            <p className="title">456K</p>
                            </div>
                        </div>
                        <div className="level-item has-text-centered">
                            <div>
                            <p className="heading">Watchers</p>
                            <p className="title">789</p>
                            </div>
                        </div>
                        </nav>
                </div>
            </div>
            
        )
    }
}


export default RepositoryListItem