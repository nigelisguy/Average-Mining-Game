// ores.js

export const RARITIES = {
    c: {
        name: 'Common',
        color: '#808080',
        valMult: 1,
        splitVault: false,
        rank: 1,
        weight: 6000
    },
    cr: {
        name: 'Common Rare',
        color: '#505050',
        valMult: 1.2,
        splitVault: false,
        rank: 2,
        weight: 2500
    },
    r: {
        name: 'Rare',
        color: '#2EA043',
        valMult: 1.5,
        splitVault: false,
        rank: 3,
        weight: 1000
    },
    mr: {
        name: 'More Rare',
        color: '#00FF66',
        valMult: 2,
        splitVault: false,
        rank: 4,
        weight: 350
    },
    sr: {
        name: 'Super Rare',
        color: '#00FFFF',
        valMult: 3,
        splitVault: false,
        rank: 5,
        weight: 120
    },
    ur: {
        name: 'Ultra Rare',
        color: '#0066FF',
        valMult: 5,
        splitVault: true,
        rank: 6,
        weight: 25
    },
    m: {
        name: 'Mythic',
        color: '#FF0000',
        valMult: 10,
        splitVault: true,
        rank: 7,
        weight: 4
    },
    l: {
        name: 'Legendary',
        color: '#FFD700',
        valMult: 25,
        splitVault: true,
        rank: 8,
        weight: 0.8
    },
    hl: {
        name: 'Hyper Legendary',
        color: '#FF69B4',
        valMult: 100,
        splitVault: true,
        rank: 9,
        weight: 0.1
    },
    'o-o': {
        name: 'Voidcore',
        color: '#000000',
        valMult: 1000,
        splitVault: true,
        rank: 10,
        weight: 0.01
    }
};

