export const SKILL_TREE_NODES = [
    { 
        id: 'root', 
        label: 'Mining Basics', 
        x: 50, y: 10, 
        req: [], 
        level: 1, 
        maxLevel: 1, 
        costPerLevel: [0],
        desc: 'Unlocks the skill tree.'
    },
    { 
        id: 'pow_branch', 
        label: 'Pickaxe Power', 
        x: 38, y: 17, 
        req: ['root'], 
        level: 0, 
        maxLevel: 3, 
        costPerLevel: [1, 2, 3], 
        bonusPerLevel: [1, 2, 4],
        desc: 'Increases mining power per hit.' 
    },
    { 
        id: 'luck_branch', 
        label: 'Miner\'s Luck', 
        x: 62, y: 17, 
        req: ['root'], 
        level: 0, 
        maxLevel: 3, 
        costPerLevel: [1, 2, 3], 
        bonusPerLevel: [1, 2, 3],
        desc: 'Increases chance of finding heavier ores.' 
    },
    { 
        id: 'nuke_skill', 
        label: 'Nuke Charges', 
        x: 26, y: 24, 
        req: ['pow_branch'], 
        level: 0, 
        maxLevel: 5, 
        costPerLevel: [2, 3, 4, 5, 6], 
        bonusPerLevel: [1, 1, 1, 1, 1],
        desc: 'Grants consumable nuke charges.' 
    },
    { 
        id: 'heavy_strike', 
        label: 'Heavy Strike', 
        x: 38, y: 31, 
        req: ['pow_branch'], 
        level: 0, 
        maxLevel: 2, 
        costPerLevel: [3, 5], 
        bonusPerLevel: [5, 10],
        desc: 'Massive surge in raw mining power.' 
    },
    { 
        id: 'vault_expansion', 
        label: 'Vault Pocket', 
        x: 62, y: 31, 
        req: ['luck_branch'], 
        level: 0, 
        maxLevel: 2, 
        costPerLevel: [2, 4], 
        bonusPerLevel: [10, 25],
        desc: 'Expands inventory capacity.' 
    },
    {
        id: 'straf',
        label: 'Space to Strafe',
        x: 50, y: 24,
        req: ['luck_branch'],
        level: 0,
        maxLevel: 1,
        costPerLevel: [4],
        bonusPerLevel: [1],
        desc: 'Press Space with a movement direction to dash through empty space until you hit another ore.'
    },
    { 
        id: 'tp_skill', 
        label: 'Teleport Charges', 
        x: 74, y: 24, 
        req: ['luck_branch'], 
        level: 0, 
        maxLevel: 5, 
        costPerLevel: [2, 3, 4, 5, 6], 
        bonusPerLevel: [1, 1, 1, 1, 1],
        desc: 'Grants consumable teleport charges.' 
    },
    {
        id: 'deep_dive',
        label: 'Deep Dive',
        x: 26, y: 38,
        req: ['pow_branch'],
        level: 0,
        maxLevel: 2,
        costPerLevel: [6, 10],
        bonusPerLevel: [0, 0],
        desc: 'Unlocks ability to mine deeper. Reaches y=500.'
    },
    {
        id: 'mastery', 
        label: 'Deep Ore Master', 
        x: 50, y: 38, 
        req: ['heavy_strike', 'vault_expansion'],
        level: 0, 
        maxLevel: 3, 
        costPerLevel: [5, 8, 12], 
        bonusPerLevel: [0.5, 1.0, 2.0],
        desc: 'Massively boosts XP gained from all mining.'
    },
    {
        id: 'crust_breach',
        label: 'Crust Breach',
        x: 74, y: 38,
        req: ['luck_branch'],
        level: 0,
        maxLevel: 2,
        costPerLevel: [8, 12],
        bonusPerLevel: [0, 0],
        desc: 'Breaks through to the deep crust. Reaches y=1000.'
    },
    {
        id: 'fortune',
        label: 'Fortune',
        x: 62, y: 45,
        req: ['luck_branch'],
        level: 0,
        maxLevel: 3,
        costPerLevel: [2, 4, 6],
        bonusPerLevel: [0.05, 0.1, 0.2],
        desc: 'Improves ore sale value from everything you bring back.'
    },
    {
        id: 'reinforced_tools',
        label: 'Reinforced Tools',
        x: 38, y: 45,
        req: ['deep_dive'],
        level: 0,
        maxLevel: 1,
        costPerLevel: [15],
        bonusPerLevel: [0],
        desc: 'Tools can break through bedrock with special items.'
    },
    {
        id: 'deep_fortune',
        label: 'Deep Fortune',
        x: 74, y: 52,
        req: ['crust_breach'],
        level: 0,
        maxLevel: 2,
        costPerLevel: [12, 16],
        bonusPerLevel: [0.15, 0.3],
        desc: 'Boosts deep ore value by up to 30%.'
    }
];

export function isNodeUnlocked(nodeId, unlockedNodesMap) {
    const node = SKILL_TREE_NODES.find(n => n.id === nodeId);
    if (!node) return false;
    if (node.req.length === 0) return true;

    return node.req.every(reqId => (unlockedNodesMap[reqId] || 0) > 0);
}