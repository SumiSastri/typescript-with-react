export default interface IEpisode {
    id: number
    name: string
    image:{medium:string, original: string}
    number: number
    season: number
    summary?: string
  }
  export default interface IAction {
    type: string
    payload: any
}
export default interface IState{
    episodes: Array<IEpisode>
    favourites: Array<IEpisode>
}
export default interface IEpisodeProps{
  episodes: Array<IEpisode>
  toggleFave: (state: IState, dispatch: any, episode: IEpisode) => {IAction}
  favourites: Array<IEpisode>
}