export const ORES = {
    // --- LAYER 1: Surface & Topsoil (0m - 50m) ---
    leaf_litter: { id: 'leaf_litter', name: 'Leaf Litter', rarity: 'c', hp: 3, costPerKg: 0.05, color: '#4d7c0f', desc: 'Decomposing leaves mixed with topsoil.' },
    dirt: { id: 'dirt', name: 'Dirt', rarity: 'c', hp: 5, costPerKg: 0.07, color: '#78350f', desc: '"Bear witness to the fine grain of brown specks, littered with tiny rocks in between, texture so good people doubted it was even real." - Mr Ve, a Philosopher, which in response: "Dude. Its just dirt." - Some Random Guy Who Got Punished Multiple Times Later, Status Now: Unknown' },
    coarse_dirt: { id: 'coarse_dirt', name: 'Coarse Dirt', rarity: 'c', hp: 7, costPerKg: 0.07, color: '#92400e', desc: 'Dirt x Pebbles x Twigs Collab. Truly the collab of the century!' },
    pebbled_dirt: { id: 'pebbled_dirt', name: 'Pebbled Dirt', rarity: 'cr', hp: 11, costPerKg: 0.10, color: '#b45309', desc: 'Gritty dirt studded with small river stones.' },
    boulder: { id: 'boulder', name: 'Boulder', rarity: 'cr', hp: 15, costPerKg: 0.12, color: '#6b7280', desc: 'Heavy unrefined rock fragment.' },
    anthill: { id: 'anthill', name: 'Anthill', rarity: 'r', hp: 30, costPerKg: 0.20, color: '#d97706', desc: 'Intricate tunnel networks filled with busy insects.' },
    gravel: { id: 'gravel', name: 'Gravel', rarity: 'r', hp: 25, costPerKg: 0.25, color: '#9ca3af', desc: 'Loose aggregate of worn stones.' },
    lost_coin: { id: 'lost_coin', name: 'Lost Coin', rarity: 'sr', hp: 30, costPerKg: 0.50, color: '#facc15', desc: 'A dropped tarnished copper coin from surface dwellers.' },
    pocketed_clover: { id: 'pocketed_clover', name: 'Pocketed Clover', rarity: 'ur', hp: 50, costPerKg: 1.00, color: '#22c55e', desc: 'Four leaves of pure luck, compressed under years of topsoil.' },

    // --- LAYER 2: Sedimentary & Soft Stone (51m - 150m) ---
    soft_rock: { id: 'soft_rock', name: 'Soft Rock', rarity: 'c', hp: 40, costPerKg: 0.30, color: '#64748b', desc: 'Sedimentary stone that crumbles under pressure.' },
    limestone: { id: 'limestone', name: 'Limestone', rarity: 'cr', hp: 65, costPerKg: 0.55, color: '#cbd5e1', desc: 'Calcium carbonate rock built from ancient sea life.' },
    fossilized_shell: { id: 'fossilized_shell', name: 'Fossilized Shell', rarity: 'r', hp: 90, costPerKg: 0.90, color: '#fdba74', desc: 'Prehistoric marine organism preserved in stone.' },
    dense_flint: { id: 'dense_flint', name: 'Dense Flint', rarity: 'mr', hp: 130, costPerKg: 1.75, color: '#334155', desc: 'Sharp, dark crypto-crystalline quartz.' },
    geode_fragment: { id: 'geode_fragment', name: 'Geode Fragment', rarity: 'sr', hp: 200, costPerKg: 3.50, color: '#c084fc', desc: 'Sparkling hollow rock lined with purple crystals.' },
    granite_core: { id: 'granite_core', name: 'Granite Core', rarity: 'ur', hp: 350, costPerKg: 8.00, color: '#f87171', desc: 'Coarse igneous rock formed deep underground.' },
    petrified_amber: { id: 'petrified_amber', name: 'Petrified Amber', rarity: 'm', hp: 600, costPerKg: 25.00, color: '#fbbf24', desc: 'Fossilized tree resin trapping ancient air bubbles.' },

    // --- LAYER 3: Upper Crust & Stone Strata (151m - 250m) ---
    rough_stone: { id: 'rough_stone', name: 'Rough Stone', rarity: 'c', hp: 200, costPerKg: 1.20, color: '#475569', desc: 'Unforgiving, solid gray basement rock.' },
    cobbled_stone: { id: 'cobbled_stone', name: 'Cobbled Stone', rarity: 'cr', hp: 350, costPerKg: 2.20, color: '#64748b', desc: 'Fractured chunks of stone bound together by mineral pressure.' },
    chert_nodule: { id: 'chert_nodule', name: 'Chert Nodule', rarity: 'r', hp: 600, costPerKg: 4.50, color: '#78716c', desc: 'Ultra-hard flintlike nodule embedded in deep limestone.' },
    pyrite_vein: { id: 'pyrite_vein', name: 'Pyrite Vein', rarity: 'mr', hp: 1000, costPerKg: 9.00, color: '#eab308', desc: 'Fool\'s gold shining with a brassy, deceptively rich luster.' },
    cobalt_vein: { id: 'cobalt_vein', name: 'Cobalt Vein', rarity: 'sr', hp: 1800, costPerKg: 20.00, color: '#2563eb', desc: 'Luminous blue magnetic ore.' },
    magma_crystal: { id: 'magma_crystal', name: 'Magma Crystal', rarity: 'ur', hp: 3200, costPerKg: 50.00, color: '#ef4444', desc: 'Pulsating crystal infused with geothermal heat.' },
    void_shard: { id: 'void_shard', name: 'Void Shard', rarity: 'm', hp: 6000, costPerKg: 150.00, color: '#7e22ce', desc: 'Matter-absorbing crystal shard that chills the air.' },

    // --- LAYER 4: Lower Crust & Extreme Pressure (251m - 375m) ---
    basalt_block: { id: 'basalt_block', name: 'Basalt Block', rarity: 'c', hp: 2000, costPerKg: 10.00, color: '#1e293b', desc: 'Dense dark volcanic rock from oceanic crusts.' },
    iron_ore: { id: 'iron_ore', name: 'Iron Ore', rarity: 'cr', hp: 3500, costPerKg: 22.00, color: '#ea580c', desc: 'Heavy compressed metallic vein glowing with rusted iron.' },
    obsidian_slate: { id: 'obsidian_slate', name: 'Obsidian Slate', rarity: 'r', hp: 6000, costPerKg: 48.00, color: '#020617', desc: 'Glassy volcanic slate with knife-sharp edges.' },
    gabbro_chunk: { id: 'gabbro_chunk', name: 'Gabbro Chunk', rarity: 'mr', hp: 10000, costPerKg: 110.00, color: '#0f172a', desc: 'Coarse-grained intrusive igneous rock of the lower crust.' },
    eclogite: { id: 'eclogite', name: 'Eclogite', rarity: 'sr', hp: 18000, costPerKg: 280.00, color: '#15803d', desc: 'High-pressure metamorphic rock studded with garnets.' },
    adamantite_ore: { id: 'adamantite_ore', name: 'Adamantite Ore', rarity: 'ur', hp: 30000, costPerKg: 750.00, color: '#0284c7', desc: 'Indestructible metallic mineral formed under deep crustal loads.' },
    celestial_core: { id: 'celestial_core', name: 'Celestial Core', rarity: 'l', hp: 55000, costPerKg: 2500.00, color: '#facc15', desc: 'Fragment of a fallen star buried under centuries of strata.' },

    // --- LAYER 5: Earth\'s Mantle (376m - 500m+) ---
    peridotite: { id: 'peridotite', name: 'Peridotite', rarity: 'c', hp: 15000, costPerKg: 80.00, color: '#65a30d', desc: 'Dense, olivine-rich rock that dominates the upper mantle.' },
    kimberlite_pipe: { id: 'kimberlite_pipe', name: 'Kimberlite Pipe', rarity: 'cr', hp: 28000, costPerKg: 180.00, color: '#3f6212', desc: 'Deep volcanic formation often housing rare raw gems.' },
    mantle_magma: { id: 'mantle_magma', name: 'Mantle Magma', rarity: 'r', hp: 50000, costPerKg: 450.00, color: '#dc2626', desc: 'Semi-molten mantle rock glowing with intense heat.' },
    infernal_core: { id: 'infernal_core', name: 'Infernal Core', rarity: 'mr', hp: 85000, costPerKg: 1200.00, color: '#b91c1c', desc: 'Compressed thermal core pulsating at sub-crust temperatures.' },
    solarium_crystal: { id: 'solarium_crystal', name: 'Solarium Crystal', rarity: 'sr', hp: 150000, costPerKg: 3500.00, color: '#f97316', desc: 'Crystalline heat sink radiating solar-like radiance underground.' },
    aether_cluster: { id: 'aether_cluster', name: 'Aether Cluster', rarity: 'ur', hp: 250000, costPerKg: 10000.00, color: '#f472b6', desc: 'Levitating crystalline cluster defying mantle pressure.' },
    singularity_ore: { id: 'singularity_ore', name: 'Singularity Ore', rarity: 'o-o', hp: 500000, costPerKg: 100000.00, color: '#09090b', desc: '1 in 150M anomaly. Distorts space and time around its center.' },

    // --- UTILITY / SPECIAL BLOCKS ---
    void_stone: { id: 'void_stone', name: 'Void Stone', rarity: 'l', hp: 100000, costPerKg: 15000.00, color: '#7e22ce', desc: 'Pulls at surrounding light.' },
    slate: { id: 'slate', name: 'Deep Slate', rarity: 'cr', hp: 500, costPerKg: 3.50, color: '#1e293b', desc: 'Hard dark stone.' },
    bedrock: { id: 'bedrock', name: 'Bedrock', rarity: 'c', hp: -1, costPerKg: 0, color: '#333333', desc: 'Impenetrable ancient rock. Unmineable.' }
};

