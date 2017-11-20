const axios = require('axios')

const github = axios.create({
  baseURL: 'https://api.github.com'
})

function reposBy(username, repo) {
  return github.get(`/repos/${username}/${repo}`)
}

function readmeBy(username, repo) {
  return github.get(`/repos/${username}/${repo}/readme`)
}

function issuesBy(username, repo) {
  return github.get(`/repos/${username}/${repo}/issues`)
}

module.exports = { reposBy, readmeBy, issuesBy }