// 
const set = new Set();

[1, 2, 2, 3, 3, 4, 4, 5].forEach(x => set.add(x));

for (let i of set) {
    console.log(i);
}

set.add(6).add(7).add(8);

set;
