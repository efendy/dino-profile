
// type:
// newspaper - news
// bell-alert - alert
// information-circle - information
// gift - promotion

interface Feed {
  id: string
  type: string
  img_uri: string
  message: string
  time: string
}

export type {
  Feed
}
