import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Top 4 Free Online Games You Can Play Right Now - GameBox',
    description: 'Discover the best free online games you can play instantly in your browser. No downloads, no installation required.',
};

interface GameItem {
    id: number;
    image: string;
    title: string;
    description: string;
}

const games: GameItem[] = [
    {
        id: 1,
        image: '/articles/block-sandbox.png',
        title: 'Block Sandbox',
        description: 'Block Sandbox is a creative open-world builder where players can explore, craft, and construct anything they imagine using block-style elements. Inspired by sandbox classics, it gives you complete freedom to gather resources, build structures, and interact with your environment, making it a great choice for both casual creators and adventure seekers. To play, you move through the world collecting materials, crafting tools, and building structures block-by-block. You can experiment freely, design your own worlds, and enjoy hours of relaxing creativity without limits.',
    },
    {
        id: 2,
        image: '/articles/cube-miner-escape-from-prison.png',
        title: 'Cube Miner Escape From Prison',
        description: 'Cube Miner Escape From Prison is an escape-adventure game where you play as a blocky miner trying to break out of a heavily guarded prison. The game combines puzzle-solving with action elements as you mine through walls, avoid guards, and navigate tricky layouts to reach freedom. The main gameplay involves digging strategically, finding hidden paths, using tools effectively, and timing your movements to avoid detection. Each level becomes more challenging, rewarding players who think ahead and explore every possible escape route.',
    },
    {
        id: 3,
        image: '/articles/draw-my-path-obby.png',
        title: 'Draw My Path Obby',
        description: 'Draw My Path Obby is a fun and clever obstacle-course game where you draw the path your character must follow to overcome traps, gaps, and moving challenges. Instead of controlling a character directly, you sketch lines that act as the route, turning each level into a creative puzzle. To play, simply draw a safe line from the start to the goal while avoiding obstacles like spikes, pits, and enemies. The real challenge is predicting how your drawn path will behave once the character begins moving — making every level feel like a mix of drawing strategy and physics-based fun.',
    },
    {
        id: 4,
        image: '/articles/fishing-league.png',
        title: 'Fishing League',
        description: 'Fishing League is a relaxing and competitive fishing game where players cast their lines into the water to catch different species of fish while upgrading their gear and unlocking new areas. It blends simple mechanics with satisfying progression, making it enjoyable for players of all ages. To play, you cast your line, wait for a bite, reel in fish at the right moment, and earn coins to purchase better rods, lures, and upgrades. As you level up, you can access deeper waters with bigger fish and compete to catch rare species, making the experience both calming and addictive.',
    },
];

export default function ArticlePage() {
    return (
        <article className="min-h-screen bg-white pb-20">
            {/* Header */}
            <div className="mx-auto max-w-4xl px-6 pt-12 pb-8">
                <h1 className="text-3xl font-bold leading-tight tracking-tight text-black md:text-4xl text-left">
                    Top 4 Free Online Games You Can Play Right Now
                </h1>
            </div>

            {/* Main Content */}
            <div className="mx-auto max-w-4xl px-6">
                <div className="overflow-hidden rounded-2xl mb-8">
                    <img
                        src="/articles/top-4-games-cover.png"
                        alt="Top 4 Free Online Games"
                        className="h-auto w-full object-cover"
                    />
                </div>

                <div className="prose prose-lg prose-slate mx-auto mb-16 max-w-none">
                    <p className="text-xl text-slate-600 md:text-2xl font-medium mb-8">
                        No downloads. No installation. Just pure fun directly in your browser.
                    </p>
                    <p className="text-xl md:text-2xl text-slate-600 leading-relaxed">
                        Looking for fun, fast, and addictive games? Whether you’re taking a break, relaxing after school, or just looking for something entertaining, online web games are the perfect option.
                    </p>
                </div>

                <div className="space-y-16">
                    {games.map((game) => (
                        <div
                            key={game.id}
                            className="group relative"
                        >
                            <div className="relative z-10">
                                <div className="mb-6">
                                    <h2 className="text-3xl font-bold text-slate-900 md:text-4xl mb-4">
                                        {game.title}
                                    </h2>
                                    <div className="aspect-video w-full overflow-hidden rounded-xl bg-slate-200 shadow-sm">
                                        <img
                                            src={game.image}
                                            alt={game.title}
                                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                </div>

                                <p className="text-xl leading-relaxed text-slate-600">
                                    {game.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>



            </div>
        </article>
    );
}
