import seasonJson from './season.json';
import stagesJson from './stages.json';
import circuitsJson from './circuits.json';
import standingsJson from './standings.json';
import stageResultsJson from './stage-results.json';
import highlightsJson from './highlights.json';
import type {
  Season,
  Stage,
  Circuit,
  Standings,
  StageResultsByCode,
  Highlights,
} from './types';

export const season = seasonJson as unknown as Season;
export const stages = stagesJson as unknown as Stage[];
export const circuits = circuitsJson as unknown as Circuit[];
export const standings = standingsJson as unknown as Standings;
export const stageResults = stageResultsJson as unknown as StageResultsByCode;
export const highlights = highlightsJson as unknown as Highlights;

export function stageDateTime(stage: Stage): Date {
  const [day, month] = stage.date.split('/').map(Number);
  const [hour, minute] = season.horarios.corrida.split(':').map(Number);
  const pad = (n: number) => String(n).padStart(2, '0');
  return new Date(
    `${season.ano}-${pad(month)}-${pad(day)}T${pad(hour)}:${pad(minute)}:00-03:00`
  );
}

export function nextStage(): Stage | null {
  const upcoming = stages
    .filter((s) => s.status === 'agendada')
    .sort((a, b) => a.index - b.index);
  return upcoming[0] ?? null;
}

export function circuitByCode(code: string): Circuit | undefined {
  return circuits.find((c) => c.code === code);
}

export function topStandings(count: number) {
  return [...standings.rows].sort((a, b) => a.pos - b.pos).slice(0, count);
}
