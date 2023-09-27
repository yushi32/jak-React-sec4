import "./styles.css";

const onClickAdd = () => {
    // テキストボックスの値を取得し、初期化する
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
    document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
    // liタグの生成
    const li = document.createElement("li");

    // divタグの生成
    const div = document.createElement("div");
    div.className = "list-row";

    // pタグの生成
    const p = document.createElement("p");
    p.innerText = text;

    // buttonタグ（完了）の生成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了"
    completeButton.addEventListener("click", () => {
        // 押されたボタンの親要素（p）を未完了リストから削除
        const addTarget = completeButton.parentNode.parentNode;
        // 共通処理なので、関数化して呼び出す
        deleteFromIncompleteList(addTarget);
        
        // ToDo内容テキストを取得
        const text = addTarget.firstElementChild.firstElementChild.innerText;

        // div以下を初期化
        addTarget.firstElementChild.textContent = null;

        // liタグとbuttonタグを生成
        const p = document.createElement("p");
        p.innerText = text;
        const backButton = document.createElement("button");
        backButton.innerText = "戻す";
        backButton.addEventListener("click", () => {
            // 押された戻すボタンの親要素(div < li)を完了リストから削除
            const deleteTarget = backButton.parentNode.parentNode;
            document.getElementById("complete-list").removeChild(deleteTarget);

            // テキストを取得
            const text = backButton.parentNode.firstElementChild.innerText;

            // TODOを削除
            createIncompleteList(text);
        });

        // divタグの子要素にliタグとbuttonタグを追加
        addTarget.firstElementChild.appendChild(p);
        addTarget.firstElementChild.appendChild(backButton);

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

document.getElementById("add-button").addEventListener("click", () => onClickAdd());