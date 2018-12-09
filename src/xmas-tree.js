module.exports = {
    tree(levels, branch = '*') {
        let xMasTree = '';
        for (let i = 1; i <= levels; i++) {
            xMasTree += branch.repeat(i);

            if (levels > 1 && i < levels) {
                xMasTree += '\n';
            }
        }
        console.log(xMasTree);
        return xMasTree;
    }
};
