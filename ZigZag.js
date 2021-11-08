// Given a string and a number of lines k, 
// print the string in zigzag form. In zigzag, 
// characters are printed out diagonally from top 
// left to bottom right until reaching the kth line, 
// then back up to top right, and so on.

// thisisazigzag

// t     a     g
//  h   s z   a
//   i i   i z
//    s     g

const zigZag = (word, k) => {
    let wordd = word.split('');
    const zigg = [];
    // const rowSize = 
    for(let i = 0; i < k; i++) {
        // const spaces = (k + 1) - (2 * i);
        const spaces = (((k - 1) * 2) - 1) - (i * 2);

        for(let b = 0; b < i; b++) {
            zigg.push(' '); // this moves each line forward to make it a zig zag
        }
        for(let j = 0; j < word.length; j++) {
            if(wordd[j]) {
                zigg.push(wordd[j])
                wordd.splice(j, 1);
                j -= 1;
            }
            // wordd.splice(j, 1);
            //push a space space number of times
            for(let a = 0; a < spaces; a++){
                zigg.push(' ');
                j += 1;
            }
        }
        zigg.push('\n');
        
    }
    console.log(zigg);
    console.log(zigg.join(''));
}

zigZag("thisisazigzag", 4);