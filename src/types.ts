export interface IVideoInfo {
  author?: string
  authorIconSrc?: string
  commentCount?: number
  date?: string
  id?: string
  poster?: string
  playCount?: string
  likeCount?: string
  favCount?: string
  videoSrc?: string
  videoTitle?: string
}

export interface IVideoItem {
  commentCount: string
  desc: string
  id: string
  imgSrc: string
  link: string
  playCount: string
  videoSrc: string
}
