// 定义表示记分牌的类
export default class ScorePanel {
  // score和level用来记录分数和等级
  score = 0;
  level = 1;

  // 分数和等级所在的元素，在构造函数中进行初始化
  scoreEle: HTMLElement;
  levelEle: HTMLElement;

  // 最大等级
  maxLevel: number;
  // 升级分数
  upScore: number;

  constructor(maxLevel: number = 10, upScore: number = 10) {
    this.scoreEle = document.getElementById('score')!;
    this.levelEle = document.getElementById('level')!;
    this.maxLevel = maxLevel;
    this.upScore = upScore;
  }

  // 设置一个加分的方法
  addScore() {
    // 分数自增
    this.scoreEle.innerText = ++this.score + '';
    // 判断分数是多少
    if (this.score % this.upScore == 0) {
      this.levelUp();
    }
  }

  // 提升等级的方法
  levelUp() {
    if (this.level < this.maxLevel) {
      this.levelEle.innerText = ++this.level + '';
    }
  }
}

// 测试代码
// const scorePanel = new ScorePanel(10, 10);
// for (let i = 0; i < 10; i++) {
//   scorePanel.addScore();
// }
