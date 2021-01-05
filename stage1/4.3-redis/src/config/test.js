import { getValue, setValue, getHValue, delValue } from "./RedisConfig";

setValue('imooc', 'imooc message from redis client')

getValue('imooc').then((response) => {
    console.log(response)
})


setValue('imoocObj', {'title': 'imooc message from redis client', 'sub-title': 'another message from redis client'})
getHValue('imoocObj').then((response) => {
    console.log(JSON.stringify(response, null, 2));
})

delValue('imoocObj')