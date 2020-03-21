/*


    terdapat sebuah function hitungSaya yan memilikin inputan paramater dimana setiap nama di hitung jumlah karakter dan di sorting sesuai karakter a - z

*/



function hitungSaya(nama) {
    var abjad = 'abcdefghijklmnopqrstuvwxyz'
    var obj = {};
    var arr = [];
    //sorting
    for (var i = 0; i < nama.length; i++) {
        for (var j = 0; j < nama[i].length; j++) {
            arr.push(nama[i][j]);
        }
    }
    // console.log(arr);
    for (var a = 0; a < arr.length; a++) {
        if (arr[a] > arr[a+1]) {
            var temp = arr[a];
            arr[a] = arr[a+1];
            arr[a+1] = temp;
        }
    }
    // console.log(arr);
    //counter
    for (var k = 0; k < abjad.length; k++) {
        var counter = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === abjad[k]) {
                counter++;
                obj[arr[i]] = counter;
            }
        }
    }
    return obj;
}
console.log(hitungSaya(['fadhil', 'ismail', 'budi', 'untung']));

/*
{ a: 2,
  b: 1,
  d: 2,
  f: 1,
  g: 1,
  h: 1,
  i: 4,
  l: 2,
  m: 1,
  n: 2,
  s: 1,
  t: 1,
  u: 3 }
*/

console.log(hitungSaya(['andrean', 'khairil', 'rizqa', 'venita','tubagus','fadhlan']));
/*
{ a: 8,
  b: 1,
  d: 2,
  e: 2,
  f: 1,
  g: 1,
  h: 2,
  i: 4,
  k: 1,
  l: 2,
  n: 4,
  q: 1,
  r: 3,
  s: 1,
  t: 2,
  u: 2,
  v: 1,
  z: 1 }
*/