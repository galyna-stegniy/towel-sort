module.exports = function towelSort(matrix) {
    try {
        return matrix.reduce((accumulator, current, index) => {
            if (index % 2 !== 0) {
                return accumulator.concat(current.reverse());
            } else {
                return accumulator.concat(current);
            }
        }, []);
    } catch (err) {
        return [];
    }
};
