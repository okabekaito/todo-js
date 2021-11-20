import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得して、空にする
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  //完了ボタン生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された項目を削除
    deleteFromIncopleteList(completeButton.parentNode);

    //完了ボタンが押されたら完了の方へ移動する
    const addTarget = completeButton.parentNode;
    //todo内容テキストを取得
    const text = addTarget.firstElementChild.innerText;
    //div以下は初期化
    addTarget.textContent = null;

    //liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    //buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    //divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    //完了リストに追加
    document.getElementById("complite-list").appendChild(addTarget);
  });

  //削除ボタン生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグを(div)を未完了リストから削除
    deleteFromIncopleteList(deleteButton.parentNode);
  });

  //divタグの子要素の各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
};
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

//未完了リストから指定の要素を削除
const deleteFromIncopleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};
