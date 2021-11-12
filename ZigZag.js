//Daily Coding Problem # 840

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
    const spaces = (((k - 1) * 2) - 1);

    for(let i = 0; i < k; i++) {
        for(let b = 0; b < i; b++) {
            zigg.push(' '); // this moves each line forward to make it a zig zag
        }
        
        for(let j = 0, c = 0; j < word.length; c++) { // c tells which letter we are in the kth line
            if(wordd[j + i]) {
                zigg.push(wordd[j + i])
                // wordd.splice(j, 1);
            }
            //push a space space number of times depending on c

            if(i == 0 || i == k - 1) { //push number of spaces for first row or last row
                for(let a = 0; a < spaces; a++){
                    zigg.push(' ');
                    j += 1;
                }
            }
            else {

                //put the letter than the first set of spaces  --- first space set is spaces - 2i )
                //two space sets

                let newSpaces = spaces - (2 * i);
                let newSpaces1 =  i + i - 1;
                //push new spaces
                for(let h = 0; h < newSpaces; h++) {
                    
                    zigg.push(' ');
                    j += 1;
                }
                zigg.push(wordd[j + spaces - newSpaces - (i - 1 ) ]);
                
                // next letter with different number of spaces
                //push new spaces
                for(let h = 0; h < newSpaces1; h++) {
                    zigg.push(' ');
                    j += 1;
                } 
                j += 1;                
            }
            j += 1;
        }
        zigg.push('\n');
        
    }
    console.log(zigg.join(''));
}

zigZag("thisisazigzag", 7);