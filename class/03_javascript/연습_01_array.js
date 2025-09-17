let classmates = ["철수","영희","훈이"]

classmates
// (3) ['철수', '영희', '훈이']
classmates[0]
// '철수'
classmates[1]
// '영희'
classmates[2]
// '훈이'
classmates.includes("훈이")
// true
classmates.includes("맹구")
// false
classmates.length
// 3
classmates.push("맹구")
// 4
classmates.includes("맹구")
// true
classmates.pop()
// '맹구'
classmates.includes("맹구")
// false

// ================================= //
let developer = ["개발자","프레임워크","스택오버플로","AI도구","열정"]
// undefined
developer[4]
// '열정'
let dream = ["커리어점프","성공","할수있다"]
// undefined
developer.concat(dream)
// (8) ['개발자', '프레임워크', '스택오버플로', 'AI도구', '열정', '커리어점프', '성공', '할수있다']
let result = developer.concat(dream)
// undefined
result
// (8) ['개발자', '프레임워크', '스택오버플로', 'AI도구', '열정', '커리어점프', '성공', '할수있다']