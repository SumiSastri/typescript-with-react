export default interface IEpisode {
    airdate:string
    airstamp: string
    airtime:string
    id: number
    name: string
    image:{medium:string, original: string}
    number: number
    runtime: number
    season: number
    summary: string
    url: string
  }

  export default interface IAction {
    type: string
    payload: any
}

export default interface IState{
    episodes: IEpisode,
    favourites: []
}