declare type Project = {
  _id: string
  title: string
  description: string
  linkRepos: string
  linkProject: string
  src: string
}

declare type PurchasePayloadProject = {
  title: string
  description: string
  linkRepos: string
  linkProject: string
  file: File | null
}

declare type NewProjectFormData = {
  title: string
  description: string
  linkRepos: string
  linkProject: string
  file: File | null
}
