export type team = {
  teamId: number,
  teamName: string,
  captainId: number,
  bowlers: Array<string>,
  tourneyMatchEvenLaneTeams: Array<string>,
  tourneyMatchOddLaneTeams: Array<string>,
}