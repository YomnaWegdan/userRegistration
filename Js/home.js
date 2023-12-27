var user = document.getElementById('user');
var userSignOut = document.getElementById('signOut');

var sessiondataList = []
sessiondataList= JSON.parse(sessionStorage.getItem('sessiondata'));
console.log('session', sessiondataList);

var dataList = JSON.parse(localStorage.getItem('Data'));

for(var i =0 ; i< dataList.length ; i++){
    if( sessiondataList[0].email == dataList[i].email){
        var userName = dataList[i].userName;
        console.log(userName)
    }
}
user.innerHTML +=  userName;


// var user = document.createElement('div');
// var text = document.createTextNode(`Welcome  ${userName}`);
// user.appendChild(text)
// document.body.appendChild(user)

function signOut(){
    sessiondataList.pop();
    sessionStorage.setItem('sessiondata' , JSON.stringify(sessiondataList));
    window.location.href = './index.html'
}

userSignOut.addEventListener('click' , function(){
    signOut()
})

