//----------Generator Start----------//
    //--------Generator List Start--------//
let pron =["The", "Our", "Tom's"];
let adj = ["Peaceful", "Rapid", "Terrible"];
let noun = ["Kilometer", "Station", "Machine"];
let dom = [".com", ".tv", ".org"];
    //--------Generator List End--------//
        //------Generator Loop Start------// 
for(let i = 0; i < pron.length; i++){
    for(let j = 0; j < adj.length; j++){
        for(let k = 0; k < noun.length; k++){
            for( let l = 0; l < dom.length; l++){
                console.log(`${pron[i]}${adj[j]}${noun[k]}${dom[l]}`)
            }
        }
    }
}
        //------Generator Loop End------//
//----------Generator End----------//