export function getOreColor(oreKey) {
    return ORES[oreKey]?.color ?? '#94a3b8';
}

export function rollOreByDepth(y) {
    // Top Layer: Surface & Topsoil (0m - 50m)
    const pool1 = [
        'leaf_litter', 'dirt', 'coarse_dirt', 'pebbled_dirt',
        'boulder', 'anthill', 'gravel', 'lost_coin', 'pocketed_clover'
    ];
    
    // Mid Layer: Sedimentary & Soft Rock (51m - 150m)
    const pool2 = [
        'soft_rock', 'limestone', 'fossilized_shell', 'dense_flint',
        'geode_fragment', 'granite_core', 'petrified_amber'
    ];
    
    // Upper Crust: Stone & Cobbled Strata (151m - 250m)
    const pool3 = [
        'rough_stone', 'cobbled_stone', 'chert_nodule', 'pyrite_vein',
        'cobalt_vein', 'magma_crystal', 'void_shard'
    ];

    // Lower Crust: Metamorphic & High Pressure (251m - 375m)
    const pool4 = [
        'basalt_block', 'iron_ore', 'obsidian_slate', 'gabbro_chunk',
        'eclogite', 'adamantite_ore', 'celestial_core'
    ];

    // Earth's Mantle: Ultra Depth & Magmatic (376m - 500m+)
    const pool5 = [
        'peridotite', 'kimberlite_pipe', 'mantle_magma', 'infernal_core',
        'solarium_crystal', 'aether_cluster', 'singularity_ore'
    ];

    let selectedPool;

    // Transition Zone 1: 46m to 55m (Pool 1 -> Pool 2)
    if (y >= 46 && y <= 55) {
        const chanceUpper = (y - 45) / 11; 
        selectedPool = Math.random() < chanceUpper ? pool2 : pool1;
    }
    // Transition Zone 2: 146m to 155m (Pool 2 -> Pool 3)
    else if (y >= 146 && y <= 155) {
        const chanceUpper = (y - 145) / 11;
        selectedPool = Math.random() < chanceUpper ? pool3 : pool2;
    }
    // Transition Zone 3: 246m to 255m (Pool 3 -> Pool 4)
    else if (y >= 246 && y <= 255) {
        const chanceUpper = (y - 245) / 11;
        selectedPool = Math.random() < chanceUpper ? pool4 : pool3;
    }
    // Transition Zone 4: 371m to 380m (Pool 4 -> Pool 5)
    else if (y >= 371 && y <= 380) {
        const chanceUpper = (y - 370) / 11;
        selectedPool = Math.random() < chanceUpper ? pool5 : pool4;
    }
    // Standard Depth Zones
    else if (y <= 45) {
        selectedPool = pool1;
    } else if (y <= 145) {
        selectedPool = pool2;
    } else if (y <= 245) {
        selectedPool = pool3;
    } else if (y <= 370) {
        selectedPool = pool4;
    } else {
        selectedPool = pool5;
    }

    // Pick random ore from selected pool
    return selectedPool[Math.floor(Math.random() * selectedPool.length)];
}