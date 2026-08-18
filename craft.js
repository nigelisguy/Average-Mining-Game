export const SKILL_CRAFTS = {
    museum: {
        name: 'Museum Display Stand',
        cost: {
            coins: 50,
            granite_core: 12,
            geode_fragment: 4
        },
        result: { type: 'flag', key: 'hasMuseum' },
        description: 'Unlocks Museum side-mode to earn passive hype income.',
        limit: 1
    },

    dynamite: {
        name: 'Dynamite Stick',
        cost: {
            coins: 20,
            dirt: 20,
            basalt_block: 8
        },
        result: { type: 'stock', key: 'dynamite', amount: 1 },
        description: 'Blasts a 3-block horizontal line directly ahead.'
    },

    mega_dynamite: {
        name: 'Mega Dynamite',
        cost: {
            coins: 60,
            iron_ore: 18,
            basalt_block: 14,
            deep_quartz: 6
        },
        result: { type: 'stock', key: 'mega_dynamite', amount: 1 },
        description: 'Blasts a 5-block horizontal line directly ahead.'
    },

    tp: {
        name: 'Teleport Spell',
        cost: {
            coins: 35,
            soft_rock: 28,
            limestone: 18
        },
        result: { type: 'skill', key: 'tp', amount: 1 },
        description: 'Teleports player 50m down instantly.'
    },

    deep_tp: {
        name: 'Deep Teleport',
        cost: {
            coins: 120,
            deep_quartz: 10,
            cobalt_vein: 4,
            void_shard: 1
        },
        result: { type: 'stock', key: 'deep_tp', amount: 1 },
        description: 'Teleports player 250m deeper.'
    },

    elevator: {
        name: 'Emergency Recall',
        cost: {
            coins: 40,
            gravel: 16,
            iron_ore: 10
        },
        result: { type: 'stock', key: 'elevator', amount: 1 },
        description: 'Instantly teleports back to the surface.'
    },

    nuke: {
        name: 'Atomic Bomb',
        cost: {
            coins: 100,
            iron_ore: 18,
            magma_crystal: 2,
            obsidian_slate: 12
        },
        result: { type: 'skill', key: 'nuke', amount: 1 },
        description: 'Destroys a 3x3 block area instantly.'
    },

    mega_nuke: {
        name: 'Mega Bomb',
        cost: {
            coins: 250,
            obsidian_slate: 22,
            void_shard: 2,
            magma_crystal: 4
        },
        result: { type: 'stock', key: 'mega_nuke', amount: 1 },
        description: 'Destroys a 5x5 block area instantly.'
    },

    beacon: {
        name: 'Sonar Beacon',
        cost: {
            coins: 80,
            geode_fragment: 12,
            deep_quartz: 8
        },
        result: { type: 'stock', key: 'beacon', amount: 1 },
        description: 'Reveals hidden blocks in a 15x15 radius.'
    },

    void_charge: {
        name: 'Void Drill',
        cost: {
            coins: 180,
            obsidian_slate: 20,
            void_shard: 2,
            deep_quartz: 15
        },
        result: { type: 'stock', key: 'void_charge', amount: 1 },
        description: 'Drills a vertical 1x10 shaft straight down.'
    },

    mining_frenzy: {
        name: 'Mining Frenzy',
        cost: {
            coins: 150,
            cobalt_vein: 8,
            magma_crystal: 2,
            geode_fragment: 10
        },
        result: { type: 'stock', key: 'mining_frenzy', amount: 1 },
        description: 'Temporarily increases mining speed.'
    },

    lucky_charm: {
        name: 'Lucky Charm',
        cost: {
            coins: 140,
            lost_coin: 10,
            pocketed_clover: 6,
            geode_fragment: 5
        },
        result: { type: 'stock', key: 'lucky_charm', amount: 1 },
        description: 'Temporarily increases rare ore chance.'
    },

    void_bomb: {
        name: 'Void Bomb',
        cost: {
            coins: 300,
            void_shard: 7,
            magma_crystal: 4,
            obsidian_slate: 26
        },
        result: { type: 'stock', key: 'void_bomb', amount: 1 },
        description: 'Destroys a large area and improves rare ore discovery.'
    },

    ore_compass: {
        name: 'Ore Compass',
        cost: {
            coins: 90,
            iron_ore: 20,
            deep_quartz: 7,
            lost_coin: 4
        },
        result: { type: 'stock', key: 'ore_compass', amount: 1 },
        description: 'Points toward deeper ore pockets and helps with scouting.'
    },

    repair_kit: {
        name: 'Repair Kit',
        cost: {
            coins: 30,
            boulder: 10,
            soft_rock: 18,
            iron_ore: 8
        },
        result: { type: 'stock', key: 'repair_kit', amount: 1 },
        description: 'A maintenance pack for rough underground conditions.'
    },

    treasure_map: {
        name: 'Treasure Map',
        cost: {
            coins: 75,
            lost_coin: 8,
            geode_fragment: 4,
            granite_core: 5
        },
        result: { type: 'stock', key: 'treasure_map', amount: 1 },
        description: 'A rough map hinting at profitable pockets below.'
    },

    stability_anchor: {
        name: 'Stability Anchor',
        cost: {
            coins: 160,
            basalt_block: 20,
            obsidian_slate: 12,
            void_shard: 2
        },
        result: { type: 'stock', key: 'stability_anchor', amount: 1 },
        description: 'Keeps deep mining tunnels stable and grounded.'
    },

    gem_focus: {
        name: 'Gem Focus Lens',
        cost: {
            gem: 2,
            deep_quartz: 16,
            geode_fragment: 6
        },
        result: { type: 'stock', key: 'gem_focus', amount: 1 },
        description: 'Improves ore visibility and boosts shiny ore spotting.'
    },

    gem_cutter: {
        name: 'Gem Cutter',
        cost: {
            gem: 4,
            cobalt_vein: 12,
            deep_quartz: 18
        },
        result: { type: 'stock', key: 'gem_cutter', amount: 1 },
        description: 'Cuts cleaner seams and increases high-value ore yield.'
    },

    auto_mine: {
        name: 'Auto Mine Core',
        cost: {
            coins: 250,
            deep_quartz: 20,
            cobalt_vein: 8,
            geode_fragment: 10
        },
        result: { type: 'flag', key: 'autoMine' },
        description: 'Keeps mining the current chunk in the background, even if you are on another tab.',
        limit: 1
    },

    auto_tools: {
        name: 'Tool Link Module',
        cost: {
            coins: 180,
            iron_ore: 24,
            magma_crystal: 2,
            void_shard: 2
        },
        result: { type: 'flag', key: 'autoTools' },
        description: 'Lets automation use special mining tools and ability items while Auto Mine is running.',
        limit: 1
    },

    auto_aim: {
        name: 'Auto Aim Scanner',
        cost: {
            coins: 220,
            geode_fragment: 18,
            granite_core: 8,
            deep_quartz: 14
        },
        result: { type: 'flag', key: 'autoAim' },
        description: 'Pulls Ultra Rare and higher blocks in a 10x10 air-connected area.',
        limit: 1
    },

    quest_detector: {
        name: 'Quest Detector',
        cost: {
            coins: 40,
            lost_coin: 5,
            iron_ore: 8
        },
        result: { type: 'stock', key: 'quest_detector', amount: 1 },
        description: 'Points toward the nearest quest giver (1-1000 blocks away).'
    }
};


