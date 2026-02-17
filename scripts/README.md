# Calculator モジュール

## 概要

`calculator.py` は、基本的な算術演算と統計計算を提供するPythonモジュールです。電卓のような使い方で、加算、減算、乗算、除算などの演算を実行でき、すべての操作履歴を記録します。

**主な特徴:**
- 4則演算（加算、減算、乗算、除算）に対応
- べき乗と剰余計算に対応
- 統計計算（平均値、中央値、分散、標準偏差）
- すべての計算結果を履歴として保存
- エラーハンドリング（ゼロ除算、空のリストなど）

---

## 前提条件

- **Python 3.9以上** 必須（型ヒントの最新構文を使用）
- 標準ライブラリのみを使用しているため、追加のパッケージは不要

---

## 使い方

### 基本的な使用例

```python
from calculator import Calculator

# Calculator インスタンスを作成
calc = Calculator()

# 算術演算
result = calc.add(10, 5)        # 15
result = calc.subtract(10, 5)   # 5
result = calc.multiply(10, 5)   # 50
result = calc.divide(10, 5)     # 2.0
```

### 算術演算の例

```python
from calculator import Calculator

calc = Calculator()

# 加算
print(calc.add(10, 3))          # 13

# 減算
print(calc.subtract(10, 3))     # 7

# 乗算
print(calc.multiply(10, 3))     # 30

# 除算（小数点以下を含む）
print(calc.divide(10, 3))       # 3.3333...

# べき乗
print(calc.power(2, 8))         # 256

# 剰余
print(calc.modulo(10, 3))       # 1
```

### 統計計算の例

```python
from calculator import Calculator

calc = Calculator()

data = [4, 8, 15, 16, 23, 42]

# 平均値
mean_val = calc.mean(data)      # 18.0

# 中央値
median_val = calc.median(data)  # 15.5

# 分散（標本分散）
var = calc.variance(data)       # 193.2

# 標準偏差
stdev_val = calc.stdev(data)    # 13.9...
```

### 履歴の管理

```python
from calculator import Calculator

calc = Calculator()

calc.add(5, 3)
calc.multiply(4, 2)
calc.divide(10, 2)

# 計算履歴を取得
history = calc.get_history()
for operation, result in history:
    print(f"{operation} = {result}")
# 出力例:
# 5 + 3 = 8
# 4 * 2 = 8
# 10 / 2 = 5.0

# 履歴をクリア
calc.clear_history()
```

---

## APIリファレンス

### Calculator クラス

電卓の機能を提供するメインクラスです。

#### コンストラクタ

```python
Calculator()
```

- **パラメータ**: なし
- **戻り値**: なし
- **説明**: 新しい Calculator インスタンスを作成します。履歴は空の状態で初期化されます。

---

### 算術メソッド

#### `add(a: Number, b: Number) -> Number`

2つの数値を加算します。

```python
result = calc.add(10, 5)  # 15
```

- **パラメータ**:
  - `a` (int|float): 第1の数値
  - `b` (int|float): 第2の数値
- **戻り値**: int|float（加算結果）
- **例外**: なし

---

#### `subtract(a: Number, b: Number) -> Number`

第2の数値を第1の数値から減算します。

```python
result = calc.subtract(10, 3)  # 7
```

- **パラメータ**:
  - `a` (int|float): 被減数
  - `b` (int|float): 減数
- **戻り値**: int|float（減算結果）
- **例外**: なし

---

#### `multiply(a: Number, b: Number) -> Number`

2つの数値を乗算します。

```python
result = calc.multiply(10, 3)  # 30
```

- **パラメータ**:
  - `a` (int|float): 第1の数値
  - `b` (int|float): 第2の数値
- **戻り値**: int|float（乗算結果）
- **例外**: なし

---

#### `divide(a: Number, b: Number) -> float`

第1の数値を第2の数値で除算します。

```python
result = calc.divide(10, 3)  # 3.3333...
```

- **パラメータ**:
  - `a` (int|float): 被除数
  - `b` (int|float): 除数
- **戻り値**: float（除算結果）
- **例外**:
  - `ZeroDivisionError`: `b == 0` の場合に発生

---

#### `power(base: Number, exponent: Number) -> Number`

底を指数で累乗します。

```python
result = calc.power(2, 8)  # 256
```

- **パラメータ**:
  - `base` (int|float): 底
  - `exponent` (int|float): 指数
- **戻り値**: int|float（累乗結果）
- **例外**: なし

---

#### `modulo(a: Number, b: Number) -> Number`

