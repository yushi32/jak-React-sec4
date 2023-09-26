import "./styles.css";

const onClickAdd = () => {
    // テキストボックスの値を取得し、初期化する
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    // liタグの生成
    const li = document.createElement("li");

    // divタグの生成
    const div = document.createElement("div");
    div.className = "list-row";

    // pタグの生成
    const p = document.createElement("p");
    p.innerText = inputText;

    // buttonタグ（完了）の生成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了"
    completeButton.addEventListener("click", () => {
        const completeTarget = completeButton.parentNode.parentNode;
        document.getElementById("imcomplete-list").removeChild(completeTarget);
        document.getElementById("complete-list").appendChild(completeTarget);
    });

    // buttonタグ（削除）の生成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除"
    deleteButton.addEventListener("click", () => {
        // 押された削除ボタンの親タグ（li）を未完了リストから削除
        const deleteTarget = deleteButton.parentNode.parentNode;
        document.getElementById("imcomplete-list").removeChild(deleteTarget);
    });

    // divタグの子要素に各要素を設定
    div.appendChild(p);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    li.appendChild(div);

    // 未完了のリストに追加
    document.getElementById("imcomplete-list").appendChild(li);
    console.log(li);
};

document.getElementById("add-button").addEventListener("click", () => onClickAdd());