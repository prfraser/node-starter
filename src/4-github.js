const github = require('./api/github')

	// github.reposBy('facebook')
	//   .then(res => {
	//     const repos = res.data
	//     console.log(`Found ${repos.length} repos:`)
	//     repos.forEach(repo => {
	//       console.log(`${repo.name}`)
	//     })
	//   })

/*

Challenges:
1. Add usage of the `github.reposBy` to find all repos belonging to 'Microsoft'
2. Add function to load the info for a particular repo. Add examples to load for repos 'facebook/react' and 'Microsoft/vscode'
3. Add function to retrieve the contents of the readme file for a particular repo [https://developer.github.com/v3/repos/contents/#get-the-readme]. Hint: see **4-github.rest** file. Add examples to load for repos 'facebook/react' and 'Microsoft/vscode'
3. Add function to `src/api/github` to list all the issues for a particular repo [https://developer.github.com/v3/issues/#list-issues]. Add examples to load and display key info for repos 'facebook/react' and 'Microsoft/vscode'

*/

// function getRepos(repoName, repo) {
// 	github.reposBy(repoName, repo)
// 	  .then(res => {
// 	    const repos = res.data
//       console.log(repos)
// 	  })
// }

// getRepos('facebook', 'react')
// getReadme('Microsoft', 'vscode')

// function getReadme(repoName, repo) {
// 	github.readmeBy(repoName, repo)
// 	  .then(res => {
// 	    const repos = res.data
//       console.log(repos.content)
// 	  })
// }

// getReadme('facebook', 'react')
// getReadme('Microsoft', 'vscode')

function getIssues(repoName, repo) {
	github.issuesBy(repoName, repo)
	  .then(res => {
	    const issues = res.data
      issues.forEach(issue => console.log(issue.title));
	  })
}

getIssues('facebook', 'react')
getIssues('Microsoft', 'vscode')