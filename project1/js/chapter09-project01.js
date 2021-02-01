
/* add code here  */
window.addEventListener('load', function(){
var hilightableInputs = document.querySelectorAll(".hilightable");
for ( i=0 ; i<hilightableInputs.length ; i++) {
    var toggle = (event) => { event.target.classList.toggle('highlight')}
    hilightableInputs[i].addEventListener('focus', toggle)
    hilightableInputs[i].addEventListener('blur', toggle)
}

var form = document.getElementById("mainForm");
form.addEventListener("submit", submissionCheck);
function submissionCheck(event)
{
    var requiredInputs = document.querySelectorAll(".required");
    for (i=0; i<requiredInputs.length;i++)
    {
        if (requiredInputs[i].value=="")
        {
            event.preventDefault();
            requiredInputs[i].classList.add("error");
        }
        
    }
}
})
