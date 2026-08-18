// skills.js

export const SKILL_TREE_NODES = [
    // Root Node
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

    // First Split: Branching into Power vs. Luck
    { 
        id: 'pow_branch', 
        label: 'Pickaxe Power', 
        x: 30, y: 30, 
        req: ['root'], 
        level: 0, 
        maxLevel: 3, 
        costPerLevel: [1, 2, 3], 
        bonusPerLevel: [1, 2, 4], // +1, +2, +4 Power
        desc: 'Increases mining power per hit.' 
    },
    { 
        id: 'luck_branch', 
        label: 'Miner\'s Luck', 
        x: 70, y: 30, 
        req: ['root'], 
        level: 0, 
        maxLevel: 3, 
        costPerLevel: [1, 2, 3], 
        bonusPerLevel: [1, 2, 3], // +1, +2, +3 Luck
        desc: 'Increases chance of finding heavier ores.' 
    },

    // Deep Power Splitting Nodes
    { 
        id: 'nuke_skill', 
        label: 'Nuke Charges', 
        x: 15, y: 55, 
        req: ['pow_branch'], 
        level: 0, 
        maxLevel: 5, 
        costPerLevel: [2, 3, 4, 5, 6], 
        bonusPerLevel: [1, 1, 1, 1, 1], // Gives 1 Nuke charge per level
        desc: 'Grants consumable nuke charges.' 
    },
    { 
        id: 'heavy_strike', 
        label: 'Heavy Strike', 
        x: 40, y: 55, 
        req: ['pow_branch'], 
        level: 0, 
        maxLevel: 2, 
        costPerLevel: [3, 5], 
        bonusPerLevel: [5, 10], // Big power boost
        desc: 'Massive surge in raw mining power.' 
    },

    // Deep Luck Splitting Nodes
    { 
        id: 'vault_expansion', 
        label: 'Vault Pocket', 
        x: 60, y: 55, 
        req: ['luck_branch'], 
        level: 0, 
        maxLevel: 2, 
        costPerLevel: [2, 4], 
        bonusPerLevel: [10, 25], // Capacity boost
        desc: 'Expands inventory capacity.' 
    },
    { 
        id: 'tp_skill', 
        label: 'Teleport Charges', 
        x: 85, y: 55, 
        req: ['luck_branch'], 
        level: 0, 
        maxLevel: 5, 
        costPerLevel: [2, 3, 4, 5, 6], 
        bonusPerLevel: [1, 1, 1, 1, 1], // Gives 1 Teleport charge per level
        desc: 'Grants consumable teleport charges.' 
    },
    
    { 
        id: 'mastery', 
        label: 'Deep Ore Master', 
        x: 50, y: 80, 
        req: ['heavy_strike', 'vault_expansion'], // Requires BOTH branches
        level: 0, 
        maxLevel: 3, 
        costPerLevel: [5, 8, 12], 
        bonusPerLevel: [0.5, 1.0, 2.0], // XP Multiplier bonus (+50%, +100%, +200%)
        desc: 'Massively boosts XP gained from all mining.' 
    }
];


export function isNodeUnlocked(nodeId, unlockedNodesMap) {
    const node = SKILL_TREE_NODES.find(n => n.id === nodeId);
    if (!node) return false;
    if (node.req.length === 0) return true;

    // Node is available if ALL required parent nodes have at least Level 1
    return node.req.every(reqId => (unlockedNodesMap[reqId] || 0) > 0);
}