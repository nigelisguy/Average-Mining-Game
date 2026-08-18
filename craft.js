// skills.js

export const SKILL_CRAFTS = {
    dynamite: {
        name: 'Dynamite Stick',
        cost: {
            dirt: 15,
            coal: 3
        },
        description: 'Blasts a 3-block horizontal line directly ahead.'
    },

    mega_dynamite: {
        name: 'Mega Dynamite',
        cost: {
            coal: 10,
            iron_ore: 5,
            redstone: 2
        },
        description: 'Blasts a 5-block horizontal line directly ahead.'
    },

    tp: {
        name: 'Teleport Spell',
        cost: {
            stone: 10,
            coal: 5
        },
        description: 'Teleports player 50m down instantly.'
    },

    deep_tp: {
        name: 'Deep Teleport',
        cost: {
            gold_ore: 5,
            lapis: 3,
            void_shard: 1
        },
        description: 'Teleports player 250m deeper.'
    },

    elevator: {
        name: 'Emergency Recall',
        cost: {
            copper: 8,
            iron_ore: 4
        },
        description: 'Instantly teleports back to the surface.'
    },

    nuke: {
        name: 'Atomic Bomb',
        cost: {
            iron_ore: 5,
            gold_ore: 2
        },
        description: 'Destroys a 3x3 block area instantly.'
    },

    mega_nuke: {
        name: 'Mega Bomb',
        cost: {
            iron_ore: 20,
            gold_ore: 10
        },
        description: 'Destroys a 5x5 block area instantly.'
    },

    beacon: {
        name: 'Sonar Beacon',
        cost: {
            gold_ore: 3,
            lapis: 5
        },
        description: 'Reveals hidden blocks in a 15x15 radius.'
    },

    void_charge: {
        name: 'Void Drill',
        cost: {
            obsidian_slate: 3,
            deep_quartz: 2,
            void_shard: 1
        },
        description: 'Drills a vertical 1x10 shaft straight down.'
    },

    mining_frenzy: {
        name: 'Mining Frenzy',
        cost: {
            coal: 10,
            cobalt_vein: 2,
            magma_crystal: 1
        },
        description: 'Temporarily increases mining speed.'
    },

    lucky_charm: {
        name: 'Lucky Charm',
        cost: {
            lost_coin: 5,
            pocketed_clover: 1,
            geode_fragment: 2
        },
        description: 'Temporarily increases rare ore chance.'
    },

    void_bomb: {
        name: 'Void Bomb',
        cost: {
            void_shard: 5,
            magma_crystal: 2,
            obsidian_slate: 10
        },
        description: 'Destroys a large area and improves rare ore discovery.'
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
        desc: '+20% coin sell value when backpack is full per level.'
    },

    {
        id: 'gold1',
        x: 57,
        y: 55,
        label: 'Greed',
        req: ['luck1'],
        cost: 2,
        maxLvl: 5,
        desc: '+10% extra coins from ore sales per level.'
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