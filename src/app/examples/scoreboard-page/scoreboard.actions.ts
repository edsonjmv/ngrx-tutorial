import { createAction, props } from '@ngrx/store';
import { Game } from './scoreboard.interface';

export const homeScore = createAction('[Scoreboard Page] Home Score');
export const awayScore = createAction('[Scoreboard Page] Away Score');
export const resetScore = createAction('[Scoreboard Page] Reset Score');
export const setScores = createAction('[Scoreboard Page] Set Scores', props<{ game: Game }>());