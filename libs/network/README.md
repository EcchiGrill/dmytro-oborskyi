# 🚀 Dmytro Oborskyi CV Network library

This library provides a GraphQL client for the frontend (`apps/web`) in **[Dmytro Oborsky CV Website](https://github.com/EcchiGrill/dmytro-oborskyi)** using GraphQL Codegen. It simplifies API interactions by generating TypeScript types and hooks.

## ✨ Features

- ✅ **GraphQL Codegen**: Automatically generates TypeScript types and Apollo hooks.
- ✅ **Typed API Requests**: Ensures type safety for API calls.

## 🏗️ Usage

📄 **`apps/web/components/Projects.tsx`**

```tsx
import { useQuery } from '@apollo/client'
import { ProjectsDocument } from 'dmytro-oborskyi_network/src/gql/generated'

const Projects = () => {
  const { data, loading, error } = useQuery(ProjectsDocument)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <ul>
      {data?.projects.map((project) => (
        <li key={project.uid}>{project.name}</li>
      ))}
    </ul>
  )
}

export default Projects
```
