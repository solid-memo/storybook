import{t as e}from"./rolldown-runtime-Dh6celcD.js";import{D as t,O as n}from"./deck-DKp9PrD_.js";import{o as r,t as i}from"./course-CWbdTKZF.js";import{n as a,t as o}from"./ChapterPlayerScreen-SWlhvJ-h.js";import{c as s,f as c,i as l,l as u}from"./course-_Ad7bY2y.js";var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{r(),n(),a(),u(),{expect:d,fn:f,userEvent:p,within:m}=__STORYBOOK_MODULE_TEST__,h=s.chapters[0],g=l[0],_=i(g,c),v={...h,title:{en:`Linked data, and how the web of data names the things it describes`},steps:[{...h.steps[0],textFormat:t.markdown,theory:{en:`Things are named by **IRIs**.

---

A triple has three terms:

- a subject
- a predicate
- an object

---

Turtle writes them down:

\`\`\`turtle
<#me> foaf:knows <#you> .
\`\`\``}}]},y={...h,title:{ar:`التحيات`},steps:[{...h.steps[0],theory:{ar:`«مرحبا» تحية تقال في أي وقت من اليوم.`}}]},b={title:`Courses/ChapterPlayerScreen`,component:o,args:{chapter:h,stepIndex:0,phase:`read`,questionIndex:0,chunkIndex:0,card:g,choices:_,answer:null,busy:!1,error:null,onAnswerPhase:f(),onChunk:f(),onCheck:f(),lastLabel:`On to the final review`,onNext:f()},parameters:{controls:{exclude:[`chapter`,`card`,`choices`,`answer`,`error`]}}},x={play:async({args:e,canvasElement:t})=>{await p.click(m(t).getByRole(`button`,{name:`On to the question`})),await d(e.onAnswerPhase).toHaveBeenCalled()}},S={args:{chapter:v,chunkIndex:1},play:async({args:e,canvasElement:t})=>{await p.click(m(t).getByRole(`button`,{name:`Continue`})),await d(e.onChunk).toHaveBeenCalledWith(2)}},C={args:{phase:`answer`}},w={args:{stepIndex:1,phase:`answer`,questionIndex:1,card:l[2],choices:i(l[2],c),answer:{choice:i(l[2],c)[1],effect:`review`}}},T={args:{stepIndex:1,phase:`answer`,questionIndex:1,card:l[2],choices:i(l[2],c),answer:{choice:i(l[2],c)[0],effect:`introduce`}},play:async({args:e,canvasElement:t})=>{await p.click(m(t).getByRole(`button`,{name:`On to the final review`})),await d(e.onNext).toHaveBeenCalled()}},E={args:{phase:`answer`,error:`The server did not answer in time. Check your connection and try again.`}},D={args:{chapter:y}},O=[`Theory`,`TheoryInParts`,`Question`,`AnsweredWrong`,`LastQuestionAnswered`,`SaveFailed`,`Arabic`]})))()}k();export{w as AnsweredWrong,D as Arabic,T as LastQuestionAnswered,C as Question,E as SaveFailed,x as Theory,S as TheoryInParts,O as __namedExportsOrder,b as default};