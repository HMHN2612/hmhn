document.addEventListener("DOMContentLoaded",
function() {

    //1.localStorageが使えるか確認
    if (typeof localStorage==="undefined") {
        window.alert("このブラウザはlocal Storage機能が実装されていません");
        return;
    } else{
        saveLocalStorage();
    }
},false
);
//2.localStrorageへの保存
function saveLocalStorage(){
    const save = document.getElementById("save");
    save.addEventListener("click",
    function(e) {
        //
        e.preventDefault();
            const key = document.getElementById("textKey").value;
            const value = document.getElementById("textMemo").value;
        
            //値の入力チェック
            if (key==""|| value==""){
                window.alert("Key、Memoは必須です。");
                return;
            }else{
                localStorage.setItem(key, value);
                let w_msg = "localStorageに「" + key + " : " + value + "」を保存しました。";
                window.alert(w_msg);
                document.getElementById("textKey").value = "";
                document.hetElementById("textMemo").value = "";

            }     
    }, false
  );
}

