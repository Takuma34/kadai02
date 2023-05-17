////  開始ボタンで始動　///
$("#str").click(function () {
  $(".hide_last").addClass("fadeUp");
  $(".btn").addClass("disp_none");
  alert("ゲーム説明");
});

///  ゲームページ　//
let answer = [];
let myanswer = [];
let que = [];
let turn = [];
let hit = 0;
let blow = 0;

////  スタートボタンで始動　///
function newgame() {
  turn = 0;
  document.getElementById("starbtn").style.display = "none";
  selectN();
}

///  タイトルボタンのクリックで、ヒント表示　///
$(".title").click(function () {
  alert("Hello World!");
});

////  ランダムで数字を作成  ///
function selectN() {
  let numlist = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  for (let i = 0; i < 3; i++) {
    let ran = Math.floor(Math.random() * numlist.length);
    que[i] = numlist[ran];
    numlist.splice(ran, 1);
    console.log(que);
    console.log(que[0] + que[1] + que[2]);
  }
}
///  決定で数字を送る  ///
$("#go").on("click", function () {
  turn += 1;
  myanswer.push(document.getElementsByName("myanswer_n")[0].value);
  myanswer.push(document.getElementsByName("myanswer_o")[0].value);
  myanswer.push(document.getElementsByName("myanswer_p")[0].value);
  console.log(myanswer);

  const myanswer_n = document.querySelector('select[name="myanswer_n"]');
  const selectedn = myanswer_n.value;
  console.log("回答n ", selectedn);

  const myanswer_o = document.querySelector('select[name="myanswer_o"]');
  const selectedo = myanswer_o.value;
  console.log("回答o ", selectedo);

  const myanswer_p = document.querySelector('select[name="myanswer_p"]');
  const selectedp = myanswer_p.value;
  console.log("回答p ", selectedp);

  $("#youNum1").html(selectedn);
  $("#youNum2").html(selectedo);
  $("#youNum3").html(selectedp);

  alert(turn + "回目のチャレンジ");

  ////　　重複した値を表示　　==  BLOW  ////
  const arrayA = [que[0], que[1], que[2]];
  const arrayB = [myanswer[0], myanswer[1], myanswer[2]];
  const result = arrayA.filter((item) => arrayB.includes(item));
  console.log(result); // [重複している数字]　//
  const count = result.length; // [重複している数字の個数]　//
  alert(count + "/Blow");

  ////　　一致した値を表示　　==  HIT  ////
  console.log(que);
  console.log(myanswer);
  if (que[0] == myanswer[0]) {
    hit += 1;
    $("#youNum1").css("background", "#3b82c4");
  }
  if (que[1] == myanswer[1]) {
    hit += 1;
    $("#youNum2").css("background", "#3b82c4");
  }
  if (que[2] == myanswer[2]) {
    hit += 1;
    $("#youNum3").css("background", "#3b82c4");
  }
  alert(hit + "/HIT");

  ////   回答を履歴で表示  ///
  $("#field").append(
    turn +
      "回目のチャレンジ[ " +
      myanswer[0] +
      myanswer[1] +
      myanswer[2] +
      " ] " +
      hit +
      " HIT / " +
      count +
      " BLOW<br>"
  );

  if (hit == 3) {
    alert("おめでとう、正解です。");
    location.reload();
  } else if (turn == 7) {
    alert("残念、失敗です。");
    location.reload();
  }

  hit = 0;
  myanswer.length = 0;
});

//// クリアボタンで、選択肢の数字をリセット ///
$("#clear").on("click", function () {
  $('select[name="myanswer_n"]').val("1");
  $('select[name="myanswer_o"]').val("1");
  $('select[name="myanswer_p"]').val("1");
  // $("#youNum3").html("*"); ///  いらないかな？　///
  // $("#youNum2").html("*");
  // $("#youNum1").html("*");
});