第1の数値を第2の数値で割った剰余を求めます。

```python
result = calc.modulo(10, 3)  # 1
```

- **パラメータ**:
  - `a` (int|float): 被除数
  - `b` (int|float): 除数
- **戻り値**: int|float（剰余）
- **例外**:
  - `ZeroDivisionError`: `b == 0` の場合に発生

---

### 統計メソッド

#### `mean(values: list[Number]) -> float`

リスト内の値の平均値（算術平均）を計算します。

```python
result = calc.mean([4, 8, 15, 16, 23, 42])  # 18.0
```

- **パラメータ**:
  - `values` (list[int|float]): 値のリスト
- **戻り値**: float（平均値）
- **例外**:
  - `ValueError`: `values` が空リストの場合に発生

---

#### `median(values: list[Number]) -> Number`

リスト内の値の中央値を計算します。偶数個の要素がある場合は、中央の2つの値の平均を返します。

```python
result = calc.median([4, 8, 15, 16, 23, 42])  # 15.5
```

- **パラメータ**:
  - `values` (list[int|float]): 値のリスト
- **戻り値**: int|float（中央値）
- **例外**:
  - `ValueError`: `values` が空リストの場合に発生

---

#### `variance(values: list[Number]) -> float`

リスト内の値の分散（標本分散）を計算します。分母は `n-1` を使用します。

```python
result = calc.variance([4, 8, 15, 16, 23, 42])  # 193.2
```

- **パラメータ**:
  - `values` (list[int|float]): 値のリスト（最低2個の要素が必要）
- **戻り値**: float（分散）
- **例外**:
  - `ValueError`: `values` に2個未満の要素しかない場合に発生

---

#### `stdev(values: list[Number]) -> float`

リスト内の値の標準偏差を計算します。分散の平方根を返します。

```python
result = calc.stdev([4, 8, 15, 16, 23, 42])  # 13.9...
```

- **パラメータ**:
  - `values` (list[int|float]): 値のリスト（最低2個の要素が必要）
- **戻り値**: float（標準偏差）
- **例外**:
  - `ValueError`: `values` に2個未満の要素しかない場合に発生（`variance()` から伝播）

---

### 履歴管理メソッド

#### `get_history() -> list[tuple[str, Number]]`

すべての計算操作の履歴を取得します。

```python
history = calc.get_history()
for operation, result in history:
    print(f"{operation} = {result}")
```

- **パラメータ**: なし
- **戻り値**: tuple のリスト。各 tuple は `(操作説明, 結果)` の形式
- **例外**: なし
- **注意**: 返されたリストは内部履歴のコピーなため、変更しても元の履歴には影響しません。

---

#### `clear_history() -> None`

計算履歴をすべてクリアします。

```python
calc.clear_history()
```

- **パラメータ**: なし
- **戻り値**: なし
- **例外**: なし

---

## エラーハンドリング

### ZeroDivisionError

ゼロで除算または剰余計算を試みた場合に発生します。

```python
try:
    result = calc.divide(10, 0)
except ZeroDivisionError as e:
    print(f"エラー: {e}")  # エラー: Division by zero is not allowed
```

```python
try:
    result = calc.modulo(10, 0)
except ZeroDivisionError as e:
    print(f"エラー: {e}")  # エラー: Modulo by zero is not allowed
```

### ValueError

統計メソッドで無効なデータが渡された場合に発生します。

```python
try:
    result = calc.mean([])  # 空リスト
except ValueError as e:
    print(f"エラー: {e}")  # エラー: Cannot compute mean of empty list
```

```python
try:
    result = calc.variance([5])  # 要素が1個のみ
except ValueError as e:
    print(f"エラー: {e}")  # エラー: Need at least 2 values for variance
```

### 推奨される使用パターン

```python
from calculator import Calculator

calc = Calculator()

# 入力値の検証を行う
try:
    if divisor == 0:
        raise ValueError("除数がゼロです")
    result = calc.divide(dividend, divisor)
except ZeroDivisionError:
    print("ゼロで除算することはできません")
except ValueError as e:
    print(f"入力エラー: {e}")

# 統計計算時は事前にリストの長さをチェック
data = [1, 2, 3]
if len(data) >= 2:
    stdev = calc.stdev(data)
else:
    print("標準偏差を計算するには最低2個の値が必要です")
```

---

## スクリプトの実行

モジュールをスタンドアロンで実行して、デモンストレーションを見ることができます。

```bash
python calculator.py
```

このコマンドは、すべての機能の実行例と計算履歴を出力します。

