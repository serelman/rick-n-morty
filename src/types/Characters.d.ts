declare type Character = {
  id: number,
  name: string,
  status: string,
  species: string,
  type: string
  gender: string
  origin: {
    name: string,
    url: string
  },
  location: {
    name: string,
    url: string
  },
  image: string,
  episode: string[],
  url: string,
  created: string
}

declare type CustomCharacter = {
  id?: number
  name: string
  email: string
  image: string
  gender: string
}
