type Input = { prompt:string; genre?:string; persona?:string; voice?:string; mood?:string; language?:string };
export const buildPrompt=(i:Input)=>[
  `Create a ${i.language ?? 'English'} song: ${i.prompt}`,
  i.genre && `Genre direction: ${i.genre}.`,
  i.persona && `Persona direction: ${i.persona}.`,
  i.voice && `Use ${i.voice}.`,
  i.mood && `Mood should be ${i.mood}.`,
].filter(Boolean).join(' ');
