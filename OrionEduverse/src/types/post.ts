export interface Post {
  id: string
  userId: string
  content: string
  image?: string
  files?: Array<{
    name: string
    type: "image" | "pdf"
    url: string
  }>
  likes: number
  comments: number
  createdAt: string
  user: {
    name: string
    avatar?: string
  }
}

export interface CreatePostData {
  content: string
  image?: string
  files?: Array<{
    name: string
    type: "image" | "pdf"
    url: string
  }>
}

export interface Comment {
  id: string
  content: string
  postId: string
  userId: string
  createdAt: string
  user: {
    name: string
    avatar?: string
  }
}