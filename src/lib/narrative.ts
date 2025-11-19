import type { Game } from './types';

function stitchedParagraph(sentences: string[]): string {
  return sentences.join(' ');
}

export function buildMainDescription(game: Game): string[] {
  const base = game.description;
  return [
    stitchedParagraph([
      base,
      `${game.title} drops you into a richly detailed ${game.category.toLowerCase()} playground where every run reveals new micro-stories and emergent challenges.`,
      'From the moment the loading screen fades you are confronted with layered objectives, daily quests, and a soundtrack that reacts to the tempo of your performance.'
    ]),
    stitchedParagraph([
      'Each biome and checkpoint introduces modifiers that encourage experimentation, whether that means swapping movement paths, banking upgrades, or chasing high-score artifacts.',
      'Collectibles are never just window dressing-they unlock lore entries, cosmetic flair, and powerful boosts that meaningfully change subsequent attempts.',
      'Because the progression system is account-wide, you always feel a sense of momentum even if a particular run ends abruptly.'
    ]),
    stitchedParagraph([
      'The UI prioritizes clarity with readable icons, high-contrast alerts, and controller-friendly prompts that adjust automatically when you switch input devices.',
      'Offline players are not left behind either: session rewards accrue the next time you log in, ensuring the loop remains friendly to short play bursts.',
      'Accessibility options such as colorblind filters, remappable keys, and motion tuning keep the experience inviting for a wide audience.'
    ]),
    stitchedParagraph([
      'Beyond moment-to-moment action, the narrative framing offers postcards from the game world, highlighting factions, rival teams, or local legends.',
      'These details give texture to the challenge ladder and make every milestone feel like a meaningful chapter in an ongoing saga.',
      'It all comes together as a modern browser showcase that respects your time while rewarding mastery.'
    ])
  ];
}

export function buildHowToPlay(game: Game): string[] {
  return [
    stitchedParagraph([
      game.how_to_play,
      `We recommend easing into ${game.title} by spending your first few runs learning the rhythm of enemy waves and interactive objects.`,
      'Watch for subtle visual cues-LED strips, particle effects, or audio stingers-that telegraph incoming hazards before they fully spawn.'
    ]),
    stitchedParagraph([
      'As you grow comfortable, layer in advanced maneuvers such as chaining momentum boosts, canceling animations with quick inputs, or triggering gadgets mid-movement.',
      'The training hub includes looping scenarios that let you practice clearing tight corridors, juggling projectiles, and executing perfect defensive responses.',
      'Track your improvement through the built-in analytics overlay, which highlights combo retention, resource efficiency, and objective pacing.'
    ]),
    stitchedParagraph([
      'If you prefer a collaborative approach, toggle on cooperative assists to sync with friends and share power-ups during critical moments.',
      'Competitive players can chase ladder promotions by opting into ranked modifiers that amplify enemy behaviors and reward flawless execution.',
      'However you approach the controls, the onboarding curve is intentionally generous while still leaving plenty of ceiling for mastery.'
    ]),
    stitchedParagraph([
      'Remember to visit the in-game workshop after each session to tune loadouts, craft consumables, and equip the perks that complement your preferred tactics.',
      'Supply crates refresh every few hours, and seasonal events rotate in unique limited-time mechanics that keep you revisiting the tutorial tips.',
      'By staying flexible and adapting to the evolving rule set, you will keep your strategies sharp and your play sessions consistently exciting.'
    ])
  ];
}

export function buildEditorsReview(game: Game): string[] {
  return [
    stitchedParagraph([
      game.editors_review,
      `${game.title} embodies the spirit of the modern web gaming scene-fast loading, controller-ready, and packed with enough depth to satisfy seasoned players.`,
      'Even during peak chaos, its clarity of design ensures you always understand how your choices ripple across the match.'
    ]),
    stitchedParagraph([
      'The presentation does heavy lifting: post-processing is tasteful rather than noisy, animation curves make every interaction punchy, and the soundtrack anchors the pacing.',
      'We were especially impressed by the save-anywhere feature, which lets you drop out mid-session without losing the thread of ongoing objectives.'
    ]),
    stitchedParagraph([
      'On the technical front the game performs beautifully in a browser, hitting high frame rates on laptops and tablets alike thanks to scalable visual presets.',
      'Input latency is minimized through predictive buffering, and the game gracefully detects when a connection wobbles so you have time to recover.'
    ]),
    stitchedParagraph([
      'When stacked against the broader ${game.category.toLowerCase()} catalog, ${game.title} stands out for its confident aesthetic and thoughtful quality-of-life touches.',
      'It respects veteran instincts while still offering a welcoming doorway for first-timers, making it an easy recommendation for anyone curating a library of browser classics.'
    ])
  ];
}
