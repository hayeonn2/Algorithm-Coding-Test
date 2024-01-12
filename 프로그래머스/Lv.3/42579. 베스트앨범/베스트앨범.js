function solution(genres, plays) {
  const map = new Map();

  for (let i = 0; i < plays.length; i++) {
    if (map.has(genres[i])) {
      map.set(genres[i], [...map.get(genres[i]), { idx: i, count: plays[i] }]);
    } else {
      map.set(genres[i], [{ idx: i, count: plays[i] }]);
    }
 
   
    const genresCount = map.get(genres[i]);

    genresCount.sort((a, b) => {
      if (a.count === b.count) {
        return a.idx - b.idx;
      } else {
        return b.count - a.count;
      }
    });
    map.set(genres[i], genresCount);
  }

  const genresSum = [];
  for (const genre of map.keys()) {
    const total = map.get(genre).reduce((acc, cur) => acc + cur.count, 0);

    genresSum.push({ genre: genre, total: total });
  }
  genresSum.sort((a, b) => b.total - a.total);
    console.log(map)
    console.log(genresSum)

  let result = [];

  for (const genre of genresSum) {
    const topSongs = map.get(genre.genre);
    const sliced = topSongs.slice(0, 2);

    if (sliced.length <= 1) {
        result = [...result, sliced[0].idx];
      
    } else {
      result = [...result, sliced[0].idx, sliced[1].idx];
    }
  }
   

  return result;
}
