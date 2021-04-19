const checkBoxes = document.querySelectorAll('.toggle');
const good = document.querySelector('#good');
const cheap = document.querySelector('#cheap');
const fast = document.querySelector('#fast');

checkBoxes.forEach(check => {
    check.addEventListener('change', (e) => {
        // console.log(e.target)
        doTheTrick(e.target)
    })
})

function doTheTrick(clickedOne) {
    // console.log(clickedOne)
    // if all are checked, do something ...
    if (good.checked && cheap.checked && fast.checked) {
        if (good === clickedOne) {
            fast.checked = false
        }

        if (cheap === clickedOne) {
            good.checked = false
        }

        if (fast === clickedOne) {
            cheap.checked = false
        }
    }
}