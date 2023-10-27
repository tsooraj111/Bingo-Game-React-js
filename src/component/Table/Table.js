import React,{useState,useEffect} from "react";
import "./Table.css"

// var [val,setVal]=useState(Array.apply(null,{length:26}).map(Number.call,Number).splice(1,25));
let val=Array.apply(null,{length:26}).map(Number.call,Number).splice(1,25);

    const shuffle=(val)=>{
        let currentIndex=val.length,randomIndex;
        while (currentIndex!==0) {
            randomIndex=Math.floor(Math.random() * currentIndex);
             currentIndex--;
            [val[currentIndex],val[randomIndex]]=[val[randomIndex],val[currentIndex]]
            }
        return Array;
    }
    shuffle(val);


const Table=()=>{

    const [am,setAM]=useState(false);
    const [an,setAN]=useState(false);
    const [ao,setAO]=useState(false);
    const [ap,setAP]=useState(false);
    const [aq,setAQ]=useState(false);
    const [bm,setBM]=useState(false);
    const [bn,setBN]=useState(false);
    const [bo,setBO]=useState(false);
    const [bp,setBP]=useState(false);
    const [bq,setBQ]=useState(false);
    const [cm,setCM]=useState(false);
    const [cn,setCN]=useState(false);
    const [co,setCO]=useState(false);
    const [cp,setCP]=useState(false);
    const [cq,setCQ]=useState(false);
    const [dm,setDM]=useState(false);
    const [dn,setDN]=useState(false);
    const [dO,setDO]=useState(false);
    const [dp,setDP]=useState(false);
    const [dq,setDQ]=useState(false);
    const [em,setEM]=useState(false);
    const [en,setEN]=useState(false);
    const [eo,setEO]=useState(false);
    const [ep,setEP]=useState(false);
    const [eq,setEQ]=useState(false);

    const [x,setX]=useState(0);
    const [x1,setX1]=useState(0);
    const [y,setY]=useState(0);
    const [y1,setY1]=useState(0);
    const [b1,setB1]=useState(0);
    const [b,setB]=useState(0);
    const [a,setA]=useState(0);
    const [a1,setA1]=useState(0);
    const [c,setC]=useState(0);
    const [c1,setC1]=useState(0);
    const [d,setD]=useState(0);
    const [d1,setD1]=useState(0);
    const [e,setE]=useState(0);
    const [e1,setE1]=useState(0);
    const [m1,setM1]=useState(0);
    const [n1,setN1]=useState(0);
    const [o1,setO1]=useState(0);
    const [p1,setP1]=useState(0);
    const [q1,setQ1]=useState(0);
    const [m,setM]=useState(0);
    const [n,setN]=useState(0);
    const [o,setO]=useState(0);
    const [p,setP]=useState(0);
    const [q,setQ]=useState(0);
    const [bingo,setBingo]=useState(0);

    const click1=()=>{
        setX(x+1)
        setA(a+1)
        setA1(a1+1)
        setM(m+1)
        setM1(m1+1)
        setY1(y1+1)
        setAM(1)      
}
const click2=()=>{
    setA(a+1)
    setA1(a1+1)
    setN(n+1)
    setN1(n1+1)
    setAN(2)

}
const click3=()=>{
    setA(a+1)
    setA1(a1+1)
    setO(o+1)
    setO1(o1+1)
    setAO(3)

}
const click4=()=>{
    setA(a+1)
    setA1(a1+1)
    setP(p+1)
    setP1(p1+1)
    setAP(4)

}
const click5=()=>{
    setA(a+1)
    setA1(a1+1)
    setQ(q+1)
    setQ1(q1+1)
    setX1(x1+1)
    setY(y+1)
    setAQ(5)
}
const click6=()=>{
    setB(b+1)
    setB1(b1+1)
    setM(m+1)
    setM1(m1+1)
    setBM(6)
}
const click7=()=>{
    setB(b+1)
    setB1(b1+1)
    setN(n+1)
    setN1(n1+1)
    setX(x+1)
    setY1(y1+1)
    setBN(7)
}
const click8=()=>{
    setB(b+1)
    setB1(b1+1)
    setO(o+1)
    setO1(o1+1)
    setBO(8)
}
const click9=()=>{
    setB(b+1)
    setB1(b1+1)
    setP(p+1)
    setP1(p1+1)
    setX1(x1+1)
    setY(y+1)
    setBP(9)
}
const click10=()=>{
    setB(b+1)
    setB1(b1+1)
    setQ(q+1)
    setQ1(q1+1)
    setBQ(10)
}
const click11=()=>{
    setC(c+1)
    setC1(c1+1)
    setM(m+1)
    setM1(m1+1)
    setCM(11)
}
const click12=()=>{
    setC(c+1)
    setC1(c1+1)
    setN(n+1)
    setN1(n1+1)
    setCN(12)
}
const click13=()=>{
    setC(c+1)
    setC1(c1+1)
    setO(o+1)
    setO1(o1+1)
    setX(x+1)
    setX1(x1+1)
    setY(y+1)
    setY1(y1+1)
    setCO(13)
}
const click14=()=>{
    setC(c+1)
    setC1(c1+1)
    setP(p+1)
    setP1(p1+1)
    setCP(14)
}
const click15=()=>{
    setC(c+1)
    setC1(c1+1)
    setQ(q+1)
    setQ1(q1+1)
    setCQ(15)
}
const click16=()=>{
    setD(d+1)
    setD1(d1+1)
    setM(m+1)
    setM1(m1+1)
    setDM(16)
}
const click17=()=>{
    setD(d+1)
    setD1(d1+1)
    setN(n+1)
    setN1(n1+1)
    setX1(x1+1)
    setY(y+1)
    setDN(17)
}
const click18=()=>{
    setD(d+1)
    setD1(d1+1)
    setO(o+1)
    setO1(o1+1)
    setDO(18)
}
const click19=()=>{
    setD(d+1)
    setD1(d1+1)
    setP(p+1)
    setP1(p1+1)
    setY1(y1+1)
    setX(x+1)
    setDP(19)
}
const click20=()=>{
    setD(d+1)
    setD1(d1+1)
    setQ(q+1)
    setQ1(q1+1)
    setDQ(20)
}
const click21=()=>{
    setE(e+1)
    setE1(e1+1)
    setM(m+1)
    setM1(m1+1)
    setX1(x1+1)
    setY(y+1)
    setEM(21)
}
const click22=()=>{
    setE(e+1)
    setE1(e1+1)
    setN(n+1)
    setN1(n1+1)
    setEN(22)
}
const click23=()=>{
    setE(e+1)
    setE1(e1+1)
    setO(o+1)
    setO1(o1+1)
    setEO(23)
}
const click24=()=>{
    setE(e+1)
    setE1(e1+1)
    setP(p+1)
    setP1(p1+1)
    setEP(24)
}
const click25=()=>{
    setE(e+1)
    setE1(e1+1)
    setQ(q+1)
    setQ1(q1+1)
    setY1(y1+1)
    setX(x+1)
    setEQ(25)
}
const arr=[1,2,3,4,5]
[a,b,c,d,e]=[am,an,ao,ap,aq];
useEffect(()=>{
        if((am===1&&an==2&&ao===3&&ap===4&&aq===5)||(am===1&&bm===6&&cm===11&&dm===16&&em===21)){
        setBingo(bingo+1)
        console.log(bingo);
        }
    },[am,an,ao,ap,aq,bm,bn,bo,bp,bq,cm,cn,co,cp,cq,dm,dn,dO,dp,dq,em,en,eo,ep,eq])
console.log(am);
console.log(bm);
console.log(cm);
console.log(dm);
console.log(em);
  return (
    <div className="container">
        <ul>
            <li className={(bingo===1)?"bingYes":"bingoNo"}><p>B</p></li>
            <li className={(bingo===2)?"bingYes":"bingoNo"}><p>I</p></li>
            <li className={(bingo===3)?"bingYes":"bingoNo"}><p>N</p></li>
            <li className={(bingo===4)?"bingYes":"bingoNo"}><p>G</p></li>
            <li className={(bingo===5)?"bingYes":"bingoNo"}><p>O</p></li>
        </ul>
    <div className='table-cont' >
      <table>
        <tbody>
        {/* <tr>
            <td>{x}</td>
            <td>{m}</td>
            <td>{n}</td>
            <td>{o}</td>
            <td>{p}</td>
            <td>{q}</td>
            <td>{y}</td>
        </tr> */}
        <tr>
            {/* <td>{a}</td> */}
            <td><button onClick={click1} className={(!am)?"clk1":"clk2"}  disabled={am}>{val[0]}</button></td>
            <td><button onClick={click2} className={(!an)?"clk1":"clk2"}  disabled={an}>{val[1]}</button></td>
            <td><button onClick={click3} className={(!ao)?"clk1":"clk2"}  disabled={ao}>{val[2]}</button></td>
            <td><button onClick={click4} className={(!ap)?"clk1":"clk2"}  disabled={ap}>{val[3]}</button></td>
            <td><button onClick={click5} className={(!aq)?"clk1":"clk2"}  disabled={aq}>{val[4]}</button></td>
            {/* <td>{a1}</td> */}
        </tr>
        <tr>
            {/* <td>{b}</td> */}
            <td><button onClick={click6} className={(!bm)?"clk1":"clk2"}  disabled={bm}>{val[5]}</button></td>
            <td><button onClick={click7} className={(!bn)?"clk1":"clk2"} disabled={bn}>{val[6]}</button></td>
            <td><button onClick={click8} className={(!bo)?"clk1":"clk2"} disabled={bo}>{val[7]}</button></td>
            <td><button onClick={click9} className={(!bp)?"clk1":"clk2"} disabled={bp}>{val[8]}</button></td>
            <td><button onClick={click10} className={(!bq)?"clk1":"clk2"} disabled={bq}>{val[9]}</button></td>
            {/* <td>{b1}</td> */}
        </tr>
        <tr>
            {/* <td>{c}</td> */}
            <td><button onClick={click11} className={(!cm)?"clk1":"clk2"} disabled={cm}>{val[10]}</button></td>
            <td><button onClick={click12} className={(!cn)?"clk1":"clk2"} disabled={cn}>{val[11]}</button></td>
            <td><button onClick={click13} className={(!co)?"clk1":"clk2"} disabled={co}>{val[12]}</button></td>
            <td><button onClick={click14} className={(!cp)?"clk1":"clk2"} disabled={cp}>{val[13]}</button></td>
            <td><button onClick={click15} className={(!cq)?"clk1":"clk2"} disabled={cq}>{val[14]}</button></td>
            {/* <td>{c1}</td> */}
        </tr>
        <tr>
            {/* <td>{d}</td> */}
            <td><button onClick={click16} className={(!dm)?"clk1":"clk2"} disabled={dm}>{val[15]}</button></td>
            <td><button onClick={click17} className={(!dn)?"clk1":"clk2"} disabled={dn}>{val[16]}</button></td>
            <td><button onClick={click18} className={(!dO)?"clk1":"clk2"} disabled={dO}>{val[17]}</button></td>
            <td><button onClick={click19} className={(!dp)?"clk1":"clk2"} disabled={dp}>{val[18]}</button></td>
            <td><button onClick={click20} className={(!dq)?"clk1":"clk2"} disabled={dq}>{val[19]}</button></td>
            {/* <td>{d1}</td> */}
        </tr>
        <tr>
            {/* <td>{e}</td> */}
            <td><button onClick={click21} className={(!em)?"clk1":"clk2"} disabled={em}>{val[20]}</button></td>
            <td><button onClick={click22} className={(!en)?"clk1":"clk2"} disabled={en}>{val[21]}</button></td>
            <td><button onClick={click23} className={(!eo)?"clk1":"clk2"} disabled={eo}>{val[22]}</button></td>
            <td><button onClick={click24} className={(!ep)?"clk1":"clk2"} disabled={ep}>{val[23]}</button></td>
            <td><button onClick={click25} className={(!eq)?"clk1":"clk2"} disabled={eq}>{val[24]}</button></td>
            {/* <td>{e1}</td> */}
        </tr>
        {/* <tr>
            <td>{x1}</td>
            <td>{m1}</td>
            <td>{n1}</td>
            <td>{o1}</td>
            <td>{p1}</td>
            <td>{q1}</td>
            <td>{y1}</td>
        </tr> */}
        </tbody>
      </table>
    </div>
    </div>
  )
}
export default Table;