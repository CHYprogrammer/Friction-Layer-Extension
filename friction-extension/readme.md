# Friction Layer

Chrome拡張機能として動作する、シンプルな「誘惑遅延ツール」。

指定したWebサイト（現在は YouTube）を開いたときに、
一定時間のカウントダウン画面を表示し、
衝動的なアクセスに friction（摩擦）を与えることを目的とする。

---

## Current Features

- [Google Chrome](chatgpt://generic-entity?number=0) Extension
- `youtube.com` を開いたときに自動発火
- 黒背景 + ターミナル風カウントダウン
- 20秒経過後に閲覧可能

---

## File Structure

```bash
friction-extension/
├── manifest.json
├── content.js
└── README.md
```

---

## File Descriptions

### `manifest.json`

Chrome拡張機能の設定ファイル。

役割：

- 拡張機能の名前を定義
- バージョンを定義
- どのページでスクリプトを動かすか指定

Chromeは最初にこのファイルを読む。

---

### `content.js`

実際の挙動を定義するJavaScriptファイル。

役割：

1. 現在開いているURLを取得
2. `youtube.com` か判定
3. overlay（黒画面）を生成
4. 20秒カウントダウン開始
5. カウント終了後 overlay を削除

---

## Core Logic

### 1. iframe除外

```javascript
if (window === window.top)
```

広告や埋め込みiframeでは発火しないようにする。

---

### 2. URL判定

```javascript
hostname.includes("youtube.com")
```

現在のドメインが対象サイトか確認。

---

### 3. Overlay生成

```javascript
document.createElement("div")
```

画面全体を覆う黒いレイヤーを生成。

---

### 4. Timer開始

```javascript
setInterval()
```

1秒ごとに数字を減らす。

---

## How to Run

### 1. Chromeで拡張機能ページを開く

```text
chrome://extensions
```

### 2. デベロッパーモードをON

### 3. 「パッケージ化されていない拡張機能を読み込む」

`friction-extension` フォルダを選択。

---

## Future Plans

- 任意ドメイン登録
- 待機時間変更
- 設定UI追加
- 行動ログ保存
- friction時間の動的調整
