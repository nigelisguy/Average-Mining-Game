// ores.js

export const RARITIES = {
    c: {
        name: 'Common',
        color: '#808080',
        valMult: 1,
        splitVault: false
    },
    cr: {
        name: 'Common Rare',
        color: '#505050',
        valMult: 1.2,
        splitVault: false
    },
    r: {
        name: 'Rare',
        color: '#2EA043',
        valMult: 1.5,
        splitVault: false
    },
    mr: {
        name: 'More Rare',
        color: '#00FF66',
        valMult: 2,
        splitVault: false
    },
    sr: {
        name: 'Super Rare',
        color: '#00FFFF',
        valMult: 3,
        splitVault: false
    },
    ur: {
        name: 'Ultra Rare',
        color: '#0066FF',
        valMult: 5,
        splitVault: true
    },
    m: {
        name: 'Mythic',
        color: '#FF0000',
        valMult: 10,
        splitVault: true
    },
    l: {
        name: 'Legendary',
        color: '#FFD700',
        valMult: 25,
        splitVault: true
    },
    hl: {
        name: 'Hyper Legendary',
        color: '#FF69B4',
        valMult: 100,
        splitVault: true
    },
    'o-o': {
        name: '1 in 150M',
        color: '#000000',
        valMult: 1000,
        splitVault: true
    }
};

export const ORES = {
    dirt: { id: 'dirt', name: 'Dirt', rarity: 'c', hp: 5, costPerKg: 0.1, color: '#5c4033', desc: 'Basic soil.' },
    coarse_dirt: { id: 'coarse_dirt', name: 'Coarse Dirt', rarity: 'c', hp: 8, costPerKg: 0.2, color: '#4a3525', desc: 'Rough ground.' },
    soft_rock: { id: 'soft_rock', name: 'Soft Rock', rarity: 'c', hp: 15, costPerKg: 0.5, color: '#78716c', desc: 'Crumbled stone.' },
    basalt_block: { id: 'basalt_block', name: 'Basalt', rarity: 'cr', hp: 25, costPerKg: 1.0, color: '#334155', desc: 'Dense volcanic rock.' },
    slate: { id: 'slate', name: 'Deep Slate', rarity: 'cr', hp: 40, costPerKg: 1.5, color: '#1e293b', desc: 'Hard dark stone.' },

    leaf_litter: { id: 'leaf_litter', name: 'Leaf Litter', rarity: 'c', hp: 3, costPerKg: 0.1, color: '#4d7c0f', desc: 'Fallen leaves.' },
    pebbled_dirt: { id: 'pebbled_dirt', name: 'Pebbled Dirt', rarity: 'c', hp: 10, costPerKg: 0.3, color: '#65a30d', desc: 'Dirt filled with tiny pebbles.' },
    boulder: { id: 'boulder', name: 'Small Boulder', rarity: 'cr', hp: 20, costPerKg: 0.8, color: '#525252', desc: 'Hard compact rock.' },
    gravel: { id: 'gravel', name: 'Gravel', rarity: 'cr', hp: 12, costPerKg: 0.5, color: '#737373', desc: 'Loose stones.' },
    lost_coin: { id: 'lost_coin', name: 'Lost Coin', rarity: 'r', hp: 5, costPerKg: 5.0, color: '#eab308', desc: 'Dropped long ago.' },
    
    coal: { id: 'coal', name: 'Coal Ore', rarity: 'r', hp: 20, costPerKg: 3.0, color: '#171717', desc: 'Standard fuel.' },
    iron_ore: { id: 'iron_ore', name: 'Iron Ore', rarity: 'mr', hp: 35, costPerKg: 8.0, color: '#b45309', desc: 'Sturdy metal ore.' },
    gold_ore: { id: 'gold_ore', name: 'Gold Ore', rarity: 'sr', hp: 50, costPerKg: 25.0, color: '#eab308', desc: 'Shiny precious metal.' },
    deep_quartz: { id: 'deep_quartz', name: 'Deep Quartz', rarity: 'sr', hp: 60, costPerKg: 35.0, color: '#f8fafc', desc: 'Crystalline rock.' },
    cobalt_vein: { id: 'cobalt_vein', name: 'Cobalt Vein', rarity: 'ur', hp: 100, costPerKg: 80.0, color: '#0284c7', desc: 'Rare blue mineral.' },
    magma_crystal: { id: 'magma_crystal', name: 'Magma Crystal', rarity: 'm', hp: 200, costPerKg: 250.0, color: '#ef4444', desc: 'Glowing with heat.' },
    void_stone: { id: 'void_stone', name: 'Void Stone', rarity: 'l', hp: 500, costPerKg: 1000.0, color: '#7e22ce', desc: 'Pulls at surrounding light.' },
    singularity_ore: { id: 'singularity_ore', name: 'Singularity Ore', rarity: 'o-o', hp: 2000, costPerKg: 100000.0, color: '#09090b', desc: '1 in 150M anomaly.' }
};

export function getOreColor(oreKey) {
    return ORES[oreKey]?.color ?? '#94a3b8';
}

export function rollOreByDepth(y) {
    // Define base depth pools
    const pool1 = [ // Top Layer (0-50m)
        'leaf_litter', 'dirt', 'coarse_dirt', 'pebbled_dirt',
        'boulder', 'anthill', 'gravel', 'lost_coin', 'pocketed_clover'
    ];
    
    const pool2 = [ // Mid Layer (51-150m)
        'soft_rock', 'limestone', 'fossilized_shell', 'dense_flint',
        'geode_fragment', 'granite_core', 'petrified_amber'
    ];
    
    const pool3 = [ // Deep Layer (151m+)
        'basalt_block', 'iron_ore', 'obsidian_slate', 'deep_quartz',
        'cobalt_vein', 'magma_crystal', 'void_shard', 'celestial_core'
    ];

    let selectedPool;

    // Transition Zone 1: Layers 46 to 55 (Blending Layer 1 & Layer 2)
    if (y >= 46 && y <= 55) {
        // Linear probability shift from pool1 (100% at y=45) to pool2 (100% at y=56)
        const chanceUpper = (y - 45) / 11; 
        selectedPool = Math.random() < chanceUpper ? pool2 : pool1;
    }
    // Transition Zone 2: Layers 146 to 155 (Blending Layer 2 & Layer 3)
    else if (y >= 146 && y <= 155) {
        const chanceUpper = (y - 145) / 11;
        selectedPool = Math.random() < chanceUpper ? pool3 : pool2;
    }
    // Standard Depth Zones
    else if (y <= 45) {
        selectedPool = pool1;
    } else if (y <= 145) {
        selectedPool = pool2;
    } else {
        selectedPool = pool3;
    }

    // Pick random ore from selected pool
    return selectedPool[Math.floor(Math.random() * selectedPool.length)];
}