export const SKILL_TREE_NODES = [
    // =========================
    // Tier 0
    // =========================

    {
        id: 'root',
        x: 50,
        y: 90,
        label: 'Start',
        req: [],
        cost: 0,
        maxLvl: 1,
        desc: 'Starting Node'
    },


    // =========================
    // Tier 1
    // =========================

    {
        id: 'pow1',
        x: 25,
        y: 75,
        label: '+Power',
        req: ['root'],
        cost: 1,
        maxLvl: 5,
        desc: '+2 Mining Power per level'
    },

    {
        id: 'cap1',
        x: 40,
        y: 75,
        label: 'Backpack',
        req: ['root'],
        cost: 1,
        maxLvl: 5,
        desc: '+10 Backpack Capacity per level'
    },

    {
        id: 'luck1',
        x: 55,
        y: 75,
        label: '+Luck',
        req: ['root'],
        cost: 1,
        maxLvl: 5,
        desc: '+2 Mining Luck per level'
    },

    {
        id: 'xp1',
        x: 70,
        y: 75,
        label: '+XP',
        req: ['root'],
        cost: 1,
        maxLvl: 5,
        desc: '+15% XP Gain per level'
    },


    // =========================
    // Tier 2
    // =========================

    {
        id: 'heavy_strike',
        x: 15,
        y: 55,
        label: 'Heavy Strike',
        req: ['pow1'],
        cost: 2,
        maxLvl: 3,
        desc: '10% chance to deal double pickaxe damage per level.'
    },

    {
        id: 'nuke_boost',
        x: 28,
        y: 55,
        label: 'Bomb Tech',
        req: ['pow1', 'cap1'],
        cost: 2,
        maxLvl: 3,
        desc: 'Increases Bomb & Explosive blast radius.'
    },

    {
        id: 'deep_pockets',
        x: 42,
        y: 55,
        label: 'Deep Pockets',
        req: ['cap1', 'luck1'],
        cost: 2,
        maxLvl: 4,
        desc: '+20% $ sell value when backpack is full per level.'
    },

    {
        id: 'gold1',
        x: 57,
        y: 55,
        label: 'Greed',
        req: ['luck1'],
        cost: 2,
        maxLvl: 5,
        desc: '+10% extra $ from ore sales per level.'
    },

    {
        id: 'wisdom',
        x: 72,
        y: 55,
        label: 'Wisdom',
        req: ['xp1'],
        cost: 2,
        maxLvl: 3,
        desc: 'Gain additional Skill Points from leveling.'
    },

    {
        id: 'speed1',
        x: 87,
        y: 55,
        label: 'Haste',
        req: ['xp1'],
        cost: 2,
        maxLvl: 5,
        desc: '+5% mining speed per level.'
    },


    // =========================
    // Tier 3
    // =========================

    {
        id: 'explosive_saver',
        x: 20,
        y: 35,
        label: 'Demolition',
        req: ['nuke_boost'],
        cost: 3,
        maxLvl: 2,
        desc: '20% chance to refund explosive craft costs per level.'
    },

    {
        id: 'double_drop',
        x: 35,
        y: 35,
        label: 'Efficiency',
        req: ['nuke_boost', 'deep_pockets'],
        cost: 3,
        maxLvl: 3,
        desc: '12% chance to double mined ore yields per level.'
    },

    {
        id: 'deep_luck',
        x: 50,
        y: 35,
        label: 'Vein Master',
        req: ['deep_pockets', 'gold1'],
        cost: 3,
        maxLvl: 3,
        desc: 'Boosts rare ore spawn rate.'
    },

    {
        id: 'xp_overclock',
        x: 65,
        y: 35,
        label: 'Overclock',
        req: ['wisdom'],
        cost: 3,
        maxLvl: 3,
        desc: '+30% XP from deep ores per level.'
    },

    {
        id: 'speed_master',
        x: 80,
        y: 35,
        label: 'Blitz Miner',
        req: ['speed1', 'pow1'],
        cost: 3,
        maxLvl: 3,
        desc: 'Chance to perform an additional mining hit.'
    },


    // =========================
    // Tier 4
    // =========================

    {
        id: 'ore_sense',
        x: 25,
        y: 18,
        label: 'Ore Sense',
        req: ['deep_luck'],
        cost: 4,
        maxLvl: 3,
        desc: 'Reveals nearby valuable ores.'
    },

    {
        id: 'god_dig',
        x: 40,
        y: 18,
        label: 'God Dig',
        req: ['explosive_saver', 'double_drop'],
        cost: 5,
        maxLvl: 1,
        desc: '+10 Base Mining Power & +25% Mining Speed.'
    },

    {
        id: 'abyssal_vision',
        x: 60,
        y: 18,
        label: 'Abyssal Sight',
        req: ['double_drop', 'deep_luck'],
        cost: 5,
        maxLvl: 1,
        desc: 'Passively reveals nearby ores within 6 tiles.'
    },

    {
        id: 'fortune',
        x: 75,
        y: 18,
        label: 'Fortune',
        req: ['gold1', 'xp_overclock'],
        cost: 4,
        maxLvl: 3,
        desc: 'Increases rare ore yield.'
    },


    // =========================
    // Tier 5
    // =========================

    {
        id: 'abyssal_miner',
        x: 35,
        y: 8,
        label: 'Abyssal Miner',
        req: ['god_dig', 'ore_sense'],
        cost: 7,
        maxLvl: 1,
        desc: 'Massively improves mining below 500m.'
    },

    {
        id: 'void_master',
        x: 65,
        y: 8,
        label: 'Void Master',
        req: ['abyssal_vision', 'fortune'],
        cost: 7,
        maxLvl: 1,
        desc: 'Greatly increases Void and Mythic ore discovery.'
    },


    // =========================
    // Ultimate
    // =========================

    {
        id: 'mastery',
        x: 50,
        y: 2,
        label: 'Titan Core',
        req: ['abyssal_miner', 'void_master'],
        cost: 10,
        maxLvl: 1,
        desc: 'Triples all stats and unlocks infinite block reach.'
    }
];
