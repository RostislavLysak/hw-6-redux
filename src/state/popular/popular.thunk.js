import { fetchPopularRepos } from "../../plugins/api"
import { cache } from "../../utils"
import { getReposFailureAction, getReposSuccessAction, setReposLoadingAction, setSelectedLanguageAction } from "./popular.actions"


const fetchPopularReposMemoized = cache(fetchPopularRepos)

export const getRepos = (selectedLanguage) => (dispatch) => {
    dispatch(setSelectedLanguageAction(selectedLanguage))
    dispatch(setReposLoadingAction())

    fetchPopularReposMemoized(selectedLanguage)
        .then(response => dispatch(getReposSuccessAction(response)))
        .catch(error => dispatch(getReposFailureAction(error)))
}