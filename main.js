function LogIn(){
    player1 = document.getElementById("player1_name_input").value;
    player2 = document.getElementById("player2_name_input").value;

    localStorage.setItem("p1" , player1);
    localStorage.setItem("p2", player2);

    window.location = "game_page.html";
    
}
