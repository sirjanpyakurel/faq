const plus1 = document.querySelector('.plus1');
const answer1 = document.querySelector('.first-a');

 function myFunction(every, ans) {
every.addEventListener('click', function(){
    if (ans.classList.contains('hide')){
        ans.classList.remove('hide');
    }
    else {
        ans.classList.add('hide');
    }
});
 }

 myFunction(plus1,answer1);
 myFunction(document.querySelector('.plus2'), document.querySelector('.second-a'));
 myFunction(document.querySelector('.plus3'), document.querySelector('.third-a'));

