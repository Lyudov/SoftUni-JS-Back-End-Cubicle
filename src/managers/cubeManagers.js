const uniqid = require('uniqid');
const cubes = [{
    id: "1k59tcysli7s5wjq",
    name: "Miror",
    description: "Cool colored cube",
    imageUrl: "https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cq_auto:eco%2Cw_1200/MTk3MDg5MjU5NDA3MDI1MjM1/rubik-cube-algorithms.png",
    difficultyLevel: 1,
},
{
    id: "1k59tcysli7s6wjq",
    name: "Largo",
    description: "One side cube",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJYTXkNPOtfg7wi8rEAFV4n9I3HNAEgJPYtRftIM_nibfut_99569FAJies9qWhQXWgxo&usqp=CAU",
    difficultyLevel: 6,
}];

exports.getAll = (search, from, to) => {
    let result = cubes.slice();

if(search) {
result = result.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()));
}

if(from) {
result = result.filter(cube => cube.difficultyLevel >= Number(from));
}

if(to) {
result = result.filter(cube => cube.difficultyLevel <= Number(to));
}

return result;
}
exports.getOne = (cubeId) => cubes.find(x => x.id == cubeId);

exports.create = (cubeData) => {
    const newCube = {
        id: uniqid(),
        ...cubeData,
    };
    cubes.push(newCube);
    return newCube;
};