export type Grid = 'A' | 'B';

export interface Season {
  nome: string;
  temporada: number;
  ano: number;
  status: 'pre-season' | 'em-andamento' | 'encerrada';
  statusNota: string;
  tagline: string;
  kicker: string;
  horarios: {
    dia: string;
    lobby: string;
    qualifying: string;
    qualifyingDuracaoMin: number;
    corrida: string;
    corridaDuracaoMaxMin: number;
    timezone: string;
  };
  regras: {
    gridSize: number;
    promoveRebaixa: number;
    descarteEtapas: number;
    descarteNota: string;
    grids: Record<string, string>;
    desempate: string[];
    vagaTR: string;
  };
  pontuacao: {
    gridA: number[];
    gridB: number[];
    bonus: { voltaMaisRapida: number; pole: number };
  };
  links: {
    whatsapp: string;
    inscricao: string;
  };
  heroVideo?: HeroVideo;
}

export interface HeroVideo {
  type: 'youtube' | 'file';
  src?: string;
  youtubeId?: string;
  poster?: string;
  title?: string;
}

export interface Stage {
  index: number;
  code: string;
  date: string;
  weekday: string;
  track: string;
  circuitCode: string;
  carCategory: string;
  boxWindow: string | null;
  isFinal: boolean;
  status: 'agendada' | 'concluida';
  media: { title: string; youtubeId: string; author?: string }[];
}

export interface Circuit {
  code: string;
  name: string;
  lengthKm: string;
  highlight: string;
  carCategory: string;
  isFinal: boolean;
  trackMapUrl: string | null;
}

export interface StandingRow {
  id: string;
  pos: number;
  move: number;
  name: string;
  grid: Grid;
  points: number;
  wins: number;
  podiums: number;
  bestFinish: string;
  penalties: number;
  gapToLeader: string;
}

export interface Standings {
  atualizadoAte: string;
  gridSize: number;
  rows: StandingRow[];
}

export interface StageResultRow {
  pos: string;
  name: string;
  time: string;
  promoted?: boolean;
  relegated?: boolean;
}

export interface StageResults {
  gridA: StageResultRow[];
  gridB: StageResultRow[];
}

export type StageResultsByCode = Record<string, StageResults>;

export interface HighlightEntry {
  name: string;
  detail: string;
  value?: string;
}

export interface Highlights {
  lastStage: string | null;
  exemplo: {
    stageCode: string;
    stageLabel: string;
    pilotoDaNoite: HighlightEntry;
    maiorEscalador: HighlightEntry;
    pilotoMaisLimpo: HighlightEntry;
  };
}
