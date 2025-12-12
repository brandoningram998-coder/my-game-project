import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Top 5 Puzzle Games That Will Test Your Brainpower - GameBox',
    description: 'Puzzle games offer a perfect mix of challenge and relaxation. Here are 5 games that stand out for their clever mechanics and engaging design.',
};

export default function ArticlePage() {
    return (
        <article className="min-h-screen bg-white pb-20">
            {/* Header */}
            <div className="mx-auto max-w-4xl px-6 pt-12 pb-8">
                <h1 className="text-3xl font-bold leading-tight tracking-tight text-black md:text-4xl text-left">
                    Top 5 Puzzle Games That Will Test Your Brainpower
                </h1>
            </div>

            {/* Main Content */}
            <div className="mx-auto max-w-4xl px-6">
                <div className="overflow-hidden rounded-2xl mb-8">
                    <img
                        src="/articles/happy-glass.png"
                        alt="Happy Glass"
                        className="h-auto w-full object-cover"
                    />
                </div>

                <div className="prose prose-lg prose-slate mx-auto mb-16 max-w-none">
                    <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-8">
                        Puzzle games offer a perfect mix of challenge and relaxation, allowing players to use logic, creativity, and problem-solving skills in a fun way. The following five games stand out for their clever mechanics and engaging design, each delivering unique brain-training experiences. If you&apos;re looking for puzzle titles that truly test your thinking abilities, these games are the ideal place to start.
                    </p>
                </div>

                <div className="space-y-16">
                    {/* Game 1: Happy Glass */}
                    <div className="group relative">
                        <div className="relative z-10">
                            <div className="mb-6">
                                <h2 className="text-3xl font-bold text-slate-900 md:text-4xl mb-4">
                                    1. Happy Glass
                                </h2>
                                <div className="aspect-video w-full overflow-hidden rounded-xl bg-slate-200 shadow-sm">
                                    <img
                                        src="/articles/happy-glass.png"
                                        alt="Happy Glass"
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                            <p className="text-xl leading-relaxed text-slate-600 mb-6">
                                <em>Happy Glass</em> challenges you to draw lines that guide water into an empty cup. The levels begin simple but soon require creative thinking, accurate drawing, and an understanding of basic physics. Every level has multiple solutions, encouraging experimentation and helping players develop flexible problem-solving skills.
                            </p>
                            <p className="text-xl leading-relaxed text-slate-600">
                                Many players appreciate the game’s instant feedback — if your plan doesn’t work, you immediately see why. This makes <em>Happy Glass</em> a great tool for learning trial-and-error thinking. The increasingly complex obstacles teach you to evaluate angles, momentum, and structure stability while still keeping the experience fun and approachable.
                            </p>
                        </div>
                    </div>

                    {/* Game 2: Who Is */}
                    <div className="group relative">
                        <div className="relative z-10">
                            <div className="mb-6">
                                <h2 className="text-3xl font-bold text-slate-900 md:text-4xl mb-4">
                                    2. Who Is
                                </h2>
                                <div className="aspect-video w-full overflow-hidden rounded-xl bg-slate-200 shadow-sm">
                                    <img
                                        src="/articles/whois.png"
                                        alt="Who Is"
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                            <p className="text-xl leading-relaxed text-slate-600 mb-6">
                                <em>Who Is</em> is a clue-based puzzle game where each level presents a scenario that requires deduction and observation. You may need to figure out who is lying, who is hiding something, or who doesn&apos;t match the story. It rewards sharp attention to detail and logical reasoning, making every solved puzzle satisfying.
                            </p>
                            <p className="text-xl leading-relaxed text-slate-600">
                                What sets this game apart is its focus on quick interpretation of visual hints. Instead of solving mathematical puzzles, players must analyze expressions, background items, and hidden clues. It’s a surprisingly effective way to train your ability to spot inconsistencies and think critically under time pressure.
                            </p>
                        </div>
                    </div>

                    {/* Game 3: Draw To Smash Logic Puzzle */}
                    <div className="group relative">
                        <div className="relative z-10">
                            <div className="mb-6">
                                <h2 className="text-3xl font-bold text-slate-900 md:text-4xl mb-4">
                                    3. Draw To Smash Logic Puzzle
                                </h2>
                                <div className="aspect-video w-full overflow-hidden rounded-xl bg-slate-200 shadow-sm">
                                    <img
                                        src="/articles/draw-to-smash-logic-puzzle.png"
                                        alt="Draw To Smash Logic Puzzle"
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                            <p className="text-xl leading-relaxed text-slate-600 mb-6">
                                In <em>Draw To Smash Logic Puzzle</em>, you defeat obstacles by drawing shapes or lines that fall, roll, or rotate based on physics. Your drawing becomes part of the environment, and only a well-planned idea will break the target. It’s a fun combination of creativity and physics-based challenges.
                            </p>
                            <p className="text-xl leading-relaxed text-slate-600">
                                The most enjoyable part is experimenting with designs — sometimes unusual or unexpected shapes work better than “logical” ones. This encourages open-ended thinking and helps you understand how different shapes behave in motion. Players who enjoy testing wild ideas or thinking visually will find this game especially rewarding.
                            </p>
                        </div>
                    </div>

                    {/* Game 4: Screw Jam Puzzle */}
                    <div className="group relative">
                        <div className="relative z-10">
                            <div className="mb-6">
                                <h2 className="text-3xl font-bold text-slate-900 md:text-4xl mb-4">
                                    4. Screw Jam Puzzle
                                </h2>
                                <div className="aspect-video w-full overflow-hidden rounded-xl bg-slate-200 shadow-sm">
                                    <img
                                        src="/articles/screw-jam-puzzle.png"
                                        alt="Screw Jam Puzzle"
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                            <p className="text-xl leading-relaxed text-slate-600 mb-6">
                                <em>Screw Jam Puzzle</em> revolves around removing screws in the correct sequence to free connected parts. A single mistake can lock the entire structure, so each level becomes a careful test of planning and logical order. It’s simple to understand but surprisingly mentally engaging.
                            </p>
                            <p className="text-xl leading-relaxed text-slate-600">
                                As you progress, the puzzles begin to resemble real mechanical systems, which makes the game feel grounded and realistic. Players must consider dependency chains — which screw blocks another, where tension is held, and how removing one part changes the entire structure. This introduces a deeper layer of reasoning similar to mechanical engineering logic.
                            </p>
                        </div>
                    </div>

                    {/* Game 5: Parking Way */}
                    <div className="group relative">
                        <div className="relative z-10">
                            <div className="mb-6">
                                <h2 className="text-3xl font-bold text-slate-900 md:text-4xl mb-4">
                                    5. Parking Way
                                </h2>
                                <div className="aspect-video w-full overflow-hidden rounded-xl bg-slate-200 shadow-sm">
                                    <img
                                        src="/articles/parking-way.png"
                                        alt="Parking Way"
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                            <p className="text-xl leading-relaxed text-slate-600 mb-6">
                                <em>Parking Way</em> puts your spatial awareness to the test by challenging you to move cars in the right order to free a trapped vehicle. The simple slide-to-move mechanic becomes much harder as spaces get tighter, forcing you to think ahead and plan multiple steps in advance.
                            </p>
                            <p className="text-xl leading-relaxed text-slate-600">
                                What makes the game stand out is the combination of strategy and pattern recognition. Players learn to predict traffic flow, avoid deadlocks, and spot the “critical” car that controls the whole puzzle. It&apos;s a great training tool for logical sequencing and spatial planning, similar to classic block-sliding puzzles but with a more modern and playful twist.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </article>
    );
}
