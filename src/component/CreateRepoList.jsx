function RepoList({ repos }) {

    return (

        <div>

            {
                repos.map((repo) => (

                    <div
                        key={repo.id}
                        style={{
                            border: "1px solid gray",
                            margin: "10px",
                            padding: "10px"
                        }}
                    >

                        <h3>{repo.name}</h3>

                        <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {repo.html_url}
                        </a>

                    </div>

                ))
            }

        </div>

    );

}

export default RepoList;