function decrypt(message, key){
   const delKey = key.match(/^p(\d+)\[/)[1];
   const switchKey =key.match(/\[(.*?)\]/)[1].split("-").map(Number);
   let ans = [];
   for(let key of switchKey){
    ans.push(message[key-1])
   }
   return delKey === 0 ? ans.join("") :ans.slice(0,message.length-delKey).join("")
}
console.log(decrypt("snes@%jhrjsrawedoc", "p10[18-17-16-15-14-13-12-11-10-9-8-7-6-5-4-3-2-1]"));
//delKey === 0 ? ans.join("") :ans.slice(0,message.length-delKey).join("")