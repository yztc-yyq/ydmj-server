var requireText = require('require-text');
var Goods = requireText('./goods/goods.gql', require);
var Business = requireText('./business/business.gql', require);
var GoodsType = requireText('./goodsType/goodsType.gql', require);
var Answer = requireText('./answer/answer.gql', require);
var Advertm = requireText('./advertm/advertm.gql', require);
var Transaction = requireText('./transaction/transaction.gql', require);

export const MallSchema = [ 
    Business,
    GoodsType,
    Goods,  
    Answer,
    Advertm,
    Transaction,
];