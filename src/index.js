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
        // 押されたボタンの親要素（p）を未完了リストから削除
        const addTarget = completeButton.parentNode.parentNode;
        // 共通処理なので、関数化して呼び出す
        deleteFromIncompleteList(addTarget);

        // 完了・削除ボタンを消去
        const buttons = addTarget.querySelectorAll("button");
        buttons.forEach(button => {
            button.remove();
        });
        // 戻すボタンを追加
        const cancelButton = document.createElement("button");
        cancelButton.innerText = "戻す";
        addTarget.firstChild.appendChild(cancelButton);
        // 完了リストに追加
        document.getElementById("complete-list").appendChild(addTarget);
    });

    // buttonタグ（削除）の生成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除"
    deleteButton.addEventListener("click", () => {
        // 押された削除ボタンの親要素（li）を未完了リストから削除 => 共通処理を関数化して呼び出す
        deleteFromIncompleteList(deleteButton.parentNode.parentNode);
    });

    // divタグの子要素に各要素を設定
    div.appendChild(p);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    li.appendChild(div);

    // 未完了のリストに追加
    document.getElementById("incomplete-list").appendChild(li);
    console.log(li);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
    document.getElementById("incomplete-list").removeChild(target);
};

document.getElementById("add-button").addEventListener("click", () => onClickAdd());