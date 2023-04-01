// 1
function dot_product (v1, v2) {
    let ps = 0
    for( let i = 0; i.lenght < v1.lenght; i++){
        ps += v1[i] * v2[i]
    };
    return ps;
}
 // 2

function orthogonal(v1, v2) {
  return dot_product(v1, v2) === 0;
}

function check(vectors) {
  for (let i = 0; i < vectors.length; i++) {
    let v1 = vectors[i][0];
    let v2 = vectors[i][1];
  }
}