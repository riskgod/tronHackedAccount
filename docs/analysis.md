#### tron 账号被黑
TYAy9bXUZ9Hf3VcBkdghfbuRScCcxRHkh1 
表现：没办法提币

清理所有的账户来往信息，发现特别复杂，
有一堆claim 的项目来自@todd的建议，全部取消，
但是手续费没有 于是打进去了 1000个 trx，瞬间被转走。 

#### 第一次转入1000trx
https://tronscan.org/#/transaction/2f26bc72daf04804478d183a0732811fb08d747ed85ecc4ec5d8750af6f1d18e

#### 立马被转走 1000trx
https://tronscan.org/#/transaction/6223e641b930ce0f5ba43620d943b7a3947b5c816cd3441d3ab73db1999604e5

为啥只转走trx 不动 usdt呢
猜想：
    - usdt 没有找到洗的路径？
    - 黑客是没注意到这个usdt？

#### 黑客 某账号 目前完全不动
https://tronscan.org/#/address/TFKSq1F1RBhqmLjqktcRk74YpMDGCDQAeX/transactions

#### tron的账户特点
每个账户都有可能是多签账户
    - owner
    - witness
    - active

#### 尝试获取账户信息
curl --location --request GET 'https://api.trongrid.io/v1/accounts/TYAy9bXUZ9Hf3VcBkdghfbuRScCcxRHkh1'

出现一个可疑账户 TSdqgavXHgwF19ssJP8CPnaqJbF5Lb1Nyv
这个账户拿着私钥更改了TYAy9bXUZ9Hf3VcBkdghfbuRScCcxRHkh1 的active信息合理
 - 这里很关键的确认了私钥确实泄露了！

#### 黑客把trx 转到他自己的账户 
https://tronscan.org/#/transaction/97b423b3bf49a68e534e6c81ead3ae32d99d65fb26ded09c3b6411ee29869bba

#### 分析 TSdqgavXHgwF19ssJP8CPnaqJbF5Lb1Nyv
发现一个out 到一个账户 TLYCaS9cZErMpUuwjZQbkFvYqx6Zaq11hE 账户（3,957,491.536 TRX）
该账户最后会转入一个 TSTxCCZdMf6fvEQomven4y9FNemC1ZJtE7 账户（46,300.941985 TRX）
这两个账户 对经过一堆小账户 最后 互转。

#### 一个猜想
黑客拿着多签账户 自身的weight2 > 1 来闲置owner 账户转账
然后去验证猜想 感谢@flanker帮忙验证，发现是错误的。这里的weight并不会影响owner的权限

#### 尝试转账 测试token AAANFT
https://tronscan.org/#/transaction/36cd9a2348e3beb2fda071304cef5b5da221e6f6f182c82a4f7ba6544c8cc7b6
这里测试成功

#### 真相只有一个 TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t合约拉黑

TYAy9bXUZ9Hf3VcBkdghfbuRScCcxRHkh1 true
TSdqgavXHgwF19ssJP8CPnaqJbF5Lb1Nyv false

#### 破案了 
这个账户先是被黑资金转入 诈骗了
后被泰达官方锁定了
最后又被黑客黑了，拿不出里面的任何现金，trx还被转走
