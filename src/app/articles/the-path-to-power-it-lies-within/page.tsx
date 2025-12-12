import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'The Path to Power! It Lies Within - GameBox',
    description: 'Discover 6 exhilarating games that test your skills, strategy, and reflexes. From water slides to basketball showdowns, these titles offer endless fun.',
};

export default function ArticlePage() {
    return (
        <article className="min-h-screen bg-white pb-20">
            {/* Header */}
            <div className="mx-auto max-w-4xl px-6 pt-12 pb-8">
                <h1 className="text-3xl font-bold leading-tight tracking-tight text-black md:text-4xl text-left">
                    The Path to Power! It Lies Within
                </h1>
            </div>

            {/* Main Content */}
            <div className="mx-auto max-w-4xl px-6">
                <div className="overflow-hidden rounded-2xl mb-8">
                    <img
                        src="/articles/aqua-thrills.png"
                        alt="Aqua Thrills"
                        className="h-auto w-full object-cover"
                    />
                </div>

                <div className="prose prose-lg prose-slate mx-auto mb-16 max-w-none">
                    <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-8">
                        The path to gaming mastery isn&apos;t just about high scores—it&apos;s about finding the right challenge that sparks your joy. We&apos;ve curated 6 incredible titles that span frantic sports action, physics-based fun, and strategic tests. Dive in and discover your new favorite!
                    </p>
                </div>

                <div className="space-y-16">
                    {/* Game 1: Aqua Thrills */}
                    <div className="group relative">
                        <div className="relative z-10">
                            <div className="mb-6">
                                <h2 className="text-3xl font-bold text-slate-900 md:text-4xl mb-4">
                                    1. Aqua Thrills
                                </h2>
                                <div className="aspect-video w-full overflow-hidden rounded-xl bg-slate-200 shadow-sm">
                                    <img
                                        src="/articles/aqua-thrills.png"
                                        alt="Aqua Thrills"
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                            <p className="text-xl leading-relaxed text-slate-600 mb-6">
                                <em>Aqua Thrills</em> is a water-slide themed casual game where you control the shape and direction of the slide to ensure riders land safely while enjoying the thrill. The gameplay is simple, but timing and angle control matter a lot as levels become more complex. You’ll try different route choices to get higher scores and smoother landings.
                            </p>
                            <p className="text-xl leading-relaxed text-slate-600">
                                <strong>Note:</strong> The fun of this game comes from its mix of light strategy and fast reactions. Even a small change in slide direction can completely alter the final outcome, so it quietly trains your quick-judgment skills. Each successful landing feels surprisingly rewarding.
                            </p>
                        </div>
                    </div>

                    {/* Game 2: Basketball Legends 2020 */}
                    <div className="group relative">
                        <div className="relative z-10">
                            <div className="mb-6">
                                <h2 className="text-3xl font-bold text-slate-900 md:text-4xl mb-4">
                                    2. Basketball Legends 2020
                                </h2>
                                <div className="aspect-video w-full overflow-hidden rounded-xl bg-slate-200 shadow-sm">
                                    <img
                                        src="/articles/basketball-legends-2020.png"
                                        alt="Basketball Legends 2020"
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                            <p className="text-xl leading-relaxed text-slate-600 mb-6">
                                This classic head-to-head basketball game lets you choose single-player or two-player mode, using special moves, quick steals, and dramatic shots to win. Matches are short, intense, and perfect when you want fast action.
                            </p>
                            <p className="text-xl leading-relaxed text-slate-600">
                                <strong>Note:</strong> The real charm lies in the shifting pace. Sometimes you must defend carefully, and sometimes you need to take a risky jump shot. It’s not just button-mashing—timing and strategy become more important the longer you play.
                            </p>
                        </div>
                    </div>

                    {/* Game 3: Basketball Stars */}
                    <div className="group relative">
                        <div className="relative z-10">
                            <div className="mb-6">
                                <h2 className="text-3xl font-bold text-slate-900 md:text-4xl mb-4">
                                    3. Basketball Stars
                                </h2>
                                <div className="aspect-video w-full overflow-hidden rounded-xl bg-slate-200 shadow-sm">
                                    <img
                                        src="/articles/basketball-stars.png"
                                        alt="Basketball Stars"
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                            <p className="text-xl leading-relaxed text-slate-600 mb-6">
                                <em>Basketball Stars</em> focuses on speed and movement. In a one-on-one match, you dodge, sprint, steal, and shoot while trying to outmaneuver your opponent. It emphasizes quick reactions and reading the opponent’s moves.
                            </p>
                            <p className="text-xl leading-relaxed text-slate-600">
                                <strong>Note:</strong> As you get used to the rhythm, you’ll start predicting when your opponent will shoot or rush. That sense of anticipation makes the gameplay deeper and more skill-based than it appears at first glance.
                            </p>
                        </div>
                    </div>

                    {/* Game 4: Beach Boxing Simulator */}
                    <div className="group relative">
                        <div className="relative z-10">
                            <div className="mb-6">
                                <h2 className="text-3xl font-bold text-slate-900 md:text-4xl mb-4">
                                    4. Beach Boxing Simulator
                                </h2>
                                <div className="aspect-video w-full overflow-hidden rounded-xl bg-slate-200 shadow-sm">
                                    <img
                                        src="/articles/beach-boxing-simulator.png"
                                        alt="Beach Boxing Simulator"
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                            <p className="text-xl leading-relaxed text-slate-600 mb-6">
                                This lighthearted boxing game takes place on a beach, featuring exaggerated movements and simple controls. You dodge punches, strike back, and try to outsmart your opponent in a fun and relaxed environment.
                            </p>
                            <p className="text-xl leading-relaxed text-slate-600">
                                <strong>Note:</strong> Though it’s simple, the later rounds require better timing and patience. You’ll learn to observe patterns and counter at the right moment, giving the game a small but satisfying strategic feel.
                            </p>
                        </div>
                    </div>

                    {/* Game 5: Dummies World Cup */}
                    <div className="group relative">
                        <div className="relative z-10">
                            <div className="mb-6">
                                <h2 className="text-3xl font-bold text-slate-900 md:text-4xl mb-4">
                                    5. Dummies World Cup
                                </h2>
                                <div className="aspect-video w-full overflow-hidden rounded-xl bg-slate-200 shadow-sm">
                                    <img
                                        src="/articles/dummies-world-cup.png"
                                        alt="Dummies World Cup"
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                            <p className="text-xl leading-relaxed text-slate-600 mb-6">
                                <em>Dummies World Cup</em> uses ragdoll physics for a chaotic and funny football experience. The characters wobble and fall unpredictably, but your goal remains the same—kick the ball into the opponent’s net.
                            </p>
                            <p className="text-xl leading-relaxed text-slate-600">
                                <strong>Note:</strong> The unpredictable movement actually helps you develop adaptability. You learn to react quickly and take advantage of weird bounces. That mix of chaos and opportunity makes every match different.
                            </p>
                        </div>
                    </div>

                    {/* Game 6: Jumpshot Champion */}
                    <div className="group relative">
                        <div className="relative z-10">
                            <div className="mb-6">
                                <h2 className="text-3xl font-bold text-slate-900 md:text-4xl mb-4">
                                    6. Jumpshot Champion
                                </h2>
                                <div className="aspect-video w-full overflow-hidden rounded-xl bg-slate-200 shadow-sm">
                                    <img
                                        src="/articles/jumpshot-champion.png"
                                        alt="Jumpshot Champion"
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                            <p className="text-xl leading-relaxed text-slate-600 mb-6">
                                <em>Jumpshot Champion</em> is all about precision. You adjust the angle and power of each shot to score baskets across stages with varying distance and height. Every level requires careful control to succeed.
                            </p>
                            <p className="text-xl leading-relaxed text-slate-600">
                                <strong>Note:</strong> The game rewards patience and fine-tuning. As you practice, you’ll understand how small adjustments affect the ball’s arc. Landing a perfect shot feels genuinely satisfying and naturally encourages you to keep going.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </article>
    );
}
