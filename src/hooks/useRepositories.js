import { useState, useEffect } from 'react'

const useRepositories = () => {
  const [repositories, setRepositories] = useState(null)

  const fetchRepositories = async () => {
    const response = await globalThis.fetch('http://192.168.20.99:5000/api/repositories')
    const json = await response.json()
    setRepositories(json)
  }

  useEffect(() => {
    fetchRepositories()
  }, [])

  const repositoryNodes = repositories
  ? repositories.edges.map(edge => edge.node)
  : []

  return { repositories: repositoryNodes }
}

export default useRepositories