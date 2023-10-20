export type TPost = {
  id: string
  username: string
  created_datetime: string
  title: string
  content: string
}

export type TPostBody = {
  username: string
  title: string
  content: string
}