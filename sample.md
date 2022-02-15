#### tron 账号被黑
round 1
TYAy9bXUZ9Hf3VcBkdghfbuRScCcxRHkh1 
表现：没办法提币

清理所有的账户来往信息，发现特别复杂，但是手续费没有 于是打进去了 1000个 trx，瞬间被转走。 

#### 第一次转入1000trx
https://tronscan.org/#/transaction/2f26bc72daf04804478d183a0732811fb08d747ed85ecc4ec5d8750af6f1d18e

#### 立马被转走 1000trx
https://tronscan.org/#/transaction/6223e641b930ce0f5ba43620d943b7a3947b5c816cd3441d3ab73db1999604e5

#### 黑客 某账号 目前完全不动
https://tronscan.org/#/address/TFKSq1F1RBhqmLjqktcRk74YpMDGCDQAeX/transactions

#### 尝试获取账户信息
curl --location --request GET 'https://api.trongrid.io/v1/accounts/TYAy9bXUZ9Hf3VcBkdghfbuRScCcxRHkh1'

出现一个可疑账户 TSdqgavXHgwF19ssJP8CPnaqJbF5Lb1Nyv
这个账户拿着私钥更改了TYAy9bXUZ9Hf3VcBkdghfbuRScCcxRHkh1 的active信息

#### 分析 TSdqgavXHgwF19ssJP8CPnaqJbF5Lb1Nyv
发现一个out 到一个账户 TLYCaS9cZErMpUuwjZQbkFvYqx6Zaq11hE 账户（3,957,491.536 TRX）
该账户最后会转入一个 TSTxCCZdMf6fvEQomven4y9FNemC1ZJtE7 账户（40,361.55 TRX）
这两个账户 对经过一堆小账户 最后 互转。

#### 一个猜想
黑客拿着多签账户 自身的weight2 > 1 来闲置owner 账户转账
然后去验证猜想 感谢@flanker帮忙验证，发现是错误的。这里的weight并不会影响owner的权限

#### 尝试转账 测试token AAANFT
https://tronscan.org/#/transaction/36cd9a2348e3beb2fda071304cef5b5da221e6f6f182c82a4f7ba6544c8cc7b6
这里测试成功

#### 真相只有一个 合约拉黑

TYAy9bXUZ9Hf3VcBkdghfbuRScCcxRHkh1 true
TSdqgavXHgwF19ssJP8CPnaqJbF5Lb1Nyv false

#### 破案了 
这个账户先是被黑资金转入 诈骗了
后被泰达官方锁定了
最后又被黑客黑了，拿不出里面的任何现金，trx还被转走