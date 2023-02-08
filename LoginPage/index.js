document.querySelector("#lgbtn").addEventListener("click", loginClicked);

function loginClicked(){
    
    var usr = document.querySelector(".username").value;
    var pwd = document.querySelector(".password").value;

    if(usr == "" || pwd == "")
    {
        alert("Please type username/password properly");
    }
    else
    {
        document.querySelector(".username").value = "";
        document.querySelector(".password").value = "";
        alert("Welcome! You are logged in...");
    }
}