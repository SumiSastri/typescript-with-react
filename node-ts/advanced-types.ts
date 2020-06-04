// TO DO organise this file

interface RectangleOptions{
    width: number;
    length: number;
    height?: number;
}

function drawRectangle(options: RectangleOptions){
    let width = options.width
    let length = options.length
    // optional params 
    if (options.height){
        let height = options.height
    }
    // function logic
}
drawRectangle ({
    width: 100,
    length: 200,
    height: 15
    
})

// Rest operator
function getNumbers(...nums: number[]){
    nums.forEach(element => {
        console.log('Number:' + element)
    })
}
getNumbers(1,2,3,4)

// Spread operator