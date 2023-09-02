export interface Battlefy {
	_id: string;
	top: Side;
	bottom: Side;
	matchType: MatchType;
	matchNumber: number;
	roundNumber: number;
	isBye: boolean;
	next?: Next;
	createdAt: Date;
	updatedAt: Date;
	doubleLoss: boolean;
	stageID: StageID;
	isComplete: boolean;
	schedule: Schedule;
	stats?: Stat[];
	completedAt?: Date;
	isMarkedLive?: boolean;
}

export interface Side {
	winner: boolean;
	disqualified: boolean;
	seedNumber?: number;
	teamID?: string;
	readyAt?: Date;
	score?: number;
	team?: Team;
}

export interface Team {
	_id: string;
	name: string;
	pendingTeamID: string;
	persistentTeamID: string;
	tournamentID: TournamentID;
	userID: string;
	customFields: [];
	ownerID: string;
	createdAt: Date;
	playerIDs: string[];
	captainID: string;
}

export enum TournamentID {
	The64E585D629F2B77Dba964876 = '64e585d629f2b77dba964876'
}

export enum MatchType {
	Winner = 'winner'
}

export interface Next {
	winner: Winner;
}

export interface Winner {
	position: Position;
	matchID: string;
}

export enum Position {
	Bottom = 'bottom',
	Top = 'top'
}

export interface Schedule {
	startTime: string;
	reschedulingRequested: boolean;
}

export enum StageID {
	The64F11A6C105F1E212E8Af978 = '64f11a6c105f1e212e8af978'
}

export interface Stat {
	matchID: string;
	gameID: GameID;
	tournamentID: TournamentID;
	stageID: StageID;
	gameNumber: number;
	stats: Stats;
	createdAt: Date;
	_id: string;
}

export enum GameID {
	The5E8Ba2E094663D1069389A15 = '5e8ba2e094663d1069389a15'
}

export interface Stats {
	isComplete: boolean;
	top: StatsDetail;
	bottom: StatsDetail;
	valorantTeamIDsByPosition: ValorantTeamIDsByPosition;
	valorantMatchID: string;
	teams: TeamElement[];
	gameStartMillis: number;
	gameLengthMillis: number;
	gameId: string;
	mapName: string;
	mapSlug: string;
	totalBombPlantsPerSite: SPerSite;
	totalBombDefusesPerSite: SPerSite;
}

export interface StatsDetail {
	score: number;
	winner: boolean;
}

export interface TeamElement {
	isWinner: boolean;
	teamId: ValTeamEnum;
	battlefyTeamID: string;
	name: string;
	players: Player[];
	teamPostPlantWinsPerSite: SPerSite;
	teamBombPlantsPerSite: SPerSite;
	teamBombDefusesPerSite: SPerSite;
	teamKills: number;
	teamAssists: number;
	teamDeaths: number;
	teamDamage: number;
	teamKda: number;
}

export interface Player {
	characterId: string;
	character: string;
	puuid: string;
	kills: number;
	deaths: number;
	assists: number;
	rounds: number;
	kda: number;
	bombPlantsPerSite: SPerSite;
	bombDefusesPerSite: SPerSite;
	totalDamage: number;
	teamId: ValTeamEnum;
	headshots: number;
	bodyshots: number;
	legshots: number;
	totalHits: number;
	headshotPercent: number;
	inGameName: string;
}

export interface SPerSite {
	C?: number;
	A?: number;
	B?: number;
}

export enum ValTeamEnum {
	Blue = 'Blue',
	Red = 'Red'
}

export interface ValorantTeamIDsByPosition {
	top: ValTeamEnum;
	bottom: ValTeamEnum;
}
