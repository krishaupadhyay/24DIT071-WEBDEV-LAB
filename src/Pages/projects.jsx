import { useState, useEffect } from "react";
import Spinner from "../component/Spinner";
import ErrorMessage from "../component/ErrorMessage";
import RepoList from "../component/RepoList";

function projects() {

    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");

    useEffect(() => {

      fetch("https://api.github.com/users/krishaupadhyay/repos")

            .then((response) => {

                if (!response.ok) {
                    throw new Error("Failed to fetch repositories");
                }

                return response.json();
            })

            .then((data) => {

                setRepos(data);

            })

            .catch((err) => {

                setError(err.message);

            })

            .finally(() => {

                setLoading(false);

            });

    }, []);

    // Filter repositories based on search input
    const filteredRepos = repos.filter((repo) =>
        repo.name.toLowerCase().includes(search.toLowerCase())
    );

    if (loading) {
        return <Spinner />;
    }

    if (error) {
    return (
        <div>
            <ErrorMessage message={error} />

            <button onClick={fetchRepos}>
                Retry
            </button>
        </div>
    );
}

    return (

        <div>

            <h2>GitHub Repositories</h2>

            <input
                type="text"
                placeholder="Search Repository..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <RepoList repos={filteredRepos} />

        </div>

    );

}

export default